
// All Requires needed for application
const taskVision = require('@mediapipe/tasks-vision');
const taskVisionCreatorClass = require('./taskVisionCreator/taskVisionCreator');
const faceControllerClass = require('./faceController/faceController');
const handControllerClass = require('./handController/handController');
const utils = require('./utils/utils');

(async () => {
    const { HandLandmarker, FaceLandmarker, FilesetResolver, DrawingUtils } = taskVision;

    const taskFaceOptions = {
        baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
            delegate: "GPU"
        },
        outputFaceBlendshapes: true,
        runningMode: "VIDEO",
        numFaces: 1,
    };

    const FaceVisionCreatorInstance = await taskVisionCreatorClass.create(FilesetResolver, FaceLandmarker, taskFaceOptions);
    const FaceController = new faceControllerClass(FaceVisionCreatorInstance.getTaskLandmarker(), utils);

    const taskHandOptions = {
        baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
            delegate: "GPU"
        },
        runningMode: "VIDEO",
        numHands: 2
    }

    const HandVisionCreatorInstance = await taskVisionCreatorClass.create(FilesetResolver, HandLandmarker, taskHandOptions);
    const HandController = new handControllerClass(HandVisionCreatorInstance.getTaskLandmarker(), utils);


    utils.setAudioSource('./music/OhHoney.mp3', true);
    utils.setWebcamStream(FaceController.faceEventManager, HandController.handEventManager);
})();
