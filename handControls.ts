const createHandMarkers = require('./createMarkers');
let handTracker = null;
(async () => {
    const result = await createHandMarkers.setHandLandmarker();
    handTracker = result;
})(); 
const handUtils = require('./utils');

enum HandCoordinatesEnum {
    THUMB_TIP = 4,
    INDEX_FINGER_TIP = 8,
    MIDDLE_FINGER_TIP = 12,
    RING_FINGER_TIP = 16,
}



const updateControlText = (leftHandVisible: boolean, rightHandVisible: boolean) => {
    const leftHandControlLabel = handUtils.getLeftHandControlLabel()
    const rightHandControlLabel = handUtils.getRightHandControlLabel()
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
    const jawToggle = handUtils.getJawToggle();
    const eyeBrowToggle = handUtils.getEyeBrowToggle();
    
    const leftHandVisible = newHandednessJson["Left"] !== null;
    const rightHandVisible = newHandednessJson["Right"] !== null;

    updateControlText(leftHandVisible, rightHandVisible);
    if (leftHandVisible) {
        const leftHand = detections.landmarks[newHandednessJson["Left"]];
        const leftHandThumbTip = leftHand[HandCoordinatesEnum.THUMB_TIP]
        const leftHandIndexTip = leftHand[HandCoordinatesEnum.INDEX_FINGER_TIP];
        const leftTouch = handUtils.xyAreClose(leftHandThumbTip, leftHandIndexTip, 2);
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
        const rightTouch = handUtils.xyAreClose(rightHandThumbTip, rightHandIndexTip, 2);
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
const handEventWrapper = async () => {
    let newHandednessJson: {} = {
        Left: null,
        Right: null
    };
    let video = handUtils.getVideoPlayer();

    let lastVideoTime: Number = -1;
    let startTimeMs: Number = performance.now();
    
    if (video.currentTime != lastVideoTime) {
        lastVideoTime = video.currentTime;
        const detections = handTracker.detectForVideo(video, startTimeMs);

        // EDIT / Note: Because the index value from detections doesnt change for left if its the only one in view. Gonna just get it working with both hands in view for now.
        // Determine if Left, Right, Both, or None are visible through handedness
        // Set indexes of each to a variable
        newHandednessJson = handUtils.buildHandednessDictonary(detections.handedness)
        // Create a Dictonary of all coordinates -- ENUM HandCoordinatesEnum

        // Compare touch for interactions (x, y, z)
        pinchControls(detections, newHandednessJson); 

    }

    // We can set the response of this to an object to capture id
    // Then stop it so we dont spam the browser, but thats a different optimization. 
    window.requestAnimationFrame(handEventWrapper);
}

module.exports = {
    handEventWrapper
}