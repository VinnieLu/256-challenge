$(document).ready(function() {
  $("#new-game-button").on('click', function() {
    console.log("clicked!")
    game = new Game()
    boardArray = game.board
    game.render(game.board)

    Mousetrap.bind('up', function() {
  		boardArray = game.move("up", boardArray)
  		game.render(boardArray)
  	})

  	Mousetrap.bind('down', function() {
  		boardArray = game.move("down", boardArray)
  		game.render(boardArray)
  	})

  	Mousetrap.bind('left', function() {
  		boardArray = game.move("left", boardArray)
  		game.render(boardArray)
  	})

  	Mousetrap.bind('right', function() {
  		boardArray = game.move("right", boardArray)
  		game.render(boardArray)
  	})

  });

});
