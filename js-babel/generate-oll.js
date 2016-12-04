'use strict';

var createOll = function createOll(ollAlgorithms, ollCase, onBack) {
	var algorithms = ollAlgorithms[ollCase];
	var algorithmString = algorithms[Math.floor(Math.random() * algorithms.length)];
	var algorithm = algorithmString.split(' ');

	var upperRotations = Math.floor(Math.random() * 4);

	var toReturn = invert(rotateXTimesAboutUD(algorithm, upperRotations));

	if (onBack) {
		toReturn = rotateAboutURF(rotateAboutURF(rotateAboutFB(toReturn)));
	}

	return toReturn.join('&nbsp;&nbsp;');
};

var invert = function invert(algorithm) {
	return algorithm.reverse().map(function (move) {
		if (move.length === 1) {
			return move + '\'';
		} else if (move[1] === '\'') {
			return move[0];
		} else {
			return move;
		}
	});
};

var rotateXTimesAboutUD = function rotateXTimesAboutUD(algorithm, x) {
	if (x == 0) {
		return algorithm;
	} else {
		return rotateXTimesAboutUD(rotateAboutUD(algorithm), x - 1);
	}
};

var rotateAboutUD = function rotateAboutUD(algorithm) {
	var mapping = {
		'F': 'L',
		'U': 'U',
		'R': 'F',
		'B': 'R',
		'D': 'D',
		'L': 'B'
	};

	return algorithm.map(function (move) {
		if (move.length === 1) {
			return mapping[move];
		} else if (move[1] === '\'') {
			return mapping[move[0]] + '\'';
		} else {
			return mapping[move[0]] + '2';
		}
	});
};

var rotateAboutFB = function rotateAboutFB(algorithm) {
	var mapping = {
		'F': 'F',
		'U': 'D',
		'R': 'L',
		'B': 'B',
		'D': 'U',
		'L': 'R'
	};

	return algorithm.map(function (move) {
		if (move.length === 1) {
			return mapping[move];
		} else if (move[1] === '\'') {
			return mapping[move[0]] + '\'';
		} else {
			return mapping[move[0]] + '2';
		}
	});
};

var rotateAboutURF = function rotateAboutURF(algorithm) {
	var mapping = {
		'F': 'U',
		'U': 'R',
		'R': 'F',
		'B': 'D',
		'D': 'L',
		'L': 'B'
	};

	return algorithm.map(function (move) {
		if (move.length === 1) {
			return mapping[move];
		} else if (move[1] === '\'') {
			return mapping[move[0]] + '\'';
		} else {
			return mapping[move[0]] + '2';
		}
	});
};