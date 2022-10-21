const fs = require("fs")
const { parentPort } = require("worker_threads")
const path = './sample.json';

var data = [];
var n = 0;
for (n; n<=5300000; n++) {
  var obj = {
    name: 'avnish tomar_' + n,
    degree: 'mca_' + n,
    age: '23_' + n,
    address: 'gwalior_' + n,
  };
  data.push(obj);
}
parentPort.on("message", (msg) => {
  console.log(msg)
  fs.writeFileSync(path, JSON.stringify(data));
  console.log("Task Completed by Worker Thread")
})


