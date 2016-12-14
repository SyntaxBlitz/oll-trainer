import React from 'react';

export default class MultiSelector extends React.Component {
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