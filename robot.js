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
            if(this.x > 0){
                this.x -= 1; 
            }
      break;
    case "EAST":
            if(this.x < (tableTop.xSize - 1)){
                this.x += 1; 
            }
      break;
  }
};

robot.prototype.rotate = function(newFacing) {
  switch (this.facing) {
    case "NORTH":
      //action
      break;
    case "SOUTH":
      //action
      break;
    case "WEST":
      //action
      break;
    case "EAST":
      //action
      break;
  }
};

module.exports = robot;
