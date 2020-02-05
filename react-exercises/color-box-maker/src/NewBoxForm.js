import React, { Component } from 'react';
import './NewBoxForm.css';
import uuid from 'uuid/v4';

class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = { height: '', width: '', color: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(evt) {
		evt.preventDefault();
		// new Box with uuid
		const newBox = { ...this.state, id: uuid() };
		// send state info to parent
		this.props.create(newBox);
		// clear state values
		this.setState({
			height: '',
			width: '',
			color: ''
		});
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	render() {
		return (
			<div className="NewBoxForm">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="boxHeight">Box Height: </label>
						<input
							id="boxHeight"
							type="number"
							name="height"
							value={this.state.height}
							onChange={this.handleChange}
							class="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="boxWidth">Box Width: </label>
						<input
							id="boxWidth"
							type="number"
							name="width"
							value={this.state.width}
							onChange={this.handleChange}
							class="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="boxColor">Box Background Color: </label>
						<input
							id="boxColor"
							type="text"
							name="color"
							value={this.state.color}
							onChange={this.handleChange}
							class="form-control"
						/>
					</div>
					<button className="btn btn-primary">Add New Box!</button>
				</form>
			</div>
		);
	}
}

export default NewBoxForm;
