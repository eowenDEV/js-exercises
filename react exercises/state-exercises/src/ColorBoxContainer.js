import React, { Component } from 'react';
import './ColorBoxContainer.css';
import ColorBox from './ColorBox';

class ColorBoxContainer extends Component {
	static defaultProps = {
		numBoxes: 18,
		colorPalette: [
			'mintcream',
			'lavender',
			'lavenderblush',
			'seagreen',
			'seashell',
			'skyblue',
			'cornsilk',
			'palegreen',
			'lightblue',
			'lightcoral',
			'lightsteelblue',
			'pink',
			'darkolivegreen',
			'darkseagreen'
		],
		colorPalette2: [ '#29663d', '#7fa970', '#ced3c4', '#d8cce7', '#9791ae' ]
	};
	render() {
		return (
			<div className="ColorBoxContainer">
				{/* {Array.from({ length: this.props.numBoxes }).map(() => (
					<ColorBox colorPalette={this.props.colorPalette} />
				))} */}
				{Array.from({ length: this.props.numBoxes }).map(() => (
					<ColorBox colorPalette={this.props.colorPalette} />
				))}
			</div>
		);
	}
}

export default ColorBoxContainer;
