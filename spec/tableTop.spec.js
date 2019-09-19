describe("TableTop", ()=> {
    var TableTop = require('../services/tableTop');
    var tableTop;
  
    beforeEach(()=> {
      tableTop = new TableTop(5, 5);
    });
  
    it("Should have 5 x 5 dimension", ()=> {
      expect(tableTop.xSize).toEqual(5);
      expect(tableTop.ySize).toEqual(5);
    });
  });