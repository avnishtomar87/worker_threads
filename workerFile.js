const fs = require("fs")
const { parentPort } = require("worker_threads")
const path = './sample.json';

var data = [];
var n = 0;
for (n; n<=4299999; n++) {
  var obj = {
    name: 'name_' + n,
    family: 'family_' + n,
    age: 'age_' + n,
    address: 'address_' + n,
  };
  data.push(obj);
}
parentPort.on("message", (msg) => {
  console.log(msg)
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
  console.log("Task Completed by Worker Thread")
})


