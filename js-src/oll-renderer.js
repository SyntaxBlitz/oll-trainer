import React from 'react';

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

export default function CubeDiagram (props) {
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