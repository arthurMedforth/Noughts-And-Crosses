// Make your changes to store and update game state in this file

// laying out board with multidimensional array
let board = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

//let player0Name = prompt("Insert Player 1 name")
//let playerXName = prompt("Insert Player 2 name")

let gameOver = false
let turn = 0

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    // if a cell already has been filled already show that it has been taken, nothing happens, no change to turn counter
    if ((board[row][column] !== null) || gameOver) {
        console.log(`Didn't put a symbol at ${row}, ${column} because it's already full!`)
    }  
    // player 0 starts to fill in grid but then takes turns with player X up to 9 turns
    else if (turn % 2 === 0) {
        board[row][column] = "nought"
        turn += 1
        // console.log(`Put a nought at ${row}, ${column}`)
    }
    else if (turn % 2 !== 0) {
        board[row][column] = "cross"
        turn += 1
        // console.log(`Put a cross at ${row}, ${column}`)
    }
    // console.log(`Board: ${board}`)
    // console.log(`Now on turn: ${turn}`)
    return board
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    // check if player0 won
    //horizontal
    if ((board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][2] === "nought") ||
    (board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][2] === "nought") ||
    (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][2] === "nought") ||
    // vertical
    (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[2][0] === "nought") ||
    (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[2][1] === "nought") ||
    (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[2][2] === "nought") ||
    // diagonals
    (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === "nought") ||
    (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] === "nought")) {
        gameOver = true
        return "noughts"  
    }
    // check if playerX won
    // horizontal
    else if ((board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][2] === "cross") ||
    (board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][2] === "cross") ||
    (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][2] === "cross") ||
    // vertical
    (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[2][0] === "cross") ||
    (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[2][1] === "cross") ||
    (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[2][2] === "cross") ||
    // diagonals
    (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === "cross") ||
    (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] === "cross")) {
            gameOver = true
            return "crosses"
        } 
        // if nobody won, return nobody    
        else if (turn >= 9) {
            gameOver = true
            return "nobody"
        }
        // return null to continue playing
        else {
        return null;
    } 
}
// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    // clear everything from board
    board = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]
    turn = 0
    gameOver = false
    return board

}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}

