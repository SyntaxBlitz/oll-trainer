export default function createAlgorithm (algorithms, thisCase, onBack) {
	var caseAlgorithms = algorithms[thisCase];
	var algorithmString = caseAlgorithms[Math.floor(Math.random() * caseAlgorithms.length)];
	var algorithm = algorithmString.split(' ');

	var upperRotations = Math.floor(Math.random() * 4);

	var toReturn = invert(rotateXTimesAboutUD(algorithm, upperRotations));

	if (onBack) {
		toReturn = rotateAboutURF(rotateAboutURF(rotateAboutFB(toReturn)));
	}

	return toReturn.join('&nbsp;&nbsp;');
};

var invert = function (algorithm) {
	return algorithm.reverse().map((move) => {
		if (move.length === 1) {
			return move + '\'';
		} else if (move[1] === '\'') {
			return move[0];
		} else {
			return move;
		}
	});
};

var rotateXTimesAboutUD = function (algorithm, x) {
	if (x == 0) {
		return algorithm;
	} else {
		return rotateXTimesAboutUD(rotateAboutUD(algorithm), x - 1);
	}
}

var rotateAboutUD = function (algorithm) {
	var mapping = {
		'F': 'L',
		'U': 'U',
		'R': 'F',
		'B': 'R',
		'D': 'D',
		'L': 'B'
	};

	return algorithm.map((move) => {
		if (move.length === 1) {
			return mapping[move];
		} else if (move[1] === '\'') {
			return mapping[move[0]] + '\'';
		} else {
			return mapping[move[0]] + '2';
		}
	});	
};

var rotateAboutFB = function (algorithm) {
	var mapping = {
		'F': 'F',
		'U': 'D',
		'R': 'L',
		'B': 'B',
		'D': 'U',
		'L': 'R'
	};

	return algorithm.map((move) => {
		if (move.length === 1) {
			return mapping[move];
		} else if (move[1] === '\'') {
			return mapping[move[0]] + '\'';
		} else {
			return mapping[move[0]] + '2';
		}
	});	
};

var rotateAboutURF = function (algorithm) {
	var mapping = {
		'F': 'U',
		'U': 'R',
		'R': 'F',
		'B': 'D',
		'D': 'L',
		'L': 'B'
	};

	return algorithm.map((move) => {
		if (move.length === 1) {
			return mapping[move];
		} else if (move[1] === '\'') {
			return mapping[move[0]] + '\'';
		} else {
			return mapping[move[0]] + '2';
		}
	});	
};