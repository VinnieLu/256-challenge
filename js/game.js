function Game() {
	this.board = this.boardGenerator()
}

Game.prototype.boardGenerator = function() {
		zeroesBoard = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
		indexOne = Math.floor(Math.random() * 15)
		indexTwo = Math.floor(Math.random() * 15)
		while(indexTwo === indexOne) {
			indexTwo = Math.floor(Math.random() * 15)
		}
		zeroesBoard[indexOne] = "2"
		zeroesBoard[indexTwo] = "2"
		return zeroesBoard
}

Game.prototype.render = function(gameBoard) {
	for(i=0;i<=15;i++) {
		($($(".cell")[i])).text(gameBoard[i])
		if(gameBoard[i] === "0") {
			($($(".cell")[i])).css("background", "linear-gradient(blue, purple")
		}
		if(gameBoard[i] === "2") {
			($($(".cell")[i])).css("background", "linear-gradient(yellow, green")
		}
		if(gameBoard[i] === "4") {
			($($(".cell")[i])).css("background", "linear-gradient(red, purple)")
		}
		if(gameBoard[i] === "8") {
			($($(".cell")[i])).css("background", "linear-gradient(yellow, purple)")
		}
		if(gameBoard[i] === "16") {
			($($(".cell")[i])).css("background", "linear-gradient(yellow, brown")
		}
		if(gameBoard[i] === "32") {
			($($(".cell")[i])).css("background", "linear-gradient(red, orange)")
		}
		if(gameBoard[i] === "64") {
			($($(".cell")[i])).css("background", "linear-gradient(green, yellow")
		}
		if(gameBoard[i] === "128") {
			($($(".cell")[i])).css("background", "linear-gradient(green, yellow")
		}
	}
}

Game.prototype.fourRows = function(boardArray) {
	var manyRows = ""
	for(i=0;i<boardArray.length;i++) {
		if(boardArray[i].length === 1) {
			if(i === 3 || i === 7 || i === 11) {
				manyRows += boardArray[i] + "    \n"
			}
			else {
				manyRows += boardArray[i] + "    "
			}
		}
		else if(boardArray[i].length === 2) {
			if(i === 3 || i === 7 || i === 11) {
				manyRows += boardArray[i] + "   \n"
			}
			else {
				manyRows += boardArray[i] + "   "
			}
		}
		else if(boardArray[i].length === 3) {
			if(i === 3 || i === 7 || i === 11) {
				manyRows += boardArray[i] + "  \n"
			}
			else {
				manyRows += boardArray[i] + "  "
			}
		}
		else if(boardArray[i].length === 4) {
			if(i === 3 || i === 7 || i === 11) {
				manyRows += boardArray[i] + " \n"
			}
			else {
				manyRows += boardArray[i] + " "
			}
		}
	}
	return manyRows
}



Game.prototype.oneRow = function(fourRowBoard) {
	var oneRow = []
	var numbers = ""
	for(i=0;i<fourRowBoard.length;i++) {
		if((fourRowBoard[i] !== " " && fourRowBoard[i] !== "\n")) {
			numbers += fourRowBoard[i];
		}
		else if((fourRowBoard[i] === " ")) {
			if(fourRowBoard[i-1] !== " ") {
				oneRow.push(numbers);
				numbers = "";
			}
		}
	}
	return oneRow
}


Game.prototype.move = function(move, boardArray) {
	// board = this.oneRow(fourRowBoard)
	board = boardArray
	if(move === "up") {
		for (i=0;i<=15;i++) {
			if(board[i] != 0) {
				if(i === 4 || i === 8 || i === 12) {
					if(board[0] === "0") {
						board[0] = board[i]
						board[i] = "0"
					}
					else if(i === 4) {
						if(board[0] === board[i]) {
							board[0] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 8) {
						if(board[4] === "0") {
							if(board[0] === board[i]) {
								board[0] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[4] = board[i]
								board[i] = "0"
							}
						}
						else if(board[4] === board[i]) {
							board[4] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 12) {
						if(board[4] === "0") {
							if(board[0] === board[i]) {
								board[0] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[4] = board[i]
								board[i] = "0"
							}
						}
						else if(board[8] === "0") {
							if(board[4] === board[i]) {
								board[4] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[8] = board[i]
								board[i] = "0"
							}
						}
						else if(board[8] === board[i]) {
							board[8] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}
				
				if(i === 5 || i === 9 || i === 13) {
					if(board[1] === "0") {
						board[1] = board[i]
						board[i] = "0"
					}
					else if(i === 5) {
						if(board[1] === board[i]) {
							board[1] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 9) {
						if(board[5] === "0") {
							if(board[1] === board[i]) {
								board[1] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[5] = board[i]
								board[i] = "0"
							}
						}
						else if(board[5] === board[i]) {
							board[5] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 13) {
						if(board[5] === "0") {
							if(board[1] === board[i]) {
								board[1] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[5] = board[i]
								board[i] = "0"
							}
						}
						else if(board[9] === "0") {
							if(board[5] === board[i]) {
								board[5] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[9] = board[i]
								board[i] = "0"
							}
						}
						else if(board[9] === board[i]) {
							board[9] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

				if(i === 6 || i === 10 || i === 14) {
					if(board[2] === "0") {
						board[2] = board[i]
						board[i] = "0"
					}
					else if(i === 6) {
						if(board[2] === board[i]) {
							board[2] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 10) {
						if(board[6] === "0") {
							if(board[2] === board[i]) {
								board[2] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[6] = board[i]
								board[i] = "0"
							}
						}
						else if(board[6] === board[i]) {
							board[6] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 14) {
						if(board[6] === "0") {
							if(board[2] === board[i]) {
								board[2] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[6] = board[i]
								board[i] = "0"
							}
						}
						else if(board[10] === "0") {
							if(board[6] === board[i]) {
								board[6] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[10] = board[i]
								board[i] = "0"
							}
						}
						else if(board[10] === board[i]) {
							board[10] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

				if(i === 7 || i === 11 || i === 15) {
					if(board[3] === "0") {
						board[3] = board[i]
						board[i] = "0"
					}
					else if(i === 7) {
						if(board[3] === board[i]) {
							board[3] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 11) {
						if(board[7] === "0") {
							if(board[3] === board[i]) {
								board[3] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[7] = board[i]
								board[i] = "0"
							}
						}
						else if(board[7] === board[i]) {
							board[7] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 15) {
						if(board[7] === "0") {
							if(board[3] === board[i]) {
								board[3] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[7] = board[i]
								board[i] = "0"
							}
						}
						else if(board[11] === "0") {
							if(board[7] === board[i]) {
								board[7] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[11] = board[i]
								board[i] = "0"
							}
						}
						else if(board[11] === board[i]) {
							board[11] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

			}
		}
	}





	if(move === "right") {
		for (i=15;i>=0;i--) {
			if(board[i] != 0) {
				if(i === 2 || i === 1 || i === 0) {
					if(board[3] === "0") {
						board[3] = board[i]
						board[i] = "0"
					}
					else if(i === 2) {
						if(board[3] === board[i]) {
							board[3] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 1) {
						if(board[2] === "0") {
							if(board[3] === board[i]) {
								board[3] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[2] = board[i]
								board[i] = "0"
							}
						}
						else if(board[2] === board[i]) {
							board[2] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 0) {
						if(board[2] === "0") {
							if(board[3] === board[i]) {
								board[3] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[2] = board[i]
								board[i] = "0"
							}
						}
						else if(board[1] === "0") {
							if(board[2] === board[i]) {
								board[2] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[1] = board[i]
								board[i] = "0"
							}
						}
						else if(board[1] === board[i]) {
							board[1] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}
				
				if(i === 6 || i === 5 || i === 4) {
					if(board[7] === "0") {
						board[7] = board[i]
						board[i] = "0"
					}
					else if(i === 6) {
						if(board[7] === board[i]) {
							board[7] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 5) {
						if(board[6] === "0") {
							if(board[7] === board[i]) {
								board[7] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[6] = board[i]
								board[i] = "0"
							}
						}
						else if(board[6] === board[i]) {
							board[6] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 4) {
						if(board[6] === "0") {
							if(board[7] === board[i]) {
								board[7] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[6] = board[i]
								board[i] = "0"
							}
						}
						else if(board[5] === "0") {
							if(board[6] === board[i]) {
								board[6] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[5] = board[i]
								board[i] = "0"
							}
						}
						else if(board[5] === board[i]) {
							board[5] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

				if(i === 10 || i === 9 || i === 8) {
					if(board[11] === "0") {
						board[11] = board[i]
						board[i] = "0"
					}
					else if(i === 10) {
						if(board[11] === board[i]) {
							board[11] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 9) {
						if(board[10] === "0") {
							if(board[11] === board[i]) {
								board[11] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[10] = board[i]
								board[i] = "0"
							}
						}
						else if(board[10] === board[i]) {
							board[10] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 8) {
						if(board[10] === "0") {
							if(board[11] === board[i]) {
								board[11] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[10] = board[i]
								board[i] = "0"
							}
						}
						else if(board[9] === "0") {
							if(board[10] === board[i]) {
								board[10] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[9] = board[i]
								board[i] = "0"
							}
						}
						else if(board[9] === board[i]) {
							board[9] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

				if(i === 14 || i === 13 || i === 12) {
					if(board[15] === "0") {
						board[15] = board[i]
						board[i] = "0"
					}
					else if(i === 14) {
						if(board[15] === board[i]) {
							board[15] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 13) {
						if(board[14] === "0") {
							if(board[15] === board[i]) {
								board[15] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[14] = board[i]
								board[i] = "0"
							}
						}
						else if(board[14] === board[i]) {
							board[14] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 12) {
						if(board[14] === "0") {
							if(board[15] === board[i]) {
								board[15] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[14] = board[i]
								board[i] = "0"
							}
						}
						else if(board[13] === "0") {
							if(board[14] === board[i]) {
								board[14] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[13] = board[i]
								board[i] = "0"
							}
						}
						else if(board[13] === board[i]) {
							board[13] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

			}
		}
	}


	if(move === "left") {
		for(i=0;i<=15;i++) {
			if(board[i] != 0) {
				if(i === 1 || i === 2 || i === 3) {
					if(board[0] === "0") {
						board[0] = board[i]
						board[i] = "0"
					}
					else if(i === 1) {
						if(board[0] === board[i]) {
							board[0] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 2) {
						if(board[1] === "0") {
							if(board[0] === board[i]) {
								board[0] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[1] = board[i]
								board[i] = "0"
							}
						}
						else if(board[1] === board[i]) {
							board[1] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 3) {
						if(board[1] === "0") {
							if(board[0] === board[i]) {
								board[0] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[1] = board[i]
								board[i] = "0"
							}
						}
						else if(board[2] === "0") {
							if(board[1] === board[i]) {
								board[1] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[2] = board[i]
								board[i] = "0"
							}
						}
						else if(board[2] === board[i]) {
							board[2] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}
				
				if(i === 5 || i === 6 || i === 7) {
					if(board[4] === "0") {
						board[4] = board[i]
						board[i] = "0"
					}
					else if(i === 5) {
						if(board[4] === board[i]) {
							board[4] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 6) {
						if(board[5] === "0") {
							if(board[4] === board[i]) {
								board[4] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[5] = board[i]
								board[i] = "0"
							}
						}
						else if(board[5] === board[i]) {
							board[5] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 7) {
						if(board[5] === "0") {
							if(board[4] === board[i]) {
								board[4] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[5] = board[i]
								board[i] = "0"
							}
						}
						else if(board[6] === "0") {
							if(board[5] === board[i]) {
								board[5] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[6] = board[i]
								board[i] = "0"
							}
						}
						else if(board[6] === board[i]) {
							board[6] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

				if(i === 9 || i === 10 || i === 11) {
					if(board[8] === "0") {
						board[8] = board[i]
						board[i] = "0"
					}
					else if(i === 9) {
						if(board[8] === board[i]) {
							board[8] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 10) {
						if(board[9] === "0") {
							if(board[8] === board[i]) {
								board[8] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[9] = board[i]
								board[i] = "0"
							}
						}
						else if(board[9] === board[i]) {
							board[9] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 11) {
						if(board[9] === "0") {
							if(board[8] === board[i]) {
								board[8] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[9] = board[i]
								board[i] = "0"
							}
						}
						else if(board[10] === "0") {
							if(board[9] === board[i]) {
								board[9] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[10] = board[i]
								board[i] = "0"
							}
						}
						else if(board[10] === board[i]) {
							board[10] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

				if(i === 13 || i === 14 || i === 15) {
					if(board[12] === "0") {
						board[12] = board[i]
						board[i] = "0"
					}
					else if(i === 13) {
						if(board[12] === board[i]) {
							board[12] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 14) {
						if(board[13] === "0") {
							if(board[12] === board[i]) {
								board[12] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[13] = board[i]
								board[i] = "0"
							}
						}
						else if(board[13] === board[i]) {
							board[13] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 15) {
						if(board[13] === "0") {
							if(board[14] === board[i]) {
								board[14] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[13] = board[i]
								board[i] = "0"
							}
						}
						else if(board[14] === "0") {
							if(board[13] === board[i]) {
								board[13] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[14] = board[i]
								board[i] = "0"
							}
						}
						else if(board[14] === board[i]) {
							board[14] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

			}
		}
	}




	if(move === "down") {
		for (i=15;i>=0;i--) {
			if(board[i] != 0) {
				if(i === 8 || i === 4 || i === 0) {
					if(board[12] === "0") {
						board[12] = board[i]
						board[i] = "0"
					}
					else if(i === 8) {
						if(board[12] === board[i]) {
							board[12] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 4) {
						if(board[8] === "0") {
							if(board[12] === board[i]) {
								board[12] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[8] = board[i]
								board[i] = "0"
							}
						}
						else if(board[8] === board[i]) {
							board[8] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 0) {
						if(board[8] === "0") {
							if(board[12] === board[i]) {
								board[12] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[8] = board[i]
								board[i] = "0"
							}
						}
						else if(board[4] === "0") {
							if(board[8] === board[i]) {
								board[8] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[4] = board[i]
								board[i] = "0"
							}
						}
						else if(board[4] === board[i]) {
							board[4] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}
				
				if(i === 9 || i === 5 || i === 1) {
					if(board[13] === "0") {
						board[13] = board[i]
						board[i] = "0"
					}
					else if(i === 9) {
						if(board[13] === board[i]) {
							board[13] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 5) {
						if(board[9] === "0") {
							if(board[13] === board[i]) {
								board[13] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[9] = board[i]
								board[i] = "0"
							}
						}
						else if(board[9] === board[i]) {
							board[9] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 1) {
						if(board[9] === "0") {
							if(board[13] === board[i]) {
								board[13] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[9] = board[i]
								board[i] = "0"
							}
						}
						else if(board[5] === "0") {
							if(board[9] === board[i]) {
								board[9] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[5] = board[i]
								board[i] = "0"
							}
						}
						else if(board[5] === board[i]) {
							board[5] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

				if(i === 10 || i === 6 || i === 2) {
					if(board[14] === "0") {
						board[14] = board[i]
						board[i] = "0"
					}
					else if(i === 10) {
						if(board[14] === board[i]) {
							board[14] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 6) {
						if(board[10] === "0") {
							if(board[14] === board[i]) {
								board[14] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[10] = board[i]
								board[i] = "0"
							}
						}
						else if(board[10] === board[i]) {
							board[10] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 2) {
						if(board[10] === "0") {
							if(board[14] === board[i]) {
								board[14] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[10] = board[i]
								board[i] = "0"
							}
						}
						else if(board[6] === "0") {
							if(board[10] === board[i]) {
								board[10] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[6] = board[i]
								board[i] = "0"
							}
						}
						else if(board[6] === board[i]) {
							board[6] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

				if(i === 11 || i === 7 || i === 3) {
					if(board[15] === "0") {
						board[15] = board[i]
						board[i] = "0"
					}
					else if(i === 11) {
						if(board[15] === board[i]) {
							board[15] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 7) {
						if(board[11] === "0") {
							if(board[15] === board[i]) {
								board[15] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[11] = board[i]
								board[i] = "0"
							}
						}
						else if(board[11] === board[i]) {
							board[11] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
					else if(i === 3) {
						if(board[11] === "0") {
							if(board[15] === board[i]) {
								board[15] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[11] = board[i]
								board[i] = "0"
							}
						}
						else if(board[7] === "0") {
							if(board[11] === board[i]) {
								board[11] = (board[i] * 2) + ""
								board[i] = "0"
							}
							else {
								board[7] = board[i]
								board[i] = "0"
							}
						}
						else if(board[7] === board[i]) {
							board[7] = (board[i] * 2) + ""
							board[i] = "0"
						}
					}
				}

			}
		}
		
	}

	indexes = []
	for(i=0;i<board.length;i++) {
		if(board[i] === "0") {
			indexes.push(i)
		}
		else if(board[i] === "64") {
			alert("You won!")
		}
	}
	index = indexes[Math.floor(Math.random() * indexes.length)]
	board[index] = "2"

// finalBoard = this.fourRows(board)
// return finalBoard
	return board

}