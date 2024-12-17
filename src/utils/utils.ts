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

type JSONCoordinates = {
    x: number,
    y: number,
    z: number
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

const createHandednessJSONObject = (jsonArray: NestedMediaPipeHandednessType): {} => {
    let newJson: {} = {};

    // As you can probably tell by MediaPipeHandednessType
    // These items are supposed to have their own index.
    // I think there might be a bug in the npm package or I just have a misunderstanding of how it works. 
    // It could also purely be based with how I am importing things into this project as well.
    // Through a TON of thorough testing, i have found that the index for Left is always 1 and index for Right is always 0
    // However, its landmarks are not always at those positions in the landmarks array. 
    // The landmarks array is structed with the 0th element being the first hand detected and the 1st element being the second,
    // Which also matches the order the yare in in the handedness array. 
    // In their documentation they show the "Left" handedness value getting an index value of 0
    // But I was never able to make that happen. 
    // IF This was a bug, and it was feature critical this is what I Have done in the past:
    // - Make sure to file a bug report on the package's repo, with a reproducable project to assit the owners / prove it.
    // - Lock the package version in my package.json (Do this becaues of next step)
    // - Build a "patch-package" script. something will resolve the bug post npm install for builds / etc. 
    // - Make a note / sev somewhere in our system to keep tabs on updates
    // - Monitor and update code base when resolved. 
    jsonArray.map((handArray: MediaPipeHandednessType[], index) => {
        handArray.map((item: MediaPipeHandednessType) => {
            newJson[item.categoryName] = index;
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
const coordsAreClose = (num1: number, num2: number, tolerance: number, num1Multipler: number = 1, number2Multiplier: number = 1) => {
    return Math.abs((num1 * num1Multipler) - (num2 * number2Multiplier)) < tolerance;
}

const averageJsonValues = (json1: JSONCoordinates, json2: JSONCoordinates): JSONCoordinates => {
    const averagedJson: JSONCoordinates = {
        x: -1,
        y: -1,
        z: -1,
    };
    for (const key in json1) {
        if(key in json2) {
            averagedJson[key] = (json1[key] + json2[key]) / 2;
        }
    }
    return averagedJson;
}

// Used to determine IF landmarker values are touching
const landmarkersAreClose = (landmarkerJson1: JSONCoordinates, landmarkerJson2: JSONCoordinates, tolerance: number) => {
    const landmarkerMultipler = 100;
    const xClose = coordsAreClose(landmarkerJson1.x, landmarkerJson2.x, tolerance, landmarkerMultipler, landmarkerMultipler); 
    const yClose = coordsAreClose(landmarkerJson1.y, landmarkerJson2.y, tolerance, landmarkerMultipler, landmarkerMultipler); 
    // const zClose = coordsAreClose(json1.z, json2.z, tolerance); 
    return xClose && yClose;
}

const canvasAndLandMarkClose = (canvasJson: JSONCoordinates, landmarkerJson: JSONCoordinates, canvasMaxX: number, canvasMaxY: number, tolerance: number) => {
    const canvasXMultipler = 1;
    const landmarkerXMultipler = canvasMaxX;
    const canvasYMultipler = 1;
    const landmarkerYMultipler = canvasMaxY;
    const xClose = coordsAreClose(canvasJson.x, landmarkerJson.x, tolerance, canvasXMultipler, landmarkerXMultipler); 
    const yClose = coordsAreClose(canvasJson.y, landmarkerJson.y, tolerance, canvasYMultipler, landmarkerYMultipler); 
    // const zClose = coordsAreClose(json1.z, json2.z, tolerance); 
    return xClose && yClose;
}

const landMarkerIntersectionAndCanvasPoint = (landmarkerJson1: JSONCoordinates, landmarkerJson2: JSONCoordinates, canvasJson: JSONCoordinates, canvasMaxX: number, canvasMaxY: number, landMarkertolerance: number, canvasTolerance: number) => {
    const landmarkersClose = landmarkersAreClose(landmarkerJson1, landmarkerJson2, landMarkertolerance);
    if(landmarkersClose){
        const averageLandmarkerJson = averageJsonValues(landmarkerJson1, landmarkerJson2);
        return canvasAndLandMarkClose(canvasJson, averageLandmarkerJson, canvasMaxX, canvasMaxY, canvasTolerance);
    }
}

/**
 * Create a dictonary to use that has all the category names as the key and the index they are as the value
 * @param faceBlendshapes 
 * @returns 
 */
const buildFaceBlendShapesDictonary = (faceBlendshapes, blendShapesDictionary): Record<string, number> => {
    if (!faceBlendshapes.length) {
        return;
    }

    if (Object.keys(blendShapesDictionary).length === 0) {
        return blendShapesDictionary = createBlendShapesDictionary(faceBlendshapes[0].categories);
    }

    return blendShapesDictionary;
};

/**
 * Create a dictonary to use that has all the category names as the key and the index they are as the value
 * @param faceBlendshapes 
 * @returns 
 */
const buildHandednessDictonary = (handedness: NestedMediaPipeHandednessType): {} => {
    // TODO: Fix this logic. It is going to rebuild this dictonary EVERY time it detects hands. Thats bad. 
    // It needs more complex logic than the categories one did, or it needs a better data structure
    // This is because the array can be length of 1 but that could change from Left to Right
    // Rebuilding everytime as a workaround for now.

    let newHandednessJson = createHandednessJSONObject(handedness);
    return newHandednessJson;
};

const getAudioPlayer = (): HTMLAudioElement => {
    const audioPlayer: HTMLAudioElement = document.getElementById('face-audio') as HTMLAudioElement;
    return audioPlayer
}

const getVideoPlayer = (): HTMLVideoElement => {
    const video: HTMLVideoElement = document.getElementById('webcam') as HTMLVideoElement;
    return video;
}

const getLeftHandControlLabel = (): HTMLSpanElement => {
    const leftHandControlLabel = document.getElementById("left-hand-control-status") as HTMLSpanElement;
    return leftHandControlLabel;
}

const getRightHandControlLabel = (): HTMLSpanElement => {
    const rightHandControlLabel = document.getElementById("right-hand-control-status") as HTMLSpanElement;
    return rightHandControlLabel;
}

const getLeftHandPinchLabel = (): HTMLSpanElement => {
    const leftHandPinchLabel = document.getElementById("left-hand-pinch-status") as HTMLSpanElement;
    return leftHandPinchLabel;
}

const getRightHandPinchLabel = (): HTMLSpanElement => {
    const rightHandPinchLabel = document.getElementById("right-hand-pinch-status") as HTMLSpanElement;
    return rightHandPinchLabel;
}

const getJawToggle = (): HTMLInputElement => {
    const jawToggle: HTMLInputElement = document.getElementById('jaw-toggle') as HTMLInputElement;
    return jawToggle;
}

const getEyeBrowToggle = (): HTMLInputElement => {
    const eyeBrowToggle: HTMLInputElement = document.getElementById('eye-brow-toggle') as HTMLInputElement;
    return eyeBrowToggle;
}

const getVideoCanvas = (): HTMLCanvasElement => {
    const canvasElement: HTMLCanvasElement = document.getElementById('output_canvas') as HTMLCanvasElement;
    return canvasElement;
}

const getDrawOnCanvasButton = (): HTMLButtonElement => {
    const button: HTMLButtonElement = document.getElementById('draw-canvas') as HTMLButtonElement;
    return button;
}

const getInitCanvasButton = (): HTMLButtonElement => {
    const button: HTMLButtonElement = document.getElementById('init-canvas') as HTMLButtonElement;
    return button;
}

const getClearCanvasButton = (): HTMLButtonElement => {
    const button: HTMLButtonElement = document.getElementById('clear-canvas') as HTMLButtonElement;
    return button;
}

const setAudioSource = (path: string, showControls: boolean): void => {
    let audioPlayer = getAudioPlayer();
    if (audioPlayer instanceof HTMLAudioElement) {
        audioPlayer.src = path;
        showControls ? audioPlayer.setAttribute('controls', '') : audioPlayer.removeAttribute("controls");
    }
}

const setWebcamStream = async (faceEventManager, handEventManager) => {
    const video = getVideoPlayer();
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", faceEventManager);
        video.addEventListener("loadeddata", handEventManager);
    });
}

module.exports = {
    createBlendShapesDictionary,
    createHandednessJSONObject,
    landmarkersAreClose,
    canvasAndLandMarkClose,
    landMarkerIntersectionAndCanvasPoint,
    buildFaceBlendShapesDictonary,
    buildHandednessDictonary,
    getAudioPlayer,
    getVideoPlayer,
    getLeftHandControlLabel,
    getRightHandControlLabel,
    getLeftHandPinchLabel,
    getRightHandPinchLabel,
    getJawToggle,
    getEyeBrowToggle,
    getDrawOnCanvasButton,
    getClearCanvasButton,
    getInitCanvasButton,
    getVideoCanvas,
    setAudioSource,
    setWebcamStream
}