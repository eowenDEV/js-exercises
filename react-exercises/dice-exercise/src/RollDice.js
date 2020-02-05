import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDie extends Component {
	static defaultProps = {
		sides: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};
	constructor(props) {
		super(props);
		this.state = { die1: 'one', die2: 'one', rolling: false };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		// pick random number for dice
		const numDie1 = Math.floor(Math.random() * this.props.sides.length);
		const numDie2 = Math.floor(Math.random() * this.props.sides.length);
		// set rolling to true
		this.setState({
			die1: this.props.sides[numDie1],
			die2: this.props.sides[numDie2],
			rolling: true
		});
		// reset rolling to false
		this.change = setTimeout(() => {
			this.setState({ rolling: false });
		}, 2000);
	}
	render() {
		return (
			<div className="RollDice">
				<h1>Roll Dice</h1>
				<div className="RollDice-box">
					<Die face={this.state.die1} roll={this.state.rolling} />
					<Die face={this.state.die2} roll={this.state.rolling} />
				</div>
				<button className="RollDice-button" onClick={this.handleClick} disabled={this.state.rolling}>
					{this.state.rolling ? 'Rolling Dice..' : 'Go!'}
				</button>
			</div>
		);
	}
}

export default RollDie;
