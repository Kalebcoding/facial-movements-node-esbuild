
// All Requires needed for application
const taskVision = require('@mediapipe/tasks-vision');
const TaskVisionCreatorClass = require('./taskVisionCreator/taskVisionCreator');
const FaceControllerClass = require('./faceController/faceController');
const HandControllerClass = require('./handController/handController');
const CustomDrawingUtilityClass  = require ('./utils/customDrawingUtility');
const utils = require('./utils/utils');

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
};


(async () => {
    const { HandLandmarker, FaceLandmarker, FilesetResolver } = taskVision;
    const drawingUtil = new CustomDrawingUtilityClass(utils);

    
    const FaceVisionCreatorInstance = await TaskVisionCreatorClass.create(FilesetResolver, FaceLandmarker, taskFaceOptions);
    const FaceController = new FaceControllerClass(FaceVisionCreatorInstance.getTaskLandmarker(), utils);

    const HandVisionCreatorInstance = await TaskVisionCreatorClass.create(FilesetResolver, HandLandmarker, taskHandOptions);
    const HandController = new HandControllerClass(HandVisionCreatorInstance.getTaskLandmarker(), utils, drawingUtil);

    utils.setAudioSource('./music/OhHoney.mp3', true);
    utils.setWebcamStream(FaceController.faceEventManager, HandController.handEventManager);
})();
