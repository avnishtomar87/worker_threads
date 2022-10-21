const express = require("express")
const app = express();
port = 5000;
const http = require("http")
const {Worker} = require("worker_threads")
const writeWorker = new Worker("./writeFile")

const init=async() =>{
app.get("/get",(req,res,next)=>{
    console.log("requested")
    writeWorker.postMessage("hey")
    res.json("hello")
})
var httpServer = http.Server(app)
httpServer.listen(port,()=>{
console.log(`app listen in port ${port}`)
})
}
init();

