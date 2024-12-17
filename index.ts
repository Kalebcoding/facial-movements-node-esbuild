
/**
 * Require and async create for the FaceLandmarker and HandLandmarker
 * We want to do these first because they make take some time to create
 * In a real application I would likely apply some loading state (depending on UX / needs)
 */
const createMarkers = require('./createMarkers');
let faceTracker = null;
(async () => {
    const result = await createMarkers.setFaceLandmarker();
    faceTracker = result;
})(); 

let handTracker = null;
(async () => {
    const result = await createMarkers.setHandLandmarker();
    handTracker = result;
})(); 

// Grabbing all of the document elements I will need later on here. 
const audioPlayer: HTMLAudioElement = document.getElementById('face-audio') as HTMLAudioElement;
const video: HTMLVideoElement = document.getElementById('webcam') as HTMLVideoElement;
const jawToggle: HTMLInputElement = document.getElementById('jaw-toggle') as HTMLInputElement;
const eyeBrowToggle: HTMLInputElement = document.getElementById('eye-brow-toggle') as HTMLInputElement;
const blinkToggle: HTMLInputElement = document.getElementById('blink-toggle') as HTMLInputElement;
const leftHandControlLabel = document.getElementById("left-hand-control-status") as HTMLSpanElement;
const rightHandControlLabel = document.getElementById("right-hand-control-status") as HTMLSpanElement;


// TODO: Re-eval and clean up types
// Type Creations here
// I dont think the project is configured / supports pulling in types from dependencies (CommonJS)
// Making my own time based on the payload format of the BlendShapes
type BlendShapesCategories = {
    index: number;
    score: number;
    categoryName: string;
    displayName: string;
}
let blendShapesDictionary: Record<string, number> = {};


// Type to match the structure of the handedness 
type MediaPipeHandednessType = {
    score: number;
    index: number,
    categoryName: string,
    displayName: string,
}
type NestedMediaPipeHandednessType = MediaPipeHandednessType[][];
let newHandednessJson: {} = {
    Left: null,
    Right: null
};

// Maping of hand coordinates (some)
enum HandCoordinatesEnum {
    THUMB_TIP = 4,
    INDEX_FINGER_TIP = 8,
    MIDDLE_FINGER_TIP = 12,
    RING_FINGER_TIP = 16,
}

// Supported Movements
enum SupportedMovements {
    JawOpen = 'jawOpen',
    BrowDownLeft = 'browDownLeft',
    BroDownRight = 'browDownRight'
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

const createHandednessDictonary = (jsonArray: NestedMediaPipeHandednessType): {} => {
    let newJson: {} = {};
    jsonArray.map((handArray: MediaPipeHandednessType[]) => {
        handArray.map((item: MediaPipeHandednessType) => {
            newJson[item.categoryName] = jsonArray.length === 2 ? item.index : 0;
        })
    })
    if(!newJson.hasOwnProperty("Right")){
        newJson["Right"] = null;
    }

    if(!newJson.hasOwnProperty("Left")){
        newJson["Left"] = null;
    }

    return newJson;
}
    

/**
 * Used to detect how close two numbers are and if they are within the given tolerance range
 * @param num1 First number
 * @param num2 Second Number
 * @param tolerance Amount of variation to be considered close enough
 * @returns 
 */
const coordsAreClose = (num1: number, num2: number, tolerance: number) => {
    return Math.abs((num1 * 100) - (num2 * 100)) < tolerance;
}


const xyzAreClose = (json1: {x: number, y: number, z: number}, json2: {x: number, y: number, z: number}, tolerance: number) => {
    const xClose = coordsAreClose(json1.x, json2.x, tolerance); 
    const yClose = coordsAreClose(json1.y, json2.y, tolerance); 
    // const zClose = coordsAreClose(json1.z, json2.z, tolerance); 
    return xClose && yClose;
}

/**
 * Create a dictonary to use that has all the category names as the key and the index they are as the value
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

/**
 * Create a dictonary to use that has all the category names as the key and the index they are as the value
 * @param faceBlendshapes 
 * @returns 
 */
const buildHandednessDictonary = (handedness: NestedMediaPipeHandednessType): void => {
    // TODO: Fix this logic. It is going to rebuild this dictonary EVERY time it detects hands. Thats bad. 
    // It needs more complex logic than the categories one did, or it needs a better data structure
    // This is because the array can be length of 1 but that could change from Left to Right
    // Rebuilding everytime as a workaround for now.

    newHandednessJson = createHandednessDictonary(handedness);
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
    const leftBrowIsDown = 100 - browDownLeftScore < 45;
    const browDownRightScore = detections?.faceBlendshapes[0]?.categories[blendShapesDictionary[SupportedMovements.BroDownRight]].score * 100;
    const rightBrowIsDown = 100 - browDownRightScore < 45;


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
        const detections = faceTracker.detectForVideo(video, startTimeMs);

        buildFaceBlendShapesDictonary(detections.faceBlendshapes);

        jawToggle.checked && jawMusicControl(detections);
        eyeBrowToggle.checked && eyeBrowControl(detections);
    }

    // We can set the response of this to an object to capture id
    // Then stop it so we dont spam the browser, but thats a different optimization. 
    window.requestAnimationFrame(faceControls);
}

const updateControlText = (leftHandVisible: boolean, rightHandVisible: boolean) => {
    
    if(leftHandVisible) {
        leftHandControlLabel.textContent = "Enabled";
    } else {
        leftHandControlLabel.textContent = "Disabled";
    }

    if(rightHandVisible) {
        rightHandControlLabel.textContent = "Enabled";
    } else {
        rightHandControlLabel.textContent = "Disabled";
    }
}

let prevLeftTouch = false;
let prevRightTouch = false;
const pinchControls = async (detections) => {
    const leftHandVisible = newHandednessJson["Left"] !== null;
    const rightHandVisible = newHandednessJson["Right"] !== null;

    updateControlText(leftHandVisible, rightHandVisible);
    if (leftHandVisible) {
        const leftHand = detections.landmarks[newHandednessJson["Left"]];
        const leftHandThumbTip = leftHand[HandCoordinatesEnum.THUMB_TIP]
        const leftHandIndexTip = leftHand[HandCoordinatesEnum.INDEX_FINGER_TIP];
        const leftTouch = xyzAreClose(leftHandThumbTip, leftHandIndexTip, 2);
        if(leftTouch != prevLeftTouch) {
            prevLeftTouch = leftTouch;
            if(leftTouch) {
                jawToggle.checked = !jawToggle.checked;
            }
        }
    }


    if (rightHandVisible) {
        const rightHand = detections.landmarks[newHandednessJson["Right"]];
        const rightHandThumbTip = rightHand[HandCoordinatesEnum.THUMB_TIP];
        const rightHandIndexTip = rightHand[HandCoordinatesEnum.INDEX_FINGER_TIP];
        const rightTouch = xyzAreClose(rightHandThumbTip, rightHandIndexTip, 2);
        if(rightTouch != prevRightTouch) {
            prevRightTouch = rightTouch;
            if(rightTouch) {
                eyeBrowToggle.checked = !eyeBrowToggle.checked;
            }
        }
    }
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

        // EDIT / Note: Because the index value from detections doesnt change for left if its the only one in view. Gonna just get it working with both hands in view for now.
        // Determine if Left, Right, Both, or None are visible through handedness
        // Set indexes of each to a variable
        buildHandednessDictonary(detections.handedness)
        // Create a Dictonary of all coordinates -- ENUM HandCoordinatesEnum

        // Compare touch for interactions (x, y, z)
        pinchControls(detections); 

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

setAudioSource('./OhHoney.mp3', true);
setWebcamStream();
