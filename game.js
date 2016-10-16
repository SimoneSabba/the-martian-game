var robot = require('./robot.js');
var r;

var game = function (x, y) {
	this.x = x;
	this.y = y;
	this.lost = false;
	this.scentPositions = [];
};

game.prototype.initRobot = function(x, y, orientation) {
	r = new robot(x, y, orientation);
}

game.prototype.isInTheBoundaries = function(position) {
	return !(position.x < 0 || position.y < 0 || position.x > this.x || position.y > this.y);
}

game.prototype.isScentPosition = function(position) {
	return this.scentPositions.indexOf(position.x+''+position.y) !== -1;
}

game.prototype.play = function(moves) {
	for (var i = 0; i < moves.length; i++) {
    	if (moves[i] === 'R' || moves[i] === 'L') {
    		r.rotate(moves[i]);
    	} else {
    		newPosition = r.move();
    		if (this.isInTheBoundaries(newPosition)) {
    			r.applyPosition(newPosition.x, newPosition.y);	
    		} else {
    			this.lost = false;
    			if (!this.isScentPosition(r)) {
    				this.scentPositions.push(r.x+''+r.y);
    				this.lost = true;
    				break;
    			}
    			
    		}
    		
    	}
	}
}

game.prototype.result = function() {
	var result = r.x + ' ' + r.y + ' ' + r.orientation;
	return this.lost ? result + ' LOST' : result;
}

module.exports = game;