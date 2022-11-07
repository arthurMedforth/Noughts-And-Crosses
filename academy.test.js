const academy = require('./academy');
/* 
describe("When checking the board for winning patterns", () => {
    test("Diagonal streaks are detected", () =>{
        board = [['nought', null, null], 
                 [null, 'nought', null], 
                 [null, null, 'nought']];
        const actualOutput = academy.checkForDiagonalWin(board)
        expect(actualOutput).toBe(true)
    })
}) */
test("First player places a nought in an empty cell",()=>{
    board = [[null, null, null], 
             [null, null, null], 
             [null, null, null]];
    const row = 1
    const column = 1;

    const expectedOutput = [[null, null, null], 
                            [null, "nought", null], 
                            [null, null, null]];

    const actualOutput = academy.takeTurn(row,column)
    expect(actualOutput).toStrictEqual(expectedOutput)
})



