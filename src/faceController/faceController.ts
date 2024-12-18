// Supported Movements
enum SupportedFaceMovements {
    JawOpen = 'jawOpen',
    BrowDownLeft = 'browDownLeft',
    BroDownRight = 'browDownRight'
}

class FaceController {

    private faceLandmarker;
    private utils; 
    private prevMouthOpen = false;
    private prevMouthClosed = false;
    private prevLeftBrowIsDown = false;
    private prevRightBrowIsdown = false;

    constructor(faceLandmarker, utils) {
        this.faceLandmarker = faceLandmarker;
        this.utils = utils;
    }

    private jawMusicControl = async (detections, blendShapesDictionary, audioPlayer) => {
        const jawOpenScore = detections?.faceBlendshapes[0]?.categories[blendShapesDictionary[SupportedFaceMovements.JawOpen]].score * 100;
        const mouthOpen = 100 - jawOpenScore < 70;
        const mouthClosed = 100 - jawOpenScore > 95; 
    
        if(mouthOpen && mouthOpen !== this.prevMouthOpen) {
            this.prevMouthOpen = mouthOpen;
            this.prevMouthClosed = false;
            audioPlayer.play();
        }
    
        if(mouthClosed && mouthClosed !== this.prevMouthClosed) {
            this.prevMouthClosed = mouthClosed;
            this.prevMouthOpen = false;
            audioPlayer.pause();
        }
    }

    private eyeBrowControl = async (detections, blendShapesDictionary, audioPlayer) => {
        const browDownLeftScore = detections?.faceBlendshapes[0]?.categories[blendShapesDictionary[SupportedFaceMovements.BrowDownLeft]].score * 100;
        const leftBrowIsDown = 100 - browDownLeftScore < 45;
        const browDownRightScore = detections?.faceBlendshapes[0]?.categories[blendShapesDictionary[SupportedFaceMovements.BroDownRight]].score * 100;
        const rightBrowIsDown = 100 - browDownRightScore < 45;
    
    
        if(this.prevLeftBrowIsDown !== leftBrowIsDown){
            this.prevLeftBrowIsDown = leftBrowIsDown; 
            if(leftBrowIsDown && !rightBrowIsDown){
                if(audioPlayer.volume - 0.2 > 0) {
                    audioPlayer.volume -= 0.2;
                } else {
                    audioPlayer.volume = 0;
                }
            }
        }
    
        if(this.prevRightBrowIsdown !== rightBrowIsDown){
            this.prevRightBrowIsdown = rightBrowIsDown; 
            if(rightBrowIsDown && !leftBrowIsDown){
                if(audioPlayer.volume + 0.2 < 1) {
                    audioPlayer.volume += 0.2;
                } else {
                    audioPlayer.volume = 1;
                }
            }
        }
    }


    public faceEventManager = async () => {
        const video = this.utils.getVideoPlayer();
        const audioPlayer = this.utils.getAudioPlayer();
        const jawToggle = this.utils.getJawCheckbox();
        const eyeBrowToggle = this.utils.getEyeBrowCheckbox();
    
        let blendShapesDictionary: Record<string, number> = {};
        let lastVideoTime: Number = -1;
        let startTimeMs: Number = performance.now();
        if (video.currentTime != lastVideoTime) {
            lastVideoTime = video.currentTime;
            const detections = this.faceLandmarker.detectForVideo(video, startTimeMs);
            // TODO: Can improve this function
            blendShapesDictionary = this.utils.buildFaceBlendShapesDictonary(detections.faceBlendshapes, blendShapesDictionary);
            jawToggle.checked && this.jawMusicControl(detections, blendShapesDictionary, audioPlayer);
            eyeBrowToggle.checked && this.eyeBrowControl(detections, blendShapesDictionary, audioPlayer);
        }
    
        // We can set the response of this to an object to capture id
        // Then stop it so we dont spam the browser, but thats a different optimization. 
        window.requestAnimationFrame(this.faceEventManager);
    }
}

module.exports = FaceController;