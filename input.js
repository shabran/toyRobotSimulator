const fs = require("fs");

function input(fileName){
    try {
        //read commands file
        this.commands = fs.readFileSync(fileName).toString().split("\n");
    } catch (e) {
        if (e.code === 'ENOENT') {
            console.log('File not found!');
        } else {
            throw e;
        }
    }
    
}

module.exports=input;