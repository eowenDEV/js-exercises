import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewToDoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		// send state to parent
		const newTask = { ...this.state, id: uuid() };
		this.props.add(newTask);
		// reset state values
		this.setState({ task: '' });
	}
	render() {
		return (
			<div className="NewToDoForm">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="task">New Task: </label>
					<input
						type="text"
						placeholder="some task..."
						id="task"
						name="task"
						value={this.state.task}
						onChange={this.handleChange}
					/>
					<button>Add</button>
				</form>
			</div>
		);
	}
}

export default NewToDoForm;
