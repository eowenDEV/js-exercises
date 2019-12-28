import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
	static defaultProps = {
		coin: 0,
		face: [ 'Heads', 'Tails' ],
		src: [
			'https://www.moneymetals.com/images/products/silver-eagle-coin-1-oz-obverse.jpg',
			'https://www.moneymetals.com/images/products/2016-silver-eagle-ounce-reverse.jpg'
		]
	};
	render() {
		return (
			<div className="Coin">
				<img src={this.props.src[this.props.coin]} alt={`Coin Face: ${this.props.face[this.props.coin]}`} />
			</div>
		);
	}
}

export default Coin;
