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

const xyAreClose = (json1: {x: number, y: number, z: number}, json2: {x: number, y: number, z: number}, tolerance: number) => {
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

module.exports = {
    createBlendShapesDictionary,
    createHandednessJSONObject,
    xyAreClose,
    buildFaceBlendShapesDictonary,
    buildHandednessDictonary
}