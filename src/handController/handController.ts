enum SupportedHandLandmarkers {
    THUMB_TIP = 4,
    INDEX_FINGER_TIP = 8,
}

class HandController {

    private handLandmarker;
    private utils; 
    private drawingUtil;
    private leftHandVisible = false;
    private rightHandVisible = false;
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
        if(leftHandVisible) {
            this.utils.setStatusTextLeftHand("Enabled");
        } else {
            this.utils.setStatusTextLeftHand("Disabled");
        }
    
        if(rightHandVisible) {
            this.utils.setStatusTextRightHand("Enabled")
        } else {
            this.utils.setStatusTextRightHand("Disabled")
        }
    }

    private checkIfHandsDetected = (newHandednessJson) => {
        this.leftHandVisible = newHandednessJson[this.leftHandString] !== null;
        this.rightHandVisible = newHandednessJson[this.rightHandString] !== null;
        this.updateControlText(this.leftHandVisible, this.rightHandVisible)
    }

    private pointControls = async (detections, newHandednessJson) => {
        const jawToggle = this.utils.getJawCheckbox();
        const eyeBrowToggle = this.utils.getEyeBrowCheckbox();

        if (this.leftHandVisible) {
            const leftHand = detections.landmarks[newHandednessJson[this.leftHandString]];
            const leftHandIndexTip = leftHand[SupportedHandLandmarkers.INDEX_FINGER_TIP];
            const leftTouch = this.utils.canvasAndLandMarkClose(this.drawingUtil.leftDotCoords, leftHandIndexTip, this.drawingUtil.maxX, this.drawingUtil.maxY, 10);
            if((leftTouch != this.prevLeftTouch) && !this.prevLeftPointPinch) {
                this.prevLeftTouch = leftTouch;
                if(leftTouch) {
                    jawToggle.checked = !jawToggle.checked;
                }
            }
        }
    
        if (this.rightHandVisible) {
            const rightHand = detections.landmarks[newHandednessJson[this.rightHandString]];
            const rightHandIndexTip = rightHand[SupportedHandLandmarkers.INDEX_FINGER_TIP];
            const rightTouch = this.utils.canvasAndLandMarkClose(this.drawingUtil.rightDotCoords, rightHandIndexTip, this.drawingUtil.maxX, this.drawingUtil.maxY, 10);
            if((rightTouch != this.prevRightTouch) && !this.prevRightPointPinch) {
                this.prevRightTouch = rightTouch;
                if(rightTouch) {
                    eyeBrowToggle.checked = !eyeBrowToggle.checked;
                }
            }
        }
    }

    private pinchControls = async (detections, newHandednessJson) => {
    
        if (this.leftHandVisible){
            const leftHand = detections.landmarks[newHandednessJson[this.leftHandString]];
            const leftHandThumbTip = leftHand[SupportedHandLandmarkers.THUMB_TIP]
            const leftHandIndexTip = leftHand[SupportedHandLandmarkers.INDEX_FINGER_TIP];
            const leftPointIsPinched = this.utils.landMarkerIntersectionAndCanvasPoint(leftHandThumbTip, leftHandIndexTip, this.drawingUtil.leftDotCoords, this.drawingUtil.maxX, this.drawingUtil.maxY, 2, 10)
            if (leftPointIsPinched != this.prevLeftPointPinch) {
                this.prevLeftPointPinch = leftPointIsPinched;
                const leftHandPinchLabel = this.utils.getStatusTextFunLeftPinch();
                if(leftPointIsPinched) {
                    leftHandPinchLabel.textContent = 'OUCH!';
                } else {
                    leftHandPinchLabel.textContent = 'Waiting...';
                }
            }
        }

        if (this.rightHandVisible){
            const rightHand = detections.landmarks[newHandednessJson[this.rightHandString]];
            const rightHandThumbTip = rightHand[SupportedHandLandmarkers.THUMB_TIP];
            const rightHandIndexTip = rightHand[SupportedHandLandmarkers.INDEX_FINGER_TIP];
            const rightPointIsPinched = this.utils.landMarkerIntersectionAndCanvasPoint(rightHandThumbTip, rightHandIndexTip, this.drawingUtil.rightDotCoords, this.drawingUtil.maxX, this.drawingUtil.maxY, 2, 10)
            if (rightPointIsPinched != this.prevRightPointPinch) {
                this.prevRightPointPinch = rightPointIsPinched;
                const rightHandPinchLabel = this.utils.getStatusTextFunRightPinch();
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
            newHandednessJson = this.utils.buildHandednessDictonary(detections.handedness)
            this.checkIfHandsDetected(newHandednessJson);

    
            this.pointControls(detections, newHandednessJson);
            this.pinchControls(detections, newHandednessJson); 
    
        }
    
        // We can set the response of this to an object to capture id
        // Then stop it so we dont spam the browser, but thats a different optimization. 
        window.requestAnimationFrame(this.handEventManager);
    }
}

module.exports = HandController;