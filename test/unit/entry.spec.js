var Lion = require("../../dist/lion");

describe("LionJS Entry Point", function() {
    it("can be called via the constructor", function() {
        var returnVal = Lion();

        expect(returnVal).toBe("test");
    });
});
