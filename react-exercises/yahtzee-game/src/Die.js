import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	static defaultProps = {
		diceName: [ 'one', 'two', 'three', 'four', 'five', 'six' ],
		val: 5
	};
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick(this.props.idx);
	}

	render() {
		const { diceName, val, locked, rolling, disabled } = this.props;
		let diceClass = `Die fas fa-dice-${diceName[val - 1]} fa-5x `;
		if (locked) diceClass += 'Die-locked';
		if (rolling) diceClass += 'Die-rolling';
		return <i className={diceClass} onClick={this.handleClick} disabled={disabled} />;
	}
}

export default Die;
