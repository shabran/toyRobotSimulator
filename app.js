let args = process.argv[2];
console.log(args);
const TableTop = require('./tableTop'),
    Input = require('./input'),
    Robot = require('./robot');

let tableTop = new TableTop(5, 5);
let robot = new Robot();

let fileUrl = args;
let input = new Input(fileUrl);

if (input.commands) {

    for (i = 0; i < input.commands.length; i++) {
        let command = input.commands[i];

        switch (input.getCommandWithoutArguments(command)) {
            case 'PLACE':
                let placeArguments = input.getCommandArguments(command);
                let xPos = placeArguments[0];
                let yPos = placeArguments[1];
                let facing = placeArguments[2];

                //Robot is not in the table 
                if ((xPos >= tableTop.xSize) && (yPos >= tableTop.ySize)) {
                    console.error("Robot position out of table top");
                    return;
                }

                robot.place(xPos, yPos, facing);
                break;
            case 'MOVE':
                robot.move(tableTop);
                break;
            case 'LEFT':
            case 'RIGHT':
                robot.rotate(command);
                break;
            case 'REPORT':
                console.log("\n\nOutput:" + robot.x + "," + robot.y + "," + robot.facing + "\n\n");
                break;
            default:
        }
    }

} else {
    console.log("Error");
}