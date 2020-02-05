import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
	// show ball with number
	render() {
		return <div className="Ball">{this.props.num}</div>;
	}
}

export default Ball;
