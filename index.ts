const taskVision = require('@mediapipe/tasks-vision')
const { FaceLandmarker, FilesetResolver, DrawingUtils } = taskVision;


// Setting up main variables i will use later
const audioPlayer: HTMLAudioElement = document.getElementById('face-audio') as HTMLAudioElement;
const video: HTMLVideoElement = document.getElementById('webcam') as HTMLVideoElement;
const jawToggle: HTMLInputElement = document.getElementById('jaw-toggle') as HTMLInputElement;
// const eyeBrowToggle: HTMLInputElement = document.getElementById('eye-brow-toggle') as HTMLInputElement;
// const blinkToggle: HTMLInputElement = document.getElementById('blink-toggle') as HTMLInputElement;

// Would of used webcamTracker: FaceLandmarker here but its not liking it. Like just becaue I dont have proper bundler / configs setup. 
let webcamTracker = null;

// Will use the below to map out the categories so I dont have to use magic strings
interface BlendShapesCategories {
    index: number;
    score: number;
    categoryName: string;
    displayName: string;
}
let blendShapesDictonary: Record<number, string> = {};

// Supported Movements
enum SupportedMovements {
    JawOpen = 'jawOpen',
    EyeBlinkleft = 'eyeBlinkLeft',
    EyeBlinkRight = 'eyeBlinkRight',
    BrowDownLeft = 'browDownLeft',
    BroDownRight = 'browDownRight'
}

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
const createBlendShapesDictonary = (jsonArray: BlendShapesCategories[]): void => {

    for (const item of jsonArray) {
        blendShapesDictonary[item.categoryName] = item.index;
    }
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

    if (Object.keys(blendShapesDictonary).length === 0) {
        createBlendShapesDictonary(faceBlendshapes[0].categories);
    }
};


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
        // eyeBrowToggle.checked && eyeBrowMusicControl(detections);
        // blinkToggle.checked && blinkMusicControl(detections);
    }

    // We can set the response of this to an object to capture id
    // Then stop it so we dont spam the browser, but thats a different optimization. 
    window.requestAnimationFrame(faceControls);
}

const jawMusicControl = async (detections) => {
    const jawOpenVal = detections?.faceBlendshapes[0]?.categories[blendShapesDictonary[SupportedMovements.JawOpen]].score * 100;
    if (jawOpenVal > 50 && audioPlayer.paused) {
        audioPlayer.play();
    }

    if (jawOpenVal < 50 && !audioPlayer.paused) {
        audioPlayer.pause();
    }
}


/**
 * Request media permissions and push the webcam to browser
 */
const setWebcamStream = async () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", faceControls);
    });
}


setFaceLandmarker();
setAudioSource('./OhHoney.mp3', true);
setWebcamStream();
