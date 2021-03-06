let args = process.argv[2];

const TableTop = require('./services/tableTop'),
    Input = require('./services/input'),
    Robot = require('./services/robot');

let tableTop = new TableTop(5, 5);
let robot = new Robot();


if(args.length > 0){
    let fileUrl = args;
    let input = new Input(fileUrl);
    if(input.commands && input.FirstCommandCheck()){
        for( i = 0; i < input.commands.length; i++){
            let command = input.commands[i];

            switch(input.getCommandWithoutArguments(command)){
                case 'PLACE':
                    let placeArguments = input.getCommandArguments(command);
                    let xPos = placeArguments[0];
                    let yPos = placeArguments[1];
                    let facing = placeArguments[2];
                    
                    //wrong location, robot not on the table 
                    if((xPos >= tableTop.xSize) && (yPos >= tableTop.ySize)){
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
    }
    else{
        console.log("\n\nError: First command should be PLACE command\n\n");
    }
}
else{
    console.log("\n\nError: Missing command file path\n\n");
}