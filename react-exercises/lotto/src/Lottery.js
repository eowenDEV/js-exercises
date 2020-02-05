import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
	static defaultProps = {
		title: 'Lotto',
		numBalls: 6,
		maxNum: 40
	};
	constructor(props) {
		super(props);
		this.state = { numbers: new Array(this.props.numBalls).fill(null) };
		this.handleClick = this.handleClick.bind(this);
	}
	generateNumbers() {
		// set state to new array of numbers
		this.setState((curState) => ({
			numbers: curState.numbers.map((n) => Math.floor(Math.random() * this.props.maxNum) + 1)
		}));
	}
	handleClick() {
		this.generateNumbers();
	}
	render() {
		return (
			<div className="Lottery">
				<h1>{this.props.title}</h1>
				<div className="Lottery-balls">{this.state.numbers.map((n) => <Ball num={n} />)}</div>
				<button onClick={this.handleClick}>Generate</button>
			</div>
		);
	}
}

export default Lottery;
