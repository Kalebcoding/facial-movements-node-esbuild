const taskVision = require('@mediapipe/tasks-vision')
const { HandLandmarker, FaceLandmarker, FilesetResolver, DrawingUtils } = taskVision;


// Setting up main variables i will use later
const audioPlayer: HTMLAudioElement = document.getElementById('face-audio') as HTMLAudioElement;
const video: HTMLVideoElement = document.getElementById('webcam') as HTMLVideoElement;
const jawToggle: HTMLInputElement = document.getElementById('jaw-toggle') as HTMLInputElement;
const eyeBrowToggle: HTMLInputElement = document.getElementById('eye-brow-toggle') as HTMLInputElement;
const blinkToggle: HTMLInputElement = document.getElementById('blink-toggle') as HTMLInputElement;

// Would of used webcamTracker: FaceLandmarker here but its not liking it. Like just becaue I dont have proper bundler / configs setup. 
let webcamTracker = null;
let handTracker = null; 

// Will use the below to map out the categories so I dont have to use magic strings
interface BlendShapesCategories {
    index: number;
    score: number;
    categoryName: string;
    displayName: string;
}
let blendShapesDictionary: Record<string, number> = {};

// Supported Movements
enum SupportedMovements {
    JawOpen = 'jawOpen',
    BrowDownLeft = 'browDownLeft',
    BroDownRight = 'browDownRight'
}


// Dumb workaround for spam
let eyebrowLocked: boolean = false; 

/**
 * Create the Facelandmarker object for us
 */
const setFaceLandmarker = async (): Promise<void> => {
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    webcamTracker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
            delegate: "GPU"
        },
        outputFaceBlendshapes: true,
        runningMode: "VIDEO",
        numFaces: 1,
    })
};

const setHandLandmarker = async (): Promise<void> => {
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    handTracker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
          delegate: "GPU"
        },
        runningMode: "VIDEO",
        numHands: 2
      });
}


/**
 * Gets audio source with some parameters.
 * 
 * @param path - Path to audio file
 * @param showControls - If we want to show or hide the audio controls
 */
const setAudioSource = (path: string, showControls: boolean): void => {
    if (audioPlayer instanceof HTMLAudioElement) {
        audioPlayer.src = path;
        showControls ? audioPlayer.setAttribute('controls', '') : audioPlayer.removeAttribute("controls");
    }
}

/**
 * I didnt see anything in their documentation about accessing this value easier. I didnt really want to hardcode it 
 * @param jsonArray - This should map out the categories and their indexes 
 * @returns 
 */
const createBlendShapesDictionary = (jsonArray: BlendShapesCategories[]): Record<string, number> => {
    let dictionary: Record<string, number> = {};

    for (const item of jsonArray) {
        dictionary[item.categoryName] = item.index;
    }

    return dictionary;
}

/**
 * Used to detect how close two numbers are and if they are within the given tolerance range
 * @param num1 First number
 * @param num2 Second Number
 * @param tolerance Amount of variation to be considered close enough
 * @returns 
 */
const numbersAreClose = (num1: number, num2: number, tolerance: number) => {
    return Math.abs(num1 - num2) < tolerance;
}


/**
 * I dont think im deadset on this being the best way to go about this. But I wanted something a bit easier to interact with. 
 * Goal is take in the faceBlendShapes array from the detections call and generate a dictonary of their keys if its missing. 
 * @param faceBlendshapes 
 * @returns 
 */
const buildFaceBlendShapesDictonary = (faceBlendshapes): void => {
    if (!faceBlendshapes.length) {
        return;
    }

    if (Object.keys(blendShapesDictionary).length === 0) {
        blendShapesDictionary = createBlendShapesDictionary(faceBlendshapes[0].categories);
    }
};


let prevMouthOpen = false;
let prevMouthClosed = false;
/**
 * Jaw music start / stop control
 * Jaw open should play music
 * Jaw close should stop music
 * @param detections 
 */
const jawMusicControl = async (detections) => {
    const jawOpenScore = detections?.faceBlendshapes[0]?.categories[blendShapesDictionary[SupportedMovements.JawOpen]].score * 100;
    const mouthOpen = 100 - jawOpenScore < 70;
    const mouthClosed = 100 - jawOpenScore > 95; 

    if(mouthOpen && mouthOpen !== prevMouthOpen) {
        prevMouthOpen = mouthOpen;
        prevMouthClosed = false;
        audioPlayer.play();
    }

    if(mouthClosed && mouthClosed !== prevMouthClosed) {
        prevMouthClosed = mouthClosed;
        prevMouthOpen = false;
        audioPlayer.pause();
    }
}

let prevLeftBrowIsDown = false;
let prevRightBrowIsdown = false;
/**
 * Eye Brow volume controls. 
 * Left Brow Down should reduce the audio player volume
 * Right Brow Down should increase the audio player volume
 * @param detections 
 */
const eyeBrowControl = async (detections) => {
    const browDownLeftScore = detections?.faceBlendshapes[0]?.categories[blendShapesDictionary[SupportedMovements.BrowDownLeft]].score * 100;
    const leftBrowIsDown = 100 - browDownLeftScore < 35;
    const browDownRightScore = detections?.faceBlendshapes[0]?.categories[blendShapesDictionary[SupportedMovements.BroDownRight]].score * 100;
    const rightBrowIsDown = 100 - browDownRightScore < 35;


    if(prevLeftBrowIsDown !== leftBrowIsDown){
        prevLeftBrowIsDown = leftBrowIsDown; 
        if(leftBrowIsDown && !rightBrowIsDown){
            if(audioPlayer.volume - 0.2 > 0) {
                audioPlayer.volume -= 0.2;
            } else {
                audioPlayer.volume = 0;
            }
        }
    }

    if(prevRightBrowIsdown !== rightBrowIsDown){
        prevRightBrowIsdown = rightBrowIsDown; 
        if(rightBrowIsDown && !leftBrowIsDown){
            if(audioPlayer.volume + 0.2 < 1) {
                audioPlayer.volume += 0.2;
            } else {
                audioPlayer.volume = 1;
            }
        }
    }
}

/**
 * Logic for playing and stopping the music 
 * API only exposts jaw open, so we have to use that to track closing / open. 
 */
const faceControls = async () => {
    let lastVideoTime: Number = -1;
    let startTimeMs: Number = performance.now();
    if (video.currentTime != lastVideoTime) {
        lastVideoTime = video.currentTime;
        const detections = webcamTracker.detectForVideo(video, startTimeMs);

        buildFaceBlendShapesDictonary(detections.faceBlendshapes);

        jawToggle.checked && jawMusicControl(detections);
        eyeBrowToggle.checked && eyeBrowControl(detections);
    }

    // We can set the response of this to an object to capture id
    // Then stop it so we dont spam the browser, but thats a different optimization. 
    window.requestAnimationFrame(faceControls);
}

/**
 * Supported hand gesture landmarker controls
 * @param detections 
 */
const handControls = async (detections) => {
    let lastVideoTime: Number = -1;
    let startTimeMs: Number = performance.now();
    if (video.currentTime != lastVideoTime) {
        lastVideoTime = video.currentTime;
        const detections = handTracker.detectForVideo(video, startTimeMs);

        // Determine if Left, Right, Both, or None are visible through handedness
        // Set indexes of each to a variable
        // Create a Dictonary of all coordinates 
        // Compare touch for interactions (x, y, z)
    }

    // We can set the response of this to an object to capture id
    // Then stop it so we dont spam the browser, but thats a different optimization. 
    window.requestAnimationFrame(handControls);
}


/**
 * Request media permissions and push the webcam to browser
 */
const setWebcamStream = async () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", faceControls);
        video.addEventListener("loadeddata", handControls);
    });
}


// Function Calls
setFaceLandmarker();
setHandLandmarker();
setAudioSource('./OhHoney.mp3', true);
setWebcamStream();
