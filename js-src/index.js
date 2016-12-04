import React from 'react';
import ReactDOM from 'react-dom';

class NameInput extends React.Component {
	constructor (props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit (event) {
		this.props.onSubmit(this.props.value);
		event.preventDefault();
	}

	handleChange (event) {
		this.props.onChange(event.target.value);
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<input value={this.props.value} onChange={this.handleChange} />
			</form>
		);
	}
}

/*class LiveDisplay extends React.Component {
	render () {
		return (
			<h2>{this.props.value}</h2>
		);
	}
}*/

function LiveDisplay (props) {
	return (
		<div>
		{[<h2 key="0">{props.value}</h2>, <h3 key="1">{props.value.toUpperCase()}</h3>]}
		</div>
	);
}

class NameForm extends React.Component {
	constructor (props) {
		super(props);

		this.state = {value: this.props.value};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit () {
		alert(this.state.value);
	}

	onChange (newValue) {
		this.setState({value: newValue});
	}

	render () {
		return (
			<div>
				<NameInput value={this.state.value} onSubmit={this.onSubmit} onChange={this.onChange} />
				<LiveDisplay value={this.state.value} />
			</div>
		);
	}
}

ReactDOM.render(
	<NameForm value="George" />,
	document.getElementById('root')
);