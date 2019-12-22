import React, { Component } from 'react';

class Clicker extends Component {
	constructor(props) {
		super(props);
		this.state = { num: 1, winner: false };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		// pick a random number between 1-10
		let rand = Math.floor(Math.random() * 10) + 1;
		// update state with new number
		this.setState({ num: rand });
		// if number is 7, update state with winner = true
		if (rand === 7) {
			this.setState({ winner: true });
		}
	}
	render() {
		return (
			<div>
				<h2>Clicker Game</h2>
				<h1 id="clickMessage">Your Number is: {this.state.num}</h1>
				{/* show button until winning situation, display winning message */}
				{this.state.winner ? <h2>YOU WIN!</h2> : <button onClick={this.handleClick}>Click Me!</button>}
			</div>
		);
	}
}

export default Clicker;
