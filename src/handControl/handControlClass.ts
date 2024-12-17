enum HandCoordinatesEnum {
    THUMB_TIP = 4,
    INDEX_FINGER_TIP = 8,
    MIDDLE_FINGER_TIP = 12,
    RING_FINGER_TIP = 16,
}

class HandControlClass {

    private handLandmarker;
    private utils; 
    private prevLeftTouch = false;
    private prevRightTouch = false;

    constructor(handLandmarker, utils) {
        this.handLandmarker = handLandmarker;
        this.utils = utils;
    }

    private updateControlText = (leftHandVisible: boolean, rightHandVisible: boolean) => {
        const leftHandControlLabel = this.utils.getLeftHandControlLabel()
        const rightHandControlLabel = this.utils.getRightHandControlLabel()
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

    private pinchControls = async (detections, newHandednessJson) => {
        const jawToggle = this.utils.getJawToggle();
        const eyeBrowToggle = this.utils.getEyeBrowToggle();
        
        const leftHandVisible = newHandednessJson["Left"] !== null;
        const rightHandVisible = newHandednessJson["Right"] !== null;
    
        this.updateControlText(leftHandVisible, rightHandVisible);
        if (leftHandVisible) {
            const leftHand = detections.landmarks[newHandednessJson["Left"]];
            const leftHandThumbTip = leftHand[HandCoordinatesEnum.THUMB_TIP]
            const leftHandIndexTip = leftHand[HandCoordinatesEnum.INDEX_FINGER_TIP];
            const leftTouch = this.utils.xyAreClose(leftHandThumbTip, leftHandIndexTip, 2);
            if(leftTouch != this.prevLeftTouch) {
                this.prevLeftTouch = leftTouch;
                if(leftTouch) {
                    jawToggle.checked = !jawToggle.checked;
                }
            }
        }
    
    
        if (rightHandVisible) {
            const rightHand = detections.landmarks[newHandednessJson["Right"]];
            const rightHandThumbTip = rightHand[HandCoordinatesEnum.THUMB_TIP];
            const rightHandIndexTip = rightHand[HandCoordinatesEnum.INDEX_FINGER_TIP];
            const rightTouch = this.utils.xyAreClose(rightHandThumbTip, rightHandIndexTip, 2);
            if(rightTouch != this.prevRightTouch) {
                this.prevRightTouch = rightTouch;
                if(rightTouch) {
                    eyeBrowToggle.checked = !eyeBrowToggle.checked;
                }
            }
        }
    }

    public handEventWrapper = async () => {
        let newHandednessJson: {} = {
            Left: null,
            Right: null
        };
        let video = this.utils.getVideoPlayer();
    
        let lastVideoTime: Number = -1;
        let startTimeMs: Number = performance.now();
        
        if (video.currentTime != lastVideoTime) {
            lastVideoTime = video.currentTime;
            const detections = this.handLandmarker.detectForVideo(video, startTimeMs);
    
            // EDIT / Note: Because the index value from detections doesnt change for left if its the only one in view. Gonna just get it working with both hands in view for now.
            // Determine if Left, Right, Both, or None are visible through handedness
            // Set indexes of each to a variable
            newHandednessJson = this.utils.buildHandednessDictonary(detections.handedness)
            // Create a Dictonary of all coordinates -- ENUM HandCoordinatesEnum
    
            // Compare touch for interactions (x, y, z)
            this.pinchControls(detections, newHandednessJson); 
    
        }
    
        // We can set the response of this to an object to capture id
        // Then stop it so we dont spam the browser, but thats a different optimization. 
        window.requestAnimationFrame(this.handEventWrapper);
    }
}

module.exports = HandControlClass;