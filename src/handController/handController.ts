enum SupportedHandLandmarkers {
    THUMB_TIP = 4,
    INDEX_FINGER_TIP = 8,
}

class HandController {

    private handLandmarker;
    private utils; 
    private drawingUtil;
    private prevLeftTouch = false;
    private prevRightTouch = false;
    private prevLeftPointPinch = false;
    private prevRightPointPinch = false;
    private leftHandString = "Left";
    private rightHandString = "Right";

    constructor(handLandmarker, utils, drawingUtil) {
        this.handLandmarker = handLandmarker;
        this.utils = utils;
        this.drawingUtil = drawingUtil;
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

    private pointControls = async (detections, newHandednessJson) => {

        // TODO: Refactor this. Messy.
        // We check if the camera is mirrored, if so the dots will be reveresed.
        // Like could solve this in a more mature way. 
        let rightDotCords;
        let leftDotCords;
        const cameraMirroed = true;
        if(cameraMirroed){
            rightDotCords = { x: this.drawingUtil.topLeftDotX, y: this.drawingUtil.topLeftDotY, z: 0 }
            leftDotCords = { x: this.drawingUtil.topRightDotX, y: this.drawingUtil.topRightDotY, z: 0 }
        } else {
            leftDotCords = { x: this.drawingUtil.topLeftDotX, y: this.drawingUtil.topLeftDotY, z: 0 }
            rightDotCords = { x: this.drawingUtil.topRightDotX, y: this.drawingUtil.topRightDotY, z: 0 }
        }
        const jawToggle = this.utils.getJawToggle();
        const eyeBrowToggle = this.utils.getEyeBrowToggle();
        
        const leftHandVisible = newHandednessJson[this.leftHandString] !== null;
        const rightHandVisible = newHandednessJson[this.rightHandString] !== null;

        // TODO: Come up with a better way to do this. This is just a quick solution to make learning progress.
        // From the documentation I had assumed the index value ive stored in the newHandedJson would match, but it doesnt if right hand is missing. 
        // const leftHandLandmarksLocation = rightHandVisible ? newHandednessJson[this.leftHandString] : 0; 
    
        this.updateControlText(leftHandVisible, rightHandVisible);
        if (leftHandVisible) {
            const leftHand = detections.landmarks[newHandednessJson[this.leftHandString]];
            const leftHandIndexTip = leftHand[SupportedHandLandmarkers.INDEX_FINGER_TIP];
            const leftTouch = this.utils.canvasAndLandMarkClose(leftDotCords, leftHandIndexTip, this.drawingUtil.maxX, this.drawingUtil.maxY, 5);
            if((leftTouch != this.prevLeftTouch) && !this.prevLeftPointPinch) {
                this.prevLeftTouch = leftTouch;
                if(leftTouch) {
                    jawToggle.checked = !jawToggle.checked;
                }
            }
        }
    
        if (rightHandVisible) {
            const rightHand = detections.landmarks[newHandednessJson[this.rightHandString]];
            const rightHandIndexTip = rightHand[SupportedHandLandmarkers.INDEX_FINGER_TIP];
            const rightTouch = this.utils.canvasAndLandMarkClose(rightDotCords, rightHandIndexTip, this.drawingUtil.maxX, this.drawingUtil.maxY, 5);
            if((rightTouch != this.prevRightTouch) && !this.prevRightPointPinch) {
                this.prevRightTouch = rightTouch;
                if(rightTouch) {
                    eyeBrowToggle.checked = !eyeBrowToggle.checked;
                }
            }
        }
    }

    private pinchControls = async (detections, newHandednessJson) => {
        let rightDotCords;
        let leftDotCords;
        const cameraMirroed = true;
        if(cameraMirroed){
            rightDotCords = { x: this.drawingUtil.topLeftDotX, y: this.drawingUtil.topLeftDotY, z: 0 }
            leftDotCords = { x: this.drawingUtil.topRightDotX, y: this.drawingUtil.topRightDotY, z: 0 }
        } else {
            leftDotCords = { x: this.drawingUtil.topLeftDotX, y: this.drawingUtil.topLeftDotY, z: 0 }
            rightDotCords = { x: this.drawingUtil.topRightDotX, y: this.drawingUtil.topRightDotY, z: 0 }
        }

        const jawToggle = this.utils.getJawToggle();
        const eyeBrowToggle = this.utils.getEyeBrowToggle();
        
        const leftHandVisible = newHandednessJson[this.leftHandString] !== null;
        const rightHandVisible = newHandednessJson[this.rightHandString] !== null;
    
        this.updateControlText(leftHandVisible, rightHandVisible);
        if (leftHandVisible){
            const leftHand = detections.landmarks[newHandednessJson[this.leftHandString]];
            const leftHandThumbTip = leftHand[SupportedHandLandmarkers.THUMB_TIP]
            const leftHandIndexTip = leftHand[SupportedHandLandmarkers.INDEX_FINGER_TIP];
            const leftPointIsPinched = this.utils.landMarkerIntersectionAndCanvasPoint(leftHandThumbTip, leftHandIndexTip, leftDotCords, this.drawingUtil.maxX, this.drawingUtil.maxY, 2, 10)
            if (leftPointIsPinched != this.prevLeftPointPinch) {
                this.prevLeftPointPinch = leftPointIsPinched;
                const leftHandPinchLabel = this.utils.getLeftHandPinchLabel();
                if(leftPointIsPinched) {
                    leftHandPinchLabel.textContent = 'OUCH!';
                } else {
                    leftHandPinchLabel.textContent = 'Waiting...';
                }
            }
        }

        if (rightHandVisible){
            const rightHand = detections.landmarks[newHandednessJson[this.rightHandString]];
            const rightHandThumbTip = rightHand[SupportedHandLandmarkers.THUMB_TIP];
            const rightHandIndexTip = rightHand[SupportedHandLandmarkers.INDEX_FINGER_TIP];
            const rightPointIsPinched = this.utils.landMarkerIntersectionAndCanvasPoint(rightHandThumbTip, rightHandIndexTip, rightDotCords, this.drawingUtil.maxX, this.drawingUtil.maxY, 2, 10)
            console.log(`rightPointIsPinched`, rightPointIsPinched);
            if (rightPointIsPinched != this.prevRightPointPinch) {
                this.prevRightPointPinch = rightPointIsPinched;
                const rightHandPinchLabel = this.utils.getRightHandPinchLabel();
                if(rightPointIsPinched) {
                    rightHandPinchLabel.textContent = 'OUCH!';
                } else {
                    rightHandPinchLabel.textContent = 'Waiting...';
                }
            }
        }
    }

    public handEventManager = async () => {
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
            this.pointControls(detections, newHandednessJson);
            this.pinchControls(detections, newHandednessJson); 
    
        }
    
        // We can set the response of this to an object to capture id
        // Then stop it so we dont spam the browser, but thats a different optimization. 
        window.requestAnimationFrame(this.handEventManager);
    }
}

module.exports = HandController;