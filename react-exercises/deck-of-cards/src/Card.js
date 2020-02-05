import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	constructor(props) {
		super(props);
		let angle = Math.ceil(Math.random() * 40) - 20;
		let xPos = Math.ceil(Math.random() * 40) - 20;
		let yPos = Math.ceil(Math.random() * 40) - 20;
		this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
	}
	render() {
		return (
			<img
				style={{ transform: this._transform }}
				className="Card"
				src={this.props.imageURL}
				alt={this.props.name}
			/>
		);
	}
}

export default Card;
