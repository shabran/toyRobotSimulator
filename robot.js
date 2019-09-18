function robot() {}

//place robot to initial coordinate
robot.prototype.place = function(xPos, yPos, facing) {
    this.x = parseInt(xPos);
    this.y = parseInt(yPos);
    this.facing = facing;
};

//move 1 position
robot.prototype.move = function(tableTop) {
    let facing = this.facing;
    switch (facing) {
        case "NORTH":
            if (this.y < tableTop.ySize - 1) {
                this.y += 1;
            }
            break;
        case "SOUTH":
            if (this.y > 0) {
                this.y -= 1;
            }
            break;
        case "WEST":
            if (this.x > 0) {
                this.x -= 1;
            }
            break;
        case "EAST":
            if (this.x < tableTop.xSize - 1) {
                this.x += 1;
            }
            break;
    }
};

//rotate left or right
//using ternary operator since theres only 2 possibility
robot.prototype.rotate = function(newFacing) {
    switch (this.facing) {
        case "NORTH":
            this.facing = newFacing == "RIGHT" ? "EAST" : "WEST";
            break;
        case "SOUTH":
            this.facing = newFacing == "RIGHT" ? "WEST" : "EAST";
            break;
        case "WEST":
            this.facing = newFacing == "RIGHT" ? "NORTH" : "SOUTH";
            break;
        case "EAST":
            this.facing = newFacing == "RIGHT" ? "SOUTH" : "NORTH";
            break;
    }
};

module.exports = robot;