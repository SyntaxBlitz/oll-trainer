import React from 'react';

export default function HelpScreen (props) {
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
					By <a href="http://timothyaveni.com/">Timothy J. Aveni</a>. <a href="https://github.com/SyntaxBlitz/oll-trainer">Source code</a> and artwork under the MIT license.
				</p>
			</div>
			<div onClick={props.switchToAlgGenerator} className="with-pointer">Back</div>
		</div>
	);
}
