import React from 'react';
import ReactDOM from 'react-dom';

import OllList from './oll-list';
import AlgGenerator from './alg-generator';
import HelpScreen from './help-screen';

class OllTrainer extends React.Component {
	constructor (props) {
		super(props);

		var activeArray = [];
		for (let i = 0; i < 57; i++) {
			activeArray.push(true);
		}

		this.state = {
			active: activeArray,
			onBack: false,

			lastGenerated: '',
			stage: 'generating algorithms',
			data: {
				appearances: null,
				multiSelectors: null,
				oll: null},
			loaded: false};

		this.updateActive = this.updateActive.bind(this);
		this.setOnBack = this.setOnBack.bind(this);
		this.setLastGenerated = this.setLastGenerated.bind(this);
		this.switchToOll = this.switchToOll.bind(this);
		this.switchToAlgGenerator = this.switchToAlgGenerator.bind(this);
		this.switchToHelp = this.switchToHelp.bind(this);
	}

	componentDidMount () {
		fetch(this.props.source)
			.then((response) => response.json())
			.then((json) => this.setState({data: json, loaded: true}));
	}

	updateActive (newActiveArray) {
		this.setState({active: newActiveArray});
		this.setLastGenerated('');
	}

	switchToOll (stage) {
		this.setState({stage: 'choosing oll'});
	}

	switchToAlgGenerator (stage) {
		this.setState({stage: 'generating algorithms'});
	}

	switchToHelp (stage) {
		this.setState({stage: 'help'});
	}

	setOnBack (onBack) {
		this.setState({onBack: onBack});
	}

	setLastGenerated (lastGenerated) {
		this.setState({lastGenerated: lastGenerated});
	}

	render () {
		if (!this.state.loaded) {
			return (
				<div className="loadingMessage">Loading!</div>
			);
		}

		if (this.state.stage === 'choosing oll') {
			return (
				<div>
					<OllList
						appearances={this.state.data.appearances}
						multiSelectors={this.state.data.multiSelectors}
						active={this.state.active}
						updateActive={this.updateActive}
						switchToAlgGenerator={this.switchToAlgGenerator}
						/>
				</div>
			);
		} else if (this.state.stage === 'generating algorithms') {
			return (
				<div>
					<AlgGenerator
						oll={this.state.data.oll}
						active={this.state.active}
						lastGenerated={this.state.lastGenerated}
						setLastGenerated={this.setLastGenerated}
						onBack={this.state.onBack}
						setOnBack={this.setOnBack}
						switchToOll={this.switchToOll}
						switchToHelp={this.switchToHelp}
						/>
				</div>
			);
		} else if (this.state.stage === 'help') {
			return (
				<div>
					<HelpScreen switchToAlgGenerator={this.switchToAlgGenerator} />
				</div>
			);
		}
	}
}

ReactDOM.render(
	<OllTrainer source="resources/oll-data-min.json" />,
	document.getElementById('root')
);