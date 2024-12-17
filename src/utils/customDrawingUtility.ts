class CustomDrawingUtility {

    private canvasElement;
    private video;
    public topLeftDotX;
    public topLeftDotY;
    public topRightDotX;
    public topRightDotY;
    public maxX;
    public maxY

    constructor(utils) {
        this.canvasElement = utils.getVideoCanvas()
        this.video = utils.getVideoPlayer();
        utils.getDrawOnCanvasButton().onclick = this.drawDots;
        utils.getClearCanvasButton().onclick = this.clearCanvas;
        utils.getInitCanvasButton().onclick = this.mutateCanvasAndVideoSize;
    }

    public mutateCanvasAndVideoSize = () => {
        const radio = this.video.videoHeight / this.video.videoWidth;
        this.video.style.width = this.video.videoWidth + "px";
        this.video.style.height = this.video.videoWidth * radio + "px";
        this.canvasElement.style.width = this.video.videoWidth + "px";
        this.canvasElement.style.height = this.video.videoWidth * radio + "px";
        this.canvasElement.width = this.video.videoWidth;
        this.canvasElement.height = this.video.videoHeight;
    }

    public drawDots = () => {
        const ctx = this.canvasElement.getContext('2d');
        this.maxY = this.video.videoHeight;
        this.maxX = this.video.videoWidth;

        ctx.beginPath();
        ctx.fillStyle = "red";
        this.topLeftDotX = 35;
        this.topLeftDotY = 35;
        ctx.fillRect(this.topLeftDotX, this.topLeftDotY, 10, 10);

        ctx.beginPath();
        ctx.fillStyle = "blue";
        this.topRightDotX = this.maxX - 40;
        this.topRightDotY = 35;
        ctx.fillRect(this.topRightDotX, this.topRightDotY, 10, 10);
    }

    public clearCanvas = () => {
        const ctx = this.canvasElement.getContext('2d');
        const width = this.canvasElement.width;
        const height = this.canvasElement.height;
        ctx.clearRect(0, 0, width, height);
    }
}

module.exports = CustomDrawingUtility;