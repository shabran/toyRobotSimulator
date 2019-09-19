describe("Robot", () => {
  const Robot = require("../services/robot");
  const TableTop = require("../services/tableTop");
  var tableTop;
  var robot;

  beforeEach(() => {
    robot = new Robot();
    tableTop = new TableTop(5, 5);
  });

  describe("When robot is facing NORTH", () => {
    var xPos = 0;
    var yPos = 0;
    var facing = "NORTH";

    beforeEach(() => {
      robot.place(xPos, yPos, facing);
    });

    it("should place the robot on tableTop", ()=> {
      expect(robot.x).toEqual(0);
      expect(robot.y).toEqual(0);
      expect(robot.facing).toBe("NORTH");
    });

    it("should move 1 step north", ()=> {
      robot.move(tableTop);
     
      expect(robot.x).toEqual(0);
      expect(robot.y).toEqual(1);
      expect(robot.facing).toBe("NORTH");
    });

    it("should face to west when robot rotate left", ()=> {
      robot.rotate("LEFT");

      expect(robot.facing).toBe("WEST");
    });

    it("should face to east when robot rotate right", ()=> {
      robot.rotate("RIGHT");

      expect(robot.facing).toBe("EAST");
    });
  });

  describe("When robot is facing SOUTH", () => {
    var xPos = 2;
    var yPos = 2;
    var facing = "SOUTH";

    beforeEach(() => {
      robot.place(xPos, yPos, facing);
    });

    it("should place the robot on tableTop", ()=> {
      expect(robot.x).toEqual(2);
      expect(robot.y).toEqual(2);
      expect(robot.facing).toBe("SOUTH");
    });

    it("should move 1 step south", ()=> {
      robot.move(tableTop);
     
      expect(robot.x).toEqual(2);
      expect(robot.y).toEqual(1);
      expect(robot.facing).toBe("SOUTH");
    });

    it("should face to east when robot rotate left", ()=> {
      robot.rotate("LEFT");

      expect(robot.facing).toBe("EAST");
    });

    it("should face to west when robot rotate right", ()=> {
      robot.rotate("RIGHT");

      expect(robot.facing).toBe("WEST");
    });
  });

  describe("When robot is facing WEST", () => {
    var xPos = 2;
    var yPos = 2;
    var facing = "WEST";

    beforeEach(() => {
      robot.place(xPos, yPos, facing);
    });

    it("should place the robot on tableTop", ()=> {
      expect(robot.x).toEqual(2);
      expect(robot.y).toEqual(2);
      expect(robot.facing).toBe("WEST");
    });

    it("should move 1 step west", ()=> {
      robot.move(tableTop);
     
      expect(robot.x).toEqual(1);
      expect(robot.y).toEqual(2);
      expect(robot.facing).toBe("WEST");
    });

    it("should face to south when robot rotate left", ()=> {
      robot.rotate("LEFT");

      expect(robot.facing).toBe("SOUTH");
    });

    it("should face to north when robot rotate right", ()=> {
      robot.rotate("RIGHT");

      expect(robot.facing).toBe("NORTH");
    });
  });

  describe("When robot is facing EAST", () => {
    var xPos = 2;
    var yPos = 2;
    var facing = "EAST";

    beforeEach(() => {
      robot.place(xPos, yPos, facing);
    });

    it("should place the robot on tableTop", ()=> {
      expect(robot.x).toEqual(2);
      expect(robot.y).toEqual(2);
      expect(robot.facing).toBe("EAST");
    });

    it("should move 1 step east", ()=> {
      robot.move(tableTop);
     
      expect(robot.x).toEqual(3);
      expect(robot.y).toEqual(2);
      expect(robot.facing).toBe("EAST");
    });

    it("should face to north when robot rotate left", ()=> {
      robot.rotate("LEFT");

      expect(robot.facing).toBe("NORTH");
    });

    it("should face to south when robot rotate right", ()=> {
      robot.rotate("RIGHT");

      expect(robot.facing).toBe("SOUTH");
    });
  });

  
});
