const taskVision = require('@mediapipe/tasks-vision')
const { FaceLandmarker, FilesetResolver, DrawingUtils } = taskVision;

// Setting up main variables i will use later
const audioPlayer: HTMLAudioElement = document.getElementById('face-audio') as HTMLAudioElement;
let camTracker = null;
const video: HTMLVideoElement = document.getElementById('webcam') as HTMLVideoElement;

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
 * Create the Facelandmarker object for us
 */
const setFaceLandmarker = async (): Promise<void> => {
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    camTracker = await FaceLandmarker.createFromOptions(vision, {
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
 * Request media permissions and push the webcam to browser
 */
const setWebcamStream = async () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", trackJaw);
        video.addEventListener("loadeddata", viewLandmarks);
    });
}

/**
 * Logic for playing and stopping the music 
 * API only exposts jaw open, so we have to use that to track closing / open. 
 */
const trackJaw = async () => {
    let lastVideoTime: Number = -1;
    let startTimeMs: Number = performance.now();
    if (video.currentTime != lastVideoTime) {
        lastVideoTime = video.currentTime;
        const detections = camTracker.detectForVideo(video, startTimeMs);
        const jawOpenVal = detections?.faceBlendshapes[0]?.categories[25].score * 100;
        if (jawOpenVal > 50 && audioPlayer.paused) {
            audioPlayer.play();
        }

        if (jawOpenVal < 50 && !audioPlayer.paused) {
            audioPlayer.pause();
        }
        console.log(`trackjaw Running`);
    }

    // We can set the response of this to an object to capture id
    // Then stop it so we dont spam the browser, but thats a different optimization. 
    window.requestAnimationFrame(trackJaw);
}


/** 
 * Some test code to see landmarks
 */
const viewLandmarks = async () => {
    let lastVideoTime: Number = -1;
    let startTimeMs: Number = performance.now();
    if (video.currentTime != lastVideoTime) {
        lastVideoTime = video.currentTime;
        const detections = camTracker.detectForVideo(video, startTimeMs);
        console.log(`viewLandmarks running`);
    }

    // We can set the response of this to an object to capture id
    // Then stop it so we dont spam the browser, but thats a different optimization. 
    window.requestAnimationFrame(viewLandmarks);
}
setAudioSource('./OhHoney.mp3', true);
setFaceLandmarker();
setWebcamStream();