import React, { Component } from 'react';
import './BoxList.css';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: []
		};
		this.createBox = this.createBox.bind(this);
		this.removeBox = this.removeBox.bind(this);
	}
	createBox(newBox) {
		this.setState({
			boxes: [ ...this.state.boxes, newBox ]
		});
	}
	removeBox(id) {
		this.setState({
			boxes: this.state.boxes.filter((b) => b.id !== id)
		});
	}
	render() {
		const boxes = this.state.boxes.map((b) => (
			<Box
				key={b.id}
				id={b.id}
				height={b.height}
				width={b.height}
				color={b.color}
				remove={this.removeBox}
			/>
		));
		return (
			<div className="BoxList">
				<h1>Box Maker</h1>
				<NewBoxForm create={this.createBox} />
				<hr />
				<div className="BoxList-boxes">{boxes}</div>
			</div>
		);
	}
}

export default BoxList;
