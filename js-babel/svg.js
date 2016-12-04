"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function OuterFrame() {
	return React.createElement(
		"g",
		null,
		React.createElement("rect", { x: "12", y: "12", width: "208", height: "4" }),
		React.createElement("rect", { x: "12", y: "80", width: "208", height: "4" }),
		React.createElement("rect", { x: "12", y: "148", width: "208", height: "4" }),
		React.createElement("rect", { x: "12", y: "216", width: "208", height: "4" }),
		React.createElement("rect", { x: "12", y: "12", width: "4", height: "208" }),
		React.createElement("rect", { x: "80", y: "12", width: "4", height: "208" }),
		React.createElement("rect", { x: "148", y: "12", width: "4", height: "208" }),
		React.createElement("rect", { x: "216", y: "12", width: "4", height: "208" })
	);
}

function TopLines(props) {
	return React.createElement(
		"g",
		null,
		[React.createElement("rect", { x: "20", y: "0", width: "56", height: "4", key: "top1" }), React.createElement("rect", { x: "88", y: "0", width: "56", height: "4", key: "top2" }), React.createElement("rect", { x: "156", y: "0", width: "56", height: "4", key: "top3" })].filter(function (_, index) {
			return props.mask[index];
		})
	);
}

function LeftLines(props) {
	return React.createElement(
		"g",
		null,
		[React.createElement("rect", { x: "0", y: "20", width: "4", height: "56", key: "left1" }), React.createElement("rect", { x: "0", y: "88", width: "4", height: "56", key: "left2" }), React.createElement("rect", { x: "0", y: "156", width: "4", height: "56", key: "left3" })].filter(function (_, index) {
			return props.mask[index];
		})
	);
}

function RightLines(props) {
	return React.createElement(
		"g",
		null,
		[React.createElement("rect", { x: "228", y: "20", width: "4", height: "56", key: "right1" }), React.createElement("rect", { x: "228", y: "88", width: "4", height: "56", key: "right2" }), React.createElement("rect", { x: "228", y: "156", width: "4", height: "56", key: "right3" })].filter(function (_, index) {
			return props.mask[index];
		})
	);
}

function BottomLines(props) {
	return React.createElement(
		"g",
		null,
		[React.createElement("rect", { x: "20", y: "228", width: "56", height: "4", key: "bottom1" }), React.createElement("rect", { x: "88", y: "228", width: "56", height: "4", key: "bottom2" }), React.createElement("rect", { x: "156", y: "228", width: "56", height: "4", key: "bottom3" })].filter(function (_, index) {
			return props.mask[index];
		})
	);
}

function Squares(props) {
	return React.createElement(
		"g",
		null,
		[React.createElement("rect", { className: "topFill", x: "16", y: "16", width: "64", height: "64", key: "square1" }), React.createElement("rect", { className: "topFill", x: "84", y: "16", width: "64", height: "64", key: "square2" }), React.createElement("rect", { className: "topFill", x: "152", y: "16", width: "64", height: "64", key: "square3" }), React.createElement("rect", { className: "topFill", x: "16", y: "84", width: "64", height: "64", key: "square4" }), React.createElement("rect", { className: "topFill", x: "84", y: "84", width: "64", height: "64", key: "square5" }), React.createElement("rect", { className: "topFill", x: "152", y: "84", width: "64", height: "64", key: "square6" }), React.createElement("rect", { className: "topFill", x: "16", y: "152", width: "64", height: "64", key: "square7" }), React.createElement("rect", { className: "topFill", x: "84", y: "152", width: "64", height: "64", key: "square8" }), React.createElement("rect", { className: "topFill", x: "152", y: "152", width: "64", height: "64", key: "square9" })].filter(function (_, index) {
			return props.mask[index];
		})
	);
}

function CubeDiagram(props) {
	return React.createElement(
		"svg",
		{ width: props.size, height: props.size, viewBox: "0 0 232 232", xmlns: "http://www.w3.org/2000/svg", className: 'cubeDiagram' + (props.active ? ' active' : '') },
		React.createElement(TopLines, { mask: props.data.top }),
		React.createElement(LeftLines, { mask: props.data.left }),
		React.createElement(RightLines, { mask: props.data.right }),
		React.createElement(BottomLines, { mask: props.data.bottom }),
		React.createElement(Squares, { mask: props.data.squares }),
		React.createElement(OuterFrame, null)
	);
}

var MultiSelector = function (_React$Component) {
	_inherits(MultiSelector, _React$Component);

	function MultiSelector(props) {
		_classCallCheck(this, MultiSelector);

		return _possibleConstructorReturn(this, (MultiSelector.__proto__ || Object.getPrototypeOf(MultiSelector)).call(this, props));
	}

	_createClass(MultiSelector, [{
		key: "onMultiSelectorClick",
		value: function onMultiSelectorClick(selector, on, event) {
			this.props.onChangeSelection(selector.affected, on);
			event.preventDefault();
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			if (this.props.multiSelectors !== null) {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"table",
						null,
						React.createElement(
							"tbody",
							null,
							this.props.multiSelectors.map(function (selector, index) {
								return React.createElement(
									"tr",
									{ key: index },
									React.createElement(
										"td",
										null,
										selector.name
									),
									React.createElement(
										"td",
										null,
										React.createElement(
											"a",
											{ href: "#", onClick: _this2.onMultiSelectorClick.bind(_this2, selector, true) },
											"All"
										)
									),
									React.createElement(
										"td",
										null,
										React.createElement(
											"a",
											{ href: "#", onClick: _this2.onMultiSelectorClick.bind(_this2, selector, false) },
											"None"
										)
									)
								);
							})
						)
					)
				);
			} else {
				console.error('should not happen 3');
				return React.createElement(
					"div",
					null,
					"LOADING, BITCH"
				);
			}
		}
	}]);

	return MultiSelector;
}(React.Component);

var OllList = function (_React$Component2) {
	_inherits(OllList, _React$Component2);

	function OllList(props) {
		_classCallCheck(this, OllList);

		var _this3 = _possibleConstructorReturn(this, (OllList.__proto__ || Object.getPrototypeOf(OllList)).call(this, props));

		_this3.onOllClick = _this3.onOllClick.bind(_this3);
		_this3.onChangeSelection = _this3.onChangeSelection.bind(_this3);
		return _this3;
	}

	_createClass(OllList, [{
		key: "onOllClick",
		value: function onOllClick(index) {
			var newActiveArray = this.props.active.slice();

			if (this.props.active[index]) {
				newActiveArray[index] = false;
			} else {
				newActiveArray[index] = true;
			}

			this.props.updateActive(newActiveArray);
		}
	}, {
		key: "onChangeSelection",
		value: function onChangeSelection(affected, on) {
			var newActiveArray = this.props.active.slice();

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = affected[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var index = _step.value;

					newActiveArray[index - 1] = on; // affected OLLs are index + 1
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			this.props.updateActive(newActiveArray);
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			if (this.props.appearances !== null) {
				return React.createElement(
					"div",
					{ className: "outerDiv" },
					this.props.appearances.map(function (picture, index) {
						return React.createElement(
							"div",
							{ className: 'ollDiv' + (_this4.props.active[index] ? ' active' : ''), key: index + 1 + '', onClick: _this4.onOllClick.bind(_this4, index) },
							React.createElement(CubeDiagram, { size: "116", data: picture, active: _this4.props.active[index] }),
							React.createElement(
								"strong",
								null,
								"OLL ",
								index + 1 + ''
							)
						);
					}),
					React.createElement(MultiSelector, { onChangeSelection: this.onChangeSelection, multiSelectors: this.props.multiSelectors })
				);
			} else {
				console.error('should not happen 2');
				return React.createElement(
					"div",
					null,
					"LOADING, BITCH"
				);
			}
		}
	}]);

	return OllList;
}(React.Component);

var AlgGenerator = function (_React$Component3) {
	_inherits(AlgGenerator, _React$Component3);

	function AlgGenerator(props) {
		_classCallCheck(this, AlgGenerator);

		var _this5 = _possibleConstructorReturn(this, (AlgGenerator.__proto__ || Object.getPrototypeOf(AlgGenerator)).call(this, props));

		_this5.state = { onBack: false, display: '', ollChoices: _this5.getOllChoices(_this5.props) };

		_this5.updateOnBackCheck = _this5.updateOnBackCheck.bind(_this5);
		_this5.keyDown = _this5.keyDown.bind(_this5);
		_this5.generate = _this5.generate.bind(_this5);
		return _this5;
	}

	_createClass(AlgGenerator, [{
		key: "updateOnBackCheck",
		value: function updateOnBackCheck(event) {
			this.setState({ onBack: event.target.checked });
		}
	}, {
		key: "keyDown",
		value: function keyDown(event) {
			if (event.keyCode === 32) {
				this.generate();
				event.preventDefault();
			}
		}
	}, {
		key: "generate",
		value: function generate() {
			if (this.state.ollChoices.length === 0) {
				return;
			}

			var ollCase = this.state.ollChoices[Math.floor(Math.random() * this.state.ollChoices.length)];

			this.setState({ display: createOll(this.props.oll, ollCase, this.state.onBack) });
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			document.addEventListener('keydown', this.keyDown);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			document.removeEventListener('keydown', this.keyDown);
		}
	}, {
		key: "getOllChoices",
		value: function getOllChoices(props) {
			var ollChoices = [];
			for (var i = 0; i < props.active.length; i++) {
				if (props.active[i]) {
					ollChoices.push(i);
				}
			}

			return ollChoices;
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			this.setState({ ollChoices: getOllChoices(nextProps) });
		}
	}, {
		key: "render",
		value: function render() {
			if (this.props.oll !== null) {
				var belowBox;
				if (this.state.ollChoices.length === 0) {
					belowBox = 'Choose some OLL to get started.';
				} else {
					belowBox = 'Press space to generate an OLL algorithm.';
				}

				return React.createElement(
					"div",
					null,
					React.createElement("h1", { dangerouslySetInnerHTML: { __html: this.state.display } }),
					React.createElement(
						"label",
						null,
						React.createElement("input", { type: "checkbox", onChange: this.updateOnBackCheck, checked: this.state.onBack }),
						" Generate on back"
					),
					React.createElement(
						"p",
						null,
						belowBox
					)
				);
			} else {
				console.error('should not happen 1');
				return React.createElement(
					"div",
					null,
					"LOADING, BITCH"
				);
			}
		}
	}]);

	return AlgGenerator;
}(React.Component);

var OllTrainer = function (_React$Component4) {
	_inherits(OllTrainer, _React$Component4);

	function OllTrainer(props) {
		_classCallCheck(this, OllTrainer);

		var _this6 = _possibleConstructorReturn(this, (OllTrainer.__proto__ || Object.getPrototypeOf(OllTrainer)).call(this, props));

		var activeArray = [];
		for (var i = 0; i < 57; i++) {
			activeArray.push(true);
		}

		_this6.state = { active: activeArray, stage: 'generating algorithms', data: { appearances: null, multiSelectors: null, oll: null }, loaded: false };

		_this6.updateActive = _this6.updateActive.bind(_this6);
		return _this6;
	}

	_createClass(OllTrainer, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this7 = this;

			fetch(this.props.source).then(function (response) {
				return response.json();
			}).then(function (json) {
				return _this7.setState({ data: json, loaded: true });
			});
		}
	}, {
		key: "updateActive",
		value: function updateActive(newActiveArray) {
			this.setState({ active: newActiveArray });
		}
	}, {
		key: "getStageSetter",
		value: function getStageSetter(stage) {
			var _this8 = this;

			return function () {
				return _this8.setState({ stage: stage });
			};
		}
	}, {
		key: "render",
		value: function render() {
			if (!this.state.loaded) {
				return React.createElement(
					"div",
					null,
					"loading!"
				);
			}

			if (this.state.stage === 'choosing oll') {
				return React.createElement(
					"div",
					null,
					React.createElement(OllList, { appearances: this.state.data.appearances, multiSelectors: this.state.data.multiSelectors, active: this.state.active, updateActive: this.updateActive }),
					React.createElement(
						"button",
						{ onClick: this.getStageSetter('generating algorithms') },
						"Back"
					)
				);
			} else if (this.state.stage === 'generating algorithms') {
				return React.createElement(
					"div",
					null,
					React.createElement(AlgGenerator, { oll: this.state.data.oll, active: this.state.active }),
					React.createElement(
						"button",
						{ onClick: this.getStageSetter('choosing oll') },
						"Choose OLL"
					)
				);
			}
		}
	}]);

	return OllTrainer;
}(React.Component);

ReactDOM.render(React.createElement(OllTrainer, { source: "oll-data-min.json" }), document.getElementById('root'));