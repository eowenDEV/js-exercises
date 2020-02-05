import React, { Component } from 'react';
import './ColorBox.css';
import { choice } from './helpers';

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { color: choice(this.props.colorPalette) };
		this.handleClick = this.handleClick.bind(this);
	}
	changeColor() {
		// choose new color excluding current color
		const newColorPalette = this.props.colorPalette.filter((color) => color !== this.state.color);
		const newColor = choice(newColorPalette);
		// change state to new color
		this.setState({ color: newColor });
		//console.log(`clicked ${newColor} vs ${this.state.color}`);
	}
	handleClick() {
		this.changeColor();
	}
	render() {
		return (
			<div className="ColorBox" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>
				<h4>{this.state.color}</h4>
			</div>
		);
	}
}

export default ColorBox;
