const fs = require("fs");

function input(fileName) {
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

input.prototype.getCommandArguments = function(command) {
    let space = command.indexOf(" ");
    let argumentString = command.slice(space);
    let argumentArray = argumentString.split(",");
    let argumentArrayWithoutSpace = argumentArray.map(s => { return s.trim() });
    return argumentArrayWithoutSpace;
};

input.prototype.getCommandWithoutArguments = function(command) {
    if (command.indexOf(" ") == -1) {
        return command;
    }
    return command.slice(0, command.indexOf(" "));
};



module.exports = input;