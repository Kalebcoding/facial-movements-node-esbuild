
/**
 * Require and async create for the FaceLandmarker and HandLandmarker
 * We want to do these first because they make take some time to create
 * In a real application I would likely apply some loading state (depending on UX / needs)
 */

(async () => {
    const taskVision = require('@mediapipe/tasks-vision')
    const mainUtils = require('./utils/utils');
    const { HandLandmarker, FaceLandmarker, FilesetResolver, DrawingUtils } = taskVision;
    const taskVisionCreatorClass = require('./taskVisionCreator/taskVisionCreator');

    const taskFaceOptions = {
        baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
            delegate: "GPU"
        },
        outputFaceBlendshapes: true,
        runningMode: "VIDEO",
        numFaces: 1,
    };

    const taskHandOptions = {
        baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
            delegate: "GPU"
        },
        runningMode: "VIDEO",
        numHands: 2
    }

    const FaceVisionCreatorInstance = await taskVisionCreatorClass.create(FilesetResolver, FaceLandmarker, taskFaceOptions);
    const HandVisionCreatorInstance = await taskVisionCreatorClass.create(FilesetResolver, HandLandmarker, taskHandOptions);
    const handControlClassC = require('./handControl/handControlClass');
    const HandControlClassCInstance = new handControlClassC(HandVisionCreatorInstance.getTaskLandmarker(), mainUtils);
    const faceControlClassC = require('./faceControl/faceControllClass');
    const FaceControlClassCInstance = new faceControlClassC(FaceVisionCreatorInstance.getTaskLandmarker(), mainUtils);


    /**
     * Gets audio source with some parameters.
     * 
     * @param path - Path to audio file
     * @param showControls - If we want to show or hide the audio controls
     */
    const setAudioSource = (path: string, showControls: boolean): void => {
        let audioPlayer = mainUtils.getAudioPlayer();
        if (audioPlayer instanceof HTMLAudioElement) {
            audioPlayer.src = path;
            showControls ? audioPlayer.setAttribute('controls', '') : audioPlayer.removeAttribute("controls");
        }
    }


    /**
     * Request media permissions and push the webcam to browser
     */
    const setWebcamStream = async () => {
        const video = mainUtils.getVideoPlayer();
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            video.srcObject = stream;
            video.addEventListener("loadeddata", FaceControlClassCInstance.faceEventWrapper);
            video.addEventListener("loadeddata", HandControlClassCInstance.handEventWrapper);
        });
    }

    setAudioSource('./music/OhHoney.mp3', true);
    setWebcamStream();

})();
