import React, { Component } from 'react';
import './CoinFlipper.css';
import Coin from './Coin';

class CoinFlipper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentFace: null,
			numFlips: 0,
			numHeads: 0,
			numTails: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}
	flipCoin() {
		// choose random number 0 or 1 to show heads/tails
		const rand = Math.floor(Math.random() * 2);
		// update state
		this.setState((curState) => {
			return {
				// show new face
				currentFace: rand,
				// increment flip counter
				numFlips: curState.numFlips + 1,
				// increment heads/tails counter
				numHeads: curState.numHeads + (rand === 0 ? 1 : 0),
				numTails: curState.numTails + (rand === 1 ? 1 : 0)
			};
		});
	}
	handleClick() {
		this.flipCoin();
	}
	render() {
		return (
			<div className="CoinFlipper">
				<h1>Let's flip a coin!</h1>
				{this.state.currentFace === null ? '' : <Coin coin={this.state.currentFace} />}
				<button onClick={this.handleClick}>Flip Me!</button>
				<p>{`Out of ${this.state.numFlips} flips, there has been ${this.state.numHeads} heads and ${this.state
					.numTails} tails`}</p>
			</div>
		);
	}
}
export default CoinFlipper;
