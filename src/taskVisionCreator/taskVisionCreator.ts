class TaskVisionCreator {

    private taskLandmarker;

    private constructor(taskLandmarker) {
        this.taskLandmarker = taskLandmarker;
    }

    static create = async (fileSetResolve, landmarker, options) => {
        const vision = await fileSetResolve.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );
        const result = await landmarker.createFromOptions(vision, options)
        return new TaskVisionCreator(result);
    }

    public getTaskLandmarker = () => {
        return this.taskLandmarker;
    }
}

module.exports = TaskVisionCreator;