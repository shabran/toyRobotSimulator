describe("Input", () => {
  const Input = require("../services/input");
  var input;
  var filePath = "testFile/test.txt";

  beforeEach(() => {
    input = new Input(filePath);
  });

  it("Should have at least 3 instructions", () => {
    expect(input.commands.length).toBeGreaterThanOrEqual(3);
  });

  it("Should have PLACE as first command", () => {
    expect(input.FirstCommandCheck()).toBeTruthy;
  });
});
