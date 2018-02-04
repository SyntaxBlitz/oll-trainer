import React from 'react';
import createAlgorithm from './generate-algorithm';

export default class AlgGenerator extends React.Component {
	constructor (props) {
		super(props);

		this.state = {ollChoices: this.getOllChoices(this.props)};

		this.keyDown = this.keyDown.bind(this);
		this.touchStart = this.touchStart.bind(this);
		this.mouseDown = this.mouseDown.bind(this);
		this.generate = this.generate.bind(this);
		this.changeToTop = this.changeToTop.bind(this);
		this.changeToBack = this.changeToBack.bind(this);
	}

	keyDown (event) {
		if (event.keyCode === 32) {
			this.generate();
			event.preventDefault();
		}
	}

	touchStart (event) {
		this.generate();
		event.preventDefault();
	}

	mouseDown (event) {
		this.generate();
		event.preventDefault();
	}

	generate () {
		if (this.state.ollChoices.length === 0) {
			return; 
		}

		var ollCase = this.state.ollChoices[Math.floor(Math.random() * this.state.ollChoices.length)];

		this.props.setLastGenerated(createAlgorithm(this.props.oll, ollCase, this.props.onBack));
	}

	componentDidMount () {
		document.addEventListener('keydown', this.keyDown);
		document.body.classList.add('alg-generator');

		if (this.props.lastGenerated === '') {
			this.generate();
		}
	}

	componentWillUnmount () {
		document.removeEventListener('keydown', this.keyDown);
		document.body.classList.remove('alg-generator');
	}

	getOllChoices (props) {
		var ollChoices = [];
		for (let i = 0; i < props.active.length; i++) {
			if (props.active[i]) {
				ollChoices.push(i);
			}
		}

		return ollChoices;
	}

	componentWillReceiveProps (nextProps) {
		this.setState({ollChoices: this.getOllChoices(nextProps)});
	}

	changeToTop (event) {
		this.props.setOnBack(false);
		event.preventDefault();
	}

	changeToBack (event) {
		this.props.setOnBack(true);
		event.preventDefault();
	}

	render () {
		var belowBox;
		if (this.state.ollChoices.length === 0) {
			belowBox = 'Choose some OLL to get started.';
		} else {
			belowBox = 'Press space or click here to generate an OLL case.';
		}

		return (
			<div className="main-display-container">
				<div className="navbar">
					<p onClick={this.props.switchToOll} className="with-pointer">choose oll</p>
						<p>
						generate on&nbsp;
						<a href="#" onClick={this.changeToTop} className={'backSelector' + (this.props.onBack ? '' : ' active')}>
						top
						</a>
						&nbsp;|&nbsp;
						<a href="#" onClick={this.changeToBack} className={'backSelector' + (this.props.onBack ? ' active' : '')}>
						back
						</a>
					</p>
				</div>
				<div className="display-container" onMouseDown={this.mouseDown} onTouchStart={this.touchStart}>
					<div dangerouslySetInnerHTML={{__html: this.props.lastGenerated}} className="display" />
					<div className="instructions">
						<p onClick={this.generate}>{belowBox}</p>
					</div>
                </div>
				<div className="helpButton" onClick={this.props.switchToHelp}>
					?
				</div>
			</div>
		);
	}
}