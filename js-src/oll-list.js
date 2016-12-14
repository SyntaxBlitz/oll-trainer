import React from 'react';
import CubeDiagram from './oll-renderer';
import MultiSelector from './multi-selector';

export default class OllList extends React.Component {
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