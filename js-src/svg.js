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

		this.state = {showing: false};

		this.toggleShowing = this.toggleShowing.bind(this);
	}

	onMultiSelectorClick (selector, on, event) {
		this.props.onChangeSelection(selector.affected, on);
		event.preventDefault();
	}

	toggleShowing () {
		this.setState({showing: !this.state.showing});
	}

	render () {
		return (
			<div>
				<div className={'multiSelectorPaneButton' + (this.state.showing ? ' open' : ' collapsed')} onClick={this.toggleShowing}>
					{this.state.showing ? '\u00d7' : '\u00ab'}
				</div>
				<div className={'multiSelectorPane' + (this.state.showing ? ' open' : ' collapsed')}>
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
			</div>
		);
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
		return (
			<div className="outerDiv">
				<p onClick={this.props.switchToAlgGenerator} className="with-pointer">Back</p>
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
	}
}

class AlgGenerator extends React.Component {
	constructor (props) {
		super(props);

		this.state = {ollChoices: this.getOllChoices(this.props)};

		this.keyDown = this.keyDown.bind(this);
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

	generate () {
		if (this.state.ollChoices.length === 0) {
			return;
		}

		var ollCase = this.state.ollChoices[Math.floor(Math.random() * this.state.ollChoices.length)];

		this.props.setLastGenerated(createOll(this.props.oll, ollCase, this.props.onBack));
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
			<div>
				<div dangerouslySetInnerHTML={{__html: this.props.lastGenerated}} className="display"></div>
				<div className="instructions">
					<p onClick={this.generate}>{belowBox}</p>
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
				<div className="helpButton" onClick={this.props.switchToHelp}>
					?
				</div>
			</div>
		);
	}
}

function HelpScreen (props) {
	return (
		<div className="help">
			<div onClick={props.switchToAlgGenerator} className="with-pointer">Back</div>
			<div>
				<h1>Tim's OLL Generator</h1>

				<h2>What is this?</h2>
				<p>
					This website lets you generate a 12-move algorithm that will result in a pre-OLL cube state.
				</p>
				<p>
					You can choose which OLL cases will appear after executing the algorithm. This is particularly useful when you want to challenge your recognition without doing a full solve, or you're training a small subset of OLL and don't want to worry about the algorithms you don't know yet.
				</p>

				<h2>How do I use it?</h2>
				<p>
					Just press the spacebar to generate an algorithm. When you apply this algorithm to a cube in the OLL state (even if it's not completely solved), you'll get a randomly-selected OLL case. Chances are, you won't recognize the OLL case just by looking at the algorithm provided, because the algorithm is chosen randomly from every possible twelve-move algorithm that can get to that state.
				</p>
				<p>
					If you want to make it harder for you to recognize the OLL case prematurely while you're executing the provided algorithm, you can switch the algorithm generator to end with the OLL case on the back of the cube. If you do this, just turn the face you want to train OLL on to be the B face before scrambling.
				</p>
				<p>
					To change the generated OLL cases, click "choose oll" and click any OLL case to toggle whether or not it's activated. There's an expandable menu in the top-right that will let you select/deselect entire batches of cases at once.
				</p>

				<h2>Is there a mobile version?</h2>
				<p>
					Nope! But it's not out of the question for the future.
				</p>

				<h2>Is there a PLL version?</h2>
				<p>
					Nope! But it's not out of the question for the future.
				</p>

				<p>
					By <a href="http://timothyaveni.com/">Timothy J. Aveni</a>. Source code (to be released soon) and artwork under the MIT license.
				</p>
			</div>
			<div onClick={props.switchToAlgGenerator} className="with-pointer">Back</div>
		</div>
	);
}

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
	<OllTrainer source="oll-data-min.json" />,
	document.getElementById('root')
);