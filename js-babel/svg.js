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

		var _this = _possibleConstructorReturn(this, (MultiSelector.__proto__ || Object.getPrototypeOf(MultiSelector)).call(this, props));

		_this.state = { showing: false };

		_this.toggleShowing = _this.toggleShowing.bind(_this);
		return _this;
	}

	_createClass(MultiSelector, [{
		key: "onMultiSelectorClick",
		value: function onMultiSelectorClick(selector, on, event) {
			this.props.onChangeSelection(selector.affected, on);
			event.preventDefault();
		}
	}, {
		key: "toggleShowing",
		value: function toggleShowing() {
			this.setState({ showing: !this.state.showing });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: 'multiSelectorPaneButton' + (this.state.showing ? ' open' : ' collapsed'), onClick: this.toggleShowing },
					this.state.showing ? "\xD7" : "\xAB"
				),
				React.createElement(
					"div",
					{ className: 'multiSelectorPane' + (this.state.showing ? ' open' : ' collapsed') },
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
				)
			);
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

			return React.createElement(
				"div",
				{ className: "outerDiv" },
				React.createElement(
					"p",
					{ onClick: this.props.switchToAlgGenerator, className: "with-pointer" },
					"Back"
				),
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
		}
	}]);

	return OllList;
}(React.Component);

var AlgGenerator = function (_React$Component3) {
	_inherits(AlgGenerator, _React$Component3);

	function AlgGenerator(props) {
		_classCallCheck(this, AlgGenerator);

		var _this5 = _possibleConstructorReturn(this, (AlgGenerator.__proto__ || Object.getPrototypeOf(AlgGenerator)).call(this, props));

		_this5.state = { ollChoices: _this5.getOllChoices(_this5.props) };

		_this5.keyDown = _this5.keyDown.bind(_this5);
		_this5.generate = _this5.generate.bind(_this5);
		_this5.changeToTop = _this5.changeToTop.bind(_this5);
		_this5.changeToBack = _this5.changeToBack.bind(_this5);
		return _this5;
	}

	_createClass(AlgGenerator, [{
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

			this.props.setLastGenerated(createOll(this.props.oll, ollCase, this.props.onBack));
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			document.addEventListener('keydown', this.keyDown);
			document.body.classList.add('alg-generator');

			if (this.props.lastGenerated === '') {
				this.generate();
			}
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			document.removeEventListener('keydown', this.keyDown);
			document.body.classList.remove('alg-generator');
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
			this.setState({ ollChoices: this.getOllChoices(nextProps) });
		}
	}, {
		key: "changeToTop",
		value: function changeToTop(event) {
			this.props.setOnBack(false);
			event.preventDefault();
		}
	}, {
		key: "changeToBack",
		value: function changeToBack(event) {
			this.props.setOnBack(true);
			event.preventDefault();
		}
	}, {
		key: "render",
		value: function render() {
			var belowBox;
			if (this.state.ollChoices.length === 0) {
				belowBox = 'Choose some OLL to get started.';
			} else {
				belowBox = 'Press space or click here to generate an OLL case.';
			}

			return React.createElement(
				"div",
				null,
				React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.lastGenerated }, className: "display" }),
				React.createElement(
					"div",
					{ className: "instructions" },
					React.createElement(
						"p",
						{ onClick: this.generate },
						belowBox
					),
					React.createElement(
						"p",
						{ onClick: this.props.switchToOll, className: "with-pointer" },
						"choose oll"
					),
					React.createElement(
						"p",
						null,
						"generate on\xA0",
						React.createElement(
							"a",
							{ href: "#", onClick: this.changeToTop, className: 'backSelector' + (this.props.onBack ? '' : ' active') },
							"top"
						),
						"\xA0|\xA0",
						React.createElement(
							"a",
							{ href: "#", onClick: this.changeToBack, className: 'backSelector' + (this.props.onBack ? ' active' : '') },
							"back"
						)
					)
				),
				React.createElement(
					"div",
					{ className: "helpButton", onClick: this.props.switchToHelp },
					"?"
				)
			);
		}
	}]);

	return AlgGenerator;
}(React.Component);

function HelpScreen(props) {
	return React.createElement(
		"div",
		{ className: "help" },
		React.createElement(
			"div",
			{ onClick: props.switchToAlgGenerator, className: "with-pointer" },
			"Back"
		),
		React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Tim's OLL Generator"
			),
			React.createElement(
				"h2",
				null,
				"What is this?"
			),
			React.createElement(
				"p",
				null,
				"This website lets you generate a 12-move algorithm that will result in a pre-OLL cube state."
			),
			React.createElement(
				"p",
				null,
				"You can choose which OLL cases will appear after executing the algorithm. This is particularly useful when you want to challenge your recognition without doing a full solve, or you're training a small subset of OLL and don't want to worry about the algorithms you don't know yet."
			),
			React.createElement(
				"h2",
				null,
				"How do I use it?"
			),
			React.createElement(
				"p",
				null,
				"Just press the spacebar to generate an algorithm. When you apply this algorithm to a cube in the OLL state (even if it's not completely solved), you'll get a randomly-selected OLL case. Chances are, you won't recognize the OLL case just by looking at the algorithm provided, because the algorithm is chosen randomly from every possible twelve-move algorithm that can get to that state."
			),
			React.createElement(
				"p",
				null,
				"If you want to make it harder for you to recognize the OLL case prematurely while you're executing the provided algorithm, you can switch the algorithm generator to end with the OLL case on the back of the cube. If you do this, just turn the face you want to train OLL on to be the B face before scrambling."
			),
			React.createElement(
				"p",
				null,
				"To change the generated OLL cases, click \"choose oll\" and click any OLL case to toggle whether or not it's activated. There's an expandable menu in the top-right that will let you select/deselect entire batches of cases at once."
			),
			React.createElement(
				"h2",
				null,
				"Is there a mobile version?"
			),
			React.createElement(
				"p",
				null,
				"Nope! But it's not out of the question for the future."
			),
			React.createElement(
				"h2",
				null,
				"Is there a PLL version?"
			),
			React.createElement(
				"p",
				null,
				"Nope! But it's not out of the question for the future."
			),
			React.createElement(
				"p",
				null,
				"By ",
				React.createElement(
					"a",
					{ href: "http://timothyaveni.com/" },
					"Timothy J. Aveni"
				),
				". Source code (to be released soon) and artwork under the MIT license."
			)
		),
		React.createElement(
			"div",
			{ onClick: props.switchToAlgGenerator, className: "with-pointer" },
			"Back"
		)
	);
}

var OllTrainer = function (_React$Component4) {
	_inherits(OllTrainer, _React$Component4);

	function OllTrainer(props) {
		_classCallCheck(this, OllTrainer);

		var _this6 = _possibleConstructorReturn(this, (OllTrainer.__proto__ || Object.getPrototypeOf(OllTrainer)).call(this, props));

		var activeArray = [];
		for (var i = 0; i < 57; i++) {
			activeArray.push(true);
		}

		_this6.state = {
			active: activeArray,
			onBack: false,

			lastGenerated: '',
			stage: 'generating algorithms',
			data: {
				appearances: null,
				multiSelectors: null,
				oll: null },
			loaded: false };

		_this6.updateActive = _this6.updateActive.bind(_this6);
		_this6.setOnBack = _this6.setOnBack.bind(_this6);
		_this6.setLastGenerated = _this6.setLastGenerated.bind(_this6);
		_this6.switchToOll = _this6.switchToOll.bind(_this6);
		_this6.switchToAlgGenerator = _this6.switchToAlgGenerator.bind(_this6);
		_this6.switchToHelp = _this6.switchToHelp.bind(_this6);
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
			this.setLastGenerated('');
		}
	}, {
		key: "switchToOll",
		value: function switchToOll(stage) {
			this.setState({ stage: 'choosing oll' });
		}
	}, {
		key: "switchToAlgGenerator",
		value: function switchToAlgGenerator(stage) {
			this.setState({ stage: 'generating algorithms' });
		}
	}, {
		key: "switchToHelp",
		value: function switchToHelp(stage) {
			this.setState({ stage: 'help' });
		}
	}, {
		key: "setOnBack",
		value: function setOnBack(onBack) {
			this.setState({ onBack: onBack });
		}
	}, {
		key: "setLastGenerated",
		value: function setLastGenerated(lastGenerated) {
			this.setState({ lastGenerated: lastGenerated });
		}
	}, {
		key: "render",
		value: function render() {
			if (!this.state.loaded) {
				return React.createElement(
					"div",
					{ className: "loadingMessage" },
					"Loading!"
				);
			}

			if (this.state.stage === 'choosing oll') {
				return React.createElement(
					"div",
					null,
					React.createElement(OllList, {
						appearances: this.state.data.appearances,
						multiSelectors: this.state.data.multiSelectors,
						active: this.state.active,
						updateActive: this.updateActive,
						switchToAlgGenerator: this.switchToAlgGenerator
					})
				);
			} else if (this.state.stage === 'generating algorithms') {
				return React.createElement(
					"div",
					null,
					React.createElement(AlgGenerator, {
						oll: this.state.data.oll,
						active: this.state.active,
						lastGenerated: this.state.lastGenerated,
						setLastGenerated: this.setLastGenerated,
						onBack: this.state.onBack,
						setOnBack: this.setOnBack,
						switchToOll: this.switchToOll,
						switchToHelp: this.switchToHelp
					})
				);
			} else if (this.state.stage === 'help') {
				return React.createElement(
					"div",
					null,
					React.createElement(HelpScreen, { switchToAlgGenerator: this.switchToAlgGenerator })
				);
			}
		}
	}]);

	return OllTrainer;
}(React.Component);

ReactDOM.render(React.createElement(OllTrainer, { source: "oll-data-min.json" }), document.getElementById('root'));