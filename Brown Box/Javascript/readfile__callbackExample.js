process.stdout.write('\033c');

const fs = require("fs");
//Render header 
console.log('-- Header --');

//Render body
fs.readFile('Comparison.txt', (err, data) => {
    if(err) {
        console.log(err.message);
    } else {
        console.log("Body: " + data);
    }
})


//Render footer
console.log('-- Footer --');