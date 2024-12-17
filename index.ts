
/**
 * Require and async create for the FaceLandmarker and HandLandmarker
 * We want to do these first because they make take some time to create
 * In a real application I would likely apply some loading state (depending on UX / needs)
 */
const createMarkers = require('./createMarkers');
const utils = require('./utils');
const handControls = require('./handControls');

let faceTracker = null;
(async () => {
    const result = await createMarkers.setFaceLandmarker();
    faceTracker = result;
})(); 


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
    let audioPlayer = utils.getAudioPlayer();
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
const jawMusicControl = async (detections, blendShapesDictionary, audioPlayer) => {
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
const eyeBrowControl = async (detections, blendShapesDictionary, audioPlayer) => {
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
    const video = utils.getVideoPlayer();
    const audioPlayer = utils.getAudioPlayer();
    const jawToggle = utils.getJawToggle();
    const eyeBrowToggle = utils.getEyeBrowToggle();

    let blendShapesDictionary: Record<string, number> = {};
    let lastVideoTime: Number = -1;
    let startTimeMs: Number = performance.now();
    if (video.currentTime != lastVideoTime) {
        lastVideoTime = video.currentTime;
        const detections = faceTracker.detectForVideo(video, startTimeMs);

        // TODO: Can improve this function
        blendShapesDictionary = utils.buildFaceBlendShapesDictonary(detections.faceBlendshapes, blendShapesDictionary);

        jawToggle.checked && jawMusicControl(detections, blendShapesDictionary, audioPlayer);
        eyeBrowToggle.checked && eyeBrowControl(detections, blendShapesDictionary, audioPlayer);
    }

    // We can set the response of this to an object to capture id
    // Then stop it so we dont spam the browser, but thats a different optimization. 
    window.requestAnimationFrame(faceControls);
}

/**
 * Request media permissions and push the webcam to browser
 */
const setWebcamStream = async () => {
    const video = utils.getVideoPlayer();
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", faceControls);
        video.addEventListener("loadeddata", handControls.handEventWrapper);
    });
}


// Function Calls

setAudioSource('./OhHoney.mp3', true);
setWebcamStream();
