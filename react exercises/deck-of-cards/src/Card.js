import React, { Component } from 'react';

class Card extends Component {
	render() {
		return <img src={this.props.imageURL} alt={this.props.name} />;
	}
}

export default Card;
