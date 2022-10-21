const express = require("express")
const app = express();
port = 4000;
const http = require("http")
const { Worker } = require("worker_threads")
const workerThread = new Worker("./workerThread")

const init = async () => {

    app.get("/create", (req, res, next) => {
        console.log("Api Requested")
        workerThread.postMessage("Task assign to worker thread")
        res.json("Main Thread Working Fine")
    })

    var httpServer = http.Server(app)
    httpServer.listen(port, () => {
        console.log(`app listen in port ${port}`)
    })
}
init();

