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
//get command args without space
input.prototype.getCommandArguments = function(command) {
    let space = command.indexOf(" ");
    let argumentString = command.slice(space);
    let argumentArray = argumentString.split(",");
    let argumentArrayWithoutSpace = argumentArray.map(s => { return s.trim() });
    return argumentArrayWithoutSpace;
};

//check empty command if theres none remove it
input.prototype.getCommandWithoutArguments = function(command) {
    if (command.indexOf(" ") == -1) {
        return command;
    }
    return command.slice(0, command.indexOf(" "));
};

//check first command must be PLACE
input.prototype.FirstCommandCheck = function() {
    var firstCommand = this.commands[0];
    var firstCommandUppercase = firstCommand.toUpperCase();
    var commandDetails = firstCommandUppercase.split(" ");
    if(commandDetails[0] == "PLACE"){
        return true;
    }
    return false;
};

module.exports = input;