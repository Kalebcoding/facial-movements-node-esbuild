
/**
 * Require and async create for the FaceLandmarker and HandLandmarker
 * We want to do these first because they make take some time to create
 * In a real application I would likely apply some loading state (depending on UX / needs)
 */
const createMarkers = require('./createMarkers');
const utils = require('./utils');

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


// Type to match the structure of the handedness 
type MediaPipeHandednessType = {
    score: number;
    index: number,
    categoryName: string,
    displayName: string,
}
type NestedMediaPipeHandednessType = MediaPipeHandednessType[][];

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

// Grabbing all of the document elements I will need later on here. 
const audioPlayer: HTMLAudioElement = document.getElementById('face-audio') as HTMLAudioElement;
const video: HTMLVideoElement = document.getElementById('webcam') as HTMLVideoElement;
const jawToggle: HTMLInputElement = document.getElementById('jaw-toggle') as HTMLInputElement;
const eyeBrowToggle: HTMLInputElement = document.getElementById('eye-brow-toggle') as HTMLInputElement;
const blinkToggle: HTMLInputElement = document.getElementById('blink-toggle') as HTMLInputElement;
const leftHandControlLabel = document.getElementById("left-hand-control-status") as HTMLSpanElement;
const rightHandControlLabel = document.getElementById("right-hand-control-status") as HTMLSpanElement;

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


let prevMouthOpen = false;
let prevMouthClosed = false;
/**
 * Jaw music start / stop control
 * Jaw open should play music
 * Jaw close should stop music
 * @param detections 
 */
const jawMusicControl = async (detections, blendShapesDictionary) => {
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
const eyeBrowControl = async (detections, blendShapesDictionary) => {
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
    let blendShapesDictionary: Record<string, number> = {};
    let lastVideoTime: Number = -1;
    let startTimeMs: Number = performance.now();
    if (video.currentTime != lastVideoTime) {
        lastVideoTime = video.currentTime;
        const detections = faceTracker.detectForVideo(video, startTimeMs);

        // TODO: Can improve this function
        blendShapesDictionary = utils.buildFaceBlendShapesDictonary(detections.faceBlendshapes, blendShapesDictionary);

        jawToggle.checked && jawMusicControl(detections, blendShapesDictionary);
        eyeBrowToggle.checked && eyeBrowControl(detections, blendShapesDictionary);
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
const pinchControls = async (detections, newHandednessJson) => {
    const leftHandVisible = newHandednessJson["Left"] !== null;
    const rightHandVisible = newHandednessJson["Right"] !== null;

    updateControlText(leftHandVisible, rightHandVisible);
    if (leftHandVisible) {
        const leftHand = detections.landmarks[newHandednessJson["Left"]];
        const leftHandThumbTip = leftHand[HandCoordinatesEnum.THUMB_TIP]
        const leftHandIndexTip = leftHand[HandCoordinatesEnum.INDEX_FINGER_TIP];
        const leftTouch = utils.xyAreClose(leftHandThumbTip, leftHandIndexTip, 2);
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
        const rightTouch = utils.xyAreClose(rightHandThumbTip, rightHandIndexTip, 2);
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
    let newHandednessJson: {} = {
        Left: null,
        Right: null
    };

    let lastVideoTime: Number = -1;
    let startTimeMs: Number = performance.now();
    
    if (video.currentTime != lastVideoTime) {
        lastVideoTime = video.currentTime;
        const detections = handTracker.detectForVideo(video, startTimeMs);

        // EDIT / Note: Because the index value from detections doesnt change for left if its the only one in view. Gonna just get it working with both hands in view for now.
        // Determine if Left, Right, Both, or None are visible through handedness
        // Set indexes of each to a variable
        newHandednessJson = utils.buildHandednessDictonary(detections.handedness)
        // Create a Dictonary of all coordinates -- ENUM HandCoordinatesEnum

        // Compare touch for interactions (x, y, z)
        pinchControls(detections, newHandednessJson); 

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
