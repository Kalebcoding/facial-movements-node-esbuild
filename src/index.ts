
/**
 * Require and async create for the FaceLandmarker and HandLandmarker
 * We want to do these first because they make take some time to create
 * In a real application I would likely apply some loading state (depending on UX / needs)
 */
const utils = require('./utils/utils');
const handControls = require('./handControl/handControls');
const faceControls = require('./faceControl/faceControls');


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


/**
 * Request media permissions and push the webcam to browser
 */
const setWebcamStream = async () => {
    const video = utils.getVideoPlayer();
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", faceControls.faceEventWrapper);
        video.addEventListener("loadeddata", handControls.handEventWrapper);
    });
}


// Function Calls

setAudioSource('./music/OhHoney.mp3', true);
setWebcamStream();
