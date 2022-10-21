const fs = require("fs")
const {parentPort} = require("worker_threads")
const {JsonStreamStringify} = require('json-stream-stringify')
const path = './sample.json';

var data = [];
var n = 0;
for (n; n<= 1000e1000; n++) {
  var obj = {
    name: 'name_' + n,
    family: 'family_' + n,
    age: 'age_' + n,
    address: 'address_' + n,
    gender: 'name_' + n,
    class: 'family_' + n,
    standard: 'age_' + n,
    section: 'address_' + n,
    amount: 'name_' + n,
    salary: 'family_' + n,
    month: 'age_' + n,
    year: 'address_' + n
  };
  data.push(obj);
  // for (n; n < 3333333; n++) {
  //   var obj = {
  //     name: 'name_' + n,
  //     family: 'family_' + n,
  //     age: 'age_' + n,
  //     address: 'address_' + n
  //   };
  //   data.push(obj);
    
  // }
}
const streamingData = ()=>{
//     const writeStream = fs.createWriteStream('./object.json', { flags: 'w' })
// const jsonStream = new JsonStreamStringify(Promise.resolve(Promise.resolve(data)))
// jsonStream.pipe(writeStream)
// jsonStream.on('end', () => console.log('done '))

var stream = fs.createWriteStream("append.txt", {flags:'a'});
console.log(new Date().toISOString());
data.forEach( function (item,index) {
    stream.write(index + "\n");
});
console.log(new Date().toISOString());
stream.end();
}

parentPort.on("message",()=>{
    // fs.writeFileSync(path,JSON.stringify(data, null, 16));

    const jsonString = JSON.stringify(data)
    fs.writeFile('./newCustomer.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  })
    // streamingData()
    })


