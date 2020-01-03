import React, { Component } from 'react';

class Box extends Component {
	constructor(props) {
		super(props);
		this.handleRemoveBox = this.handleRemoveBox.bind(this);
	}
	handleRemoveBox() {
		this.props.remove(this.props.id);
	}
	render() {
		return (
			<div
				className="Box"
				style={{
					textAlign: 'left',
					width: `${this.props.width}em`
				}}
			>
				<div
					style={{
						height: `${this.props.height}em`,
						width: `${this.props.width}em`,
						backgroundColor: this.props.color
					}}
				/>
				<button onClick={this.handleRemoveBox}>X</button>
			</div>
		);
	}
}

export default Box;
