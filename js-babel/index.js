'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameInput = function (_React$Component) {
	_inherits(NameInput, _React$Component);

	function NameInput(props) {
		_classCallCheck(this, NameInput);

		var _this = _possibleConstructorReturn(this, (NameInput.__proto__ || Object.getPrototypeOf(NameInput)).call(this, props));

		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(NameInput, [{
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			this.props.onSubmit(this.props.value);
			event.preventDefault();
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.props.onChange(event.target.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				{ onSubmit: this.handleSubmit },
				_react2.default.createElement('input', { value: this.props.value, onChange: this.handleChange })
			);
		}
	}]);

	return NameInput;
}(_react2.default.Component);

/*class LiveDisplay extends React.Component {
	render () {
		return (
			<h2>{this.props.value}</h2>
		);
	}
}*/

function LiveDisplay(props) {
	return _react2.default.createElement(
		'div',
		null,
		[_react2.default.createElement(
			'h2',
			{ key: '0' },
			props.value
		), _react2.default.createElement(
			'h3',
			{ key: '1' },
			props.value.toUpperCase()
		)]
	);
}

var NameForm = function (_React$Component2) {
	_inherits(NameForm, _React$Component2);

	function NameForm(props) {
		_classCallCheck(this, NameForm);

		var _this2 = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

		_this2.state = { value: _this2.props.value };

		_this2.onSubmit = _this2.onSubmit.bind(_this2);
		_this2.onChange = _this2.onChange.bind(_this2);
		return _this2;
	}

	_createClass(NameForm, [{
		key: 'onSubmit',
		value: function onSubmit() {
			alert(this.state.value);
		}
	}, {
		key: 'onChange',
		value: function onChange(newValue) {
			this.setState({ value: newValue });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(NameInput, { value: this.state.value, onSubmit: this.onSubmit, onChange: this.onChange }),
				_react2.default.createElement(LiveDisplay, { value: this.state.value })
			);
		}
	}]);

	return NameForm;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(NameForm, { value: 'George' }), document.getElementById('root'));