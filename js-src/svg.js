function OuterFrame () {
	return (
		<g>
			<rect x="12" y="12" width="208" height="4" />
			<rect x="12" y="80" width="208" height="4" />
			<rect x="12" y="148" width="208" height="4" />
			<rect x="12" y="216" width="208" height="4" />

			<rect x="12" y="12" width="4" height="208" />
			<rect x="80" y="12" width="4" height="208" />
			<rect x="148" y="12" width="4" height="208" />
			<rect x="216" y="12" width="4" height="208" />
		</g>
	);
}

function TopLines (props) {
	return (
		<g>
			{[
				<rect x="20" y="0" width="56" height="4" key="top1" />,
				<rect x="88" y="0" width="56" height="4" key="top2" />,
				<rect x="156" y="0" width="56" height="4" key="top3" />
			].filter((_, index) => props.mask[index])}
		</g>
	);
}

function LeftLines (props) {
	return (
		<g>
			{[
				<rect x="0" y="20" width="4" height="56" key="left1" />,
				<rect x="0" y="88" width="4" height="56" key="left2" />,
				<rect x="0" y="156" width="4" height="56" key="left3" />
			].filter((_, index) => props.mask[index])}
		</g>
	);
}

function RightLines (props) {
	return (
		<g>
			{[
				<rect x="228" y="20" width="4" height="56" key="right1" />,
				<rect x="228" y="88" width="4" height="56" key="right2" />,
				<rect x="228" y="156" width="4" height="56" key="right3" />
			].filter((_, index) => props.mask[index])}
		</g>
	);
}

function BottomLines (props) {
	return (
		<g>
			{[
				<rect x="20" y="228" width="56" height="4" key="bottom1" />,
				<rect x="88" y="228" width="56" height="4" key="bottom2" />,
				<rect x="156" y="228" width="56" height="4" key="bottom3" />
			].filter((_, index) => props.mask[index])}
		</g>
	);
}

function Squares (props) {
	return (
		<g>
			{[
				<rect className="topFill" x="16" y="16" width="64" height="64" key="square1" />,
				<rect className="topFill" x="84" y="16" width="64" height="64" key="square2" />,
				<rect className="topFill" x="152" y="16" width="64" height="64" key="square3" />,

				<rect className="topFill" x="16" y="84" width="64" height="64" key="square4" />,
				<rect className="topFill" x="84" y="84" width="64" height="64" key="square5" />,
				<rect className="topFill" x="152" y="84" width="64" height="64" key="square6" />,

				<rect className="topFill" x="16" y="152" width="64" height="64" key="square7" />,
				<rect className="topFill" x="84" y="152" width="64" height="64" key="square8" />,
				<rect className="topFill" x="152" y="152" width="64" height="64" key="square9" />
			].filter((_, index) => props.mask[index])}
		</g>
	);
}

function CubeDiagram (props) {
	return (
		<svg width={props.size} height={props.size} viewBox="0 0 232 232" xmlns="http://www.w3.org/2000/svg" className={'cubeDiagram' + (props.active ? ' active' : '')}>
			<TopLines mask={props.data.top} />
			<LeftLines mask={props.data.left} />
			<RightLines mask={props.data.right} />
			<BottomLines mask={props.data.bottom} />

			<Squares mask={props.data.squares} />

			<OuterFrame />
		</svg>
	);
}

class MultiSelector extends React.Component {
	constructor (props) {
		super(props);
	}

	onMultiSelectorClick (selector, on, event) {
		this.props.onChangeSelection(selector.affected, on);
		event.preventDefault();
	}

	render () {
		if (this.props.multiSelectors !== null) {
			return (
				<div>
					<table>
						<tbody>
							{
								this.props.multiSelectors.map(
									(selector, index) =>
										<tr key={index}>
											<td>{selector.name}</td>
											<td><a href="#" onClick={this.onMultiSelectorClick.bind(this, selector, true)}>All</a></td>
											<td><a href="#" onClick={this.onMultiSelectorClick.bind(this, selector, false)}>None</a></td>
										</tr>
								)
							}
						</tbody>
					</table>
				</div>
			);
		} else {
			console.error('should not happen 3');
			return (
				<div>
					LOADING, BITCH
				</div>
			);
		}
	}
}

class OllList extends React.Component {
	constructor (props) {
		super(props);

		this.onOllClick = this.onOllClick.bind(this);
		this.onChangeSelection = this.onChangeSelection.bind(this);
	}

	onOllClick (index) {
		var newActiveArray = this.props.active.slice();

		if (this.props.active[index]) {
			newActiveArray[index] = false;
		} else {
			newActiveArray[index] = true;
		}
		
		this.props.updateActive(newActiveArray);
	}

	onChangeSelection (affected, on) {
		var newActiveArray = this.props.active.slice();

		for (let index of affected) {
			newActiveArray[index - 1] = on;	// affected OLLs are index + 1
		}

		this.props.updateActive(newActiveArray);
	}

	render () {
		if (this.props.appearances !== null) {
			return (
				<div className="outerDiv">
					{
						this.props.appearances.map(
							(picture, index) =>
								<div className={'ollDiv' + (this.props.active[index] ? ' active' : '')} key={(index + 1) + ''} onClick={this.onOllClick.bind(this, index)}>
									<CubeDiagram size="116" data={picture} active={this.props.active[index]} />
									<strong>OLL {(index + 1) + ''}</strong>
								</div>
						)
					}
					<MultiSelector onChangeSelection={this.onChangeSelection} multiSelectors={this.props.multiSelectors} />
				</div>
			);
		} else {
			console.error('should not happen 2');
			return (
				<div>
					LOADING, BITCH
				</div>
			);
		}
	}
}

class AlgGenerator extends React.Component {
	constructor (props) {
		super(props);

		this.state = {onBack: false, display: '', ollChoices: this.getOllChoices(this.props)};

		this.updateOnBackCheck = this.updateOnBackCheck.bind(this);
		this.keyDown = this.keyDown.bind(this);
		this.generate = this.generate.bind(this);
	}

	updateOnBackCheck (event) {
		this.setState({onBack: event.target.checked});
	}

	keyDown (event) {
		if (event.keyCode === 32) {
			this.generate();
			event.preventDefault();
		}
	}

	generate () {
		if (this.state.ollChoices.length === 0) {
			return;
		}

		var ollCase = this.state.ollChoices[Math.floor(Math.random() * this.state.ollChoices.length)];

		this.setState({display: createOll(this.props.oll, ollCase, this.state.onBack)});
	}

	componentDidMount () {
		document.addEventListener('keydown', this.keyDown);
	}

	componentWillUnmount () {
		document.removeEventListener('keydown', this.keyDown);
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
		this.setState({ollChoices: getOllChoices(nextProps)});
	}

	render () {
		if (this.props.oll !== null) {
			var belowBox;
			if (this.state.ollChoices.length === 0) {
				belowBox = 'Choose some OLL to get started.';
			} else {
				belowBox = 'Press space to generate an OLL algorithm.';
			}

			return (
				<div>
					<h1 dangerouslySetInnerHTML={{__html: this.state.display}}></h1>
					<label><input type="checkbox" onChange={this.updateOnBackCheck} checked={this.state.onBack} /> Generate on back</label>
					<p>{belowBox}</p>
				</div>
			);
		} else {
			console.error('should not happen 1');
			return (
				<div>
					LOADING, BITCH
				</div>
			);
		}
	}
}

class OllTrainer extends React.Component {
	constructor (props) {
		super(props);

		var activeArray = [];
		for (let i = 0; i < 57; i++) {
			activeArray.push(true);
		}

		this.state = {active: activeArray, stage: 'generating algorithms', data: {appearances: null, multiSelectors: null, oll: null}, loaded: false};

		this.updateActive = this.updateActive.bind(this);
	}

	componentDidMount () {
		fetch(this.props.source)
			.then((response) => response.json())
			.then((json) => this.setState({data: json, loaded: true}));
	}

	updateActive (newActiveArray) {
		this.setState({active: newActiveArray});
	}

	getStageSetter (stage) {
		return () => this.setState({stage: stage});
	}

	render () {
		if (!this.state.loaded) {
			return (
				<div>loading!</div>
			);
		}

		if (this.state.stage === 'choosing oll') {
			return (
				<div>
					<OllList appearances={this.state.data.appearances} multiSelectors={this.state.data.multiSelectors} active={this.state.active} updateActive={this.updateActive} />
					<button onClick={this.getStageSetter('generating algorithms')}>Back</button>
				</div>
			);
		} else if (this.state.stage === 'generating algorithms') {
			return (
				<div>
					<AlgGenerator oll={this.state.data.oll} active={this.state.active} />
					<button onClick={this.getStageSetter('choosing oll')}>Choose OLL</button>
				</div>
			);
		}
	}
}

ReactDOM.render(
	<OllTrainer source="oll-data-min.json" />,
	document.getElementById('root')
);