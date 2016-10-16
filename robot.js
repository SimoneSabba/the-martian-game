var rightRotationMapping = {
		N: 'E',
		E: 'S',
		S: 'W',
		W: 'N'
	},
	leftRotationMapping = {
		N: 'W',
		E: 'N',
		S: 'E',
		W: 'S'
	};

var robot = function (x, y, orientation) {
	this.applyPosition(x, y);
	this.orientation = orientation;
};

robot.prototype.rotate = function (rotation) {
	this.orientation = rotation === 'L' ? leftRotationMapping[this.orientation] : rightRotationMapping[this.orientation];
}

robot.prototype.move = function () {
	
	var newPosition = {
		x: this.x,
		y: this.y
	};

	switch(this.orientation) {
	    case 'N':
	        newPosition.y += 1;
	        break;
	    case 'E':
	        newPosition.x += 1;
	        break;
	    case 'S':
	        newPosition.y -= 1;
	        break;
	    case 'W':
	        newPosition.x -= 1;
	        break;
	    default: ''
	}

	return newPosition;
}

robot.prototype.applyPosition = function(x, y) {
	this.x = x;
	this.y = y;
}


module.exports = robot;