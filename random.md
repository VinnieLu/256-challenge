Game.prototype.move = function(move) {
	if(move === "up") {
		for (i=0;i<=15;i++) {
			if(board[i] != 0) {
				if(i === 4 || i === 8 || i === 12) {
					if(board[0] === 0) {
						if(i === 4) {
							board = board[i] + board.substr(1, 3) + "0" + board.substr(5, 11)
						}
						else if(i === 8) {
							board = board[i] + board.substr(1, 7) + "0" + board.substr(9, 7)
						}
						else if(i === 12) {
							board = board[i] + board.substr(1, 11) + "0" + board.substr(13, 3)
						}
					}
					else if(i === 4) {
						if(board[0] === board[i]) {
							board = (board[i] * 2) + board.substr(1, 3) + "0" + board.substr(5, 11)
						}
					}
					else if(i === 8) {
						if(board[4] === 0) {
							if(board[0] === board[i]) {
								board = (board[i] * 2) + board.substr(1, 7) + "0" + board.substr(5, 7)
							}
							else {
								board = board.substr(0, 3) + board[i] + board.substr(4, 4) + "0" + board.substr(9, 7)
							}
						}
						else if(board[4] === board[i]) {
							board = board.substr(0, 4) + (board[i] * 2) + board.substr(5, 3) + "0" + board.substr(9, 7)
						}
					}
					else if(i === 12) {
						if(board[4] === 0) {
							if(board[0] === board[i]) {
								board = (board[i] * 2) + board.substr(1, 11) + "0" + board.substr(13, 3)
							}
							else {
								board = board.substr(0, 4) + board[i] + board.substr(5, 7) + "0" + board.substr(13, 3)
							}
						}
						else if(board[8] === 0) {
							if(board[4] === board[i]) {
								board = board.substr(0, 4) + (board[i] * 2) + board.substr(5, 7) + "0" + board.substr(13, 3)
							}
							else {
								board = board.substr(0, 8) + board[i] + board.substr(9, 3) + "0" + board.substr(13, 3)
							}
						}
						else if(board[8] === board[i]) {
							board = board.substr(0, 8) + (board[i] * 2) + board.substr(9, 3) + "0" + board.substr(13, 3)
						}
					}
				}
				



				if i == 5 || i == 9 || i == 13 {
					if(board[1] === 0) {
						if(i === 4) {
							board = board.substr(0, 1) + board[i] + board.substr(2, 3) + "0" + board.substr(6, 10)
						}
						else if(i === 9) {
							board = board.substr(0, 1) + board[i] + board.substr(2, 7) + "0" + board.substr(10, 6)
						}
						else if(i === 13) {
							board = board.substr(0, 1) + board[i] + board.substr(2, 11) + "0" + board.substr(14, 2)
						}
					}
					else if(i === 5) {
						if(board[1] === board[i]) {
							board = board.substr(0, 1) + (board[i] * 2) + board.substr(2, 3) + "0" + board.substr(6, 10)
						}
					}
					else if(i === 9) {
						if(board[5] === 0) {
							if(board[1] === board[i]) {
								board = board.substr(0, 1) + (board[i] * 2) + board.substr(2, 7) + "0" + board.substr(10, 6)
							}
							else {
								board = board.substr(0, 5) + board[i] + board.substr(6, 3) + "0" + board.substr(10, 6)
							}
						}
						else if(board[5] === board[i]) {
							board = board.substr(0, 5) + (board[i] * 2) + board.substr(6, 3) + "0" + board.substr(10, 6)
						}
					}
					else if(i === 13) {
						if(board[5] === 0) {
							if(board[1] === board[i]) {
								board = board.substr(0, 1) + (board[i] * 2) + board.substr(2, 11) + "0" + board.substr(14, 2)
							}
							else {
								board = board.substr(0, 5) + board[i] + board.substr(6, 7) + "0" + board.substr(14, 2)
							}
						}
						else if(board[9] === 0) {
							if(board[5] === board[i]) {
								board = board.substr(0, 5) + (board[i] * 2) + board.substr(6, 7) + "0" + board.substr(14, 2)
							}
							else {
								board = board.substr(0, 5) + board[i] + board.substr(6, 7) + "0" + board.substr(14, 2)
							}
						}
						else if(board[9] === board[i]) {
							board = board.substr(0, 9) + (board[i] * 2) + board.substr(10, 3) + "0" + board.substr(14, 2)
						}
					}
				}

				if i == 6 || i == 10 || i == 14

				if i == 7 || i == 11 || i == 15

			}
		}