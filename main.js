const express = require("express")
const app = express();
port = 5000;
const http = require("http")
const { Worker } = require("worker_threads")
const workerThread = new Worker("./workerFile")

const init = async () => {

    app.get("/get", (req, res, next) => {
        console.log("Api Requested")
        workerThread.postMessage("task assign to worker thread")
        res.json("main Thread Working Fine")
    })

    var httpServer = http.Server(app)
    httpServer.listen(port, () => {
        console.log(`app listen in port ${port}`)
    })
}
init();

