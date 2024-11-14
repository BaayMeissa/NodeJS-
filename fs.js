const fs = require("fs");

const file = fs.appendFile('welcome.txt','Hello Node', function (err) {
if(err) throw err;
console.log("OK")
});

fs.readFile('welcome.txt',(err,data)=>{
    if(err)throw err;
    console.log(data.toString());
})