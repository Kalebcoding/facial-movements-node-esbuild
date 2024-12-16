const taskVision = require('@mediapipe/tasks-vision')


const audioPlayer: HTMLAudioElement = document.getElementById('face-audio') as HTMLAudioElement;
/**
 * Gets audio source with some parameters.
 * 
 * @param path - Path to audio file
 * @param showControls - If we want to show or hide the audio controls
 */
const setAudioSource = (path: string, showControls: boolean): void => {
    if (audioPlayer instanceof HTMLAudioElement){
        audioPlayer.src = path;
        showControls ? audioPlayer.setAttribute('controls', '') : audioPlayer.removeAttribute("controls");
    }
}


const { FaceLandmarker, FilesetResolver, DrawingUtils } = taskVision;
let camTracker = null;
const setFaceLandmarker = async () => {
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

const video: HTMLVideoElement = document.getElementById('webcam') as HTMLVideoElement;

const setWebcamStream = async() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", trackFace);
    });
}

const trackFace = async() => {
    let lastVideoTime: = -1;
        let startTimeMs = performance.now();
        if (video.currentTime != lastVideoTime) {
            lastVideoTime = video.currentTime;
            const detections = camTracker.detectForVideo(video, startTimeMs);
            const jawOpenVal = detections?.faceBlendshapes[0]?.categories[25].score * 100;
            if(jawOpenVal > 50 && audioPlayer.paused){
                audioPlayer.play();
            }

            if(jawOpenVal < 50 && !audioPlayer.paused){
                audioPlayer.pause();
            }
        }

        window.requestAnimationFrame(trackFace);
}

setAudioSource('./OhHoney.mp3', true);
setFaceLandmarker();
setWebcamStream();