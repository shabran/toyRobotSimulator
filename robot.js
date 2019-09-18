function robot() {}

robot.prototype.place = function(xPos, yPos, facing) {
  this.x = parseInt(xPos);
  this.y = parseInt(yPos);
  this.facing = facing;
};

robot.prototype.move = function(tableTop) {
  let facing = this.facing;
  switch (facing) {
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

module.exports=robot;
