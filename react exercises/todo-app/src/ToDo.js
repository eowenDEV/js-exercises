import React, { Component } from 'react';

class ToDo extends Component {
	constructor(props) {
		super(props);
		this.state = { editMode: false, task: '' };
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	handleRemove(evt) {
		if (evt.target.name === 'deleteTask') this.props.remove(this.props.id);
	}
	toggleForm() {
		this.setState({ editMode: !this.state.editMode });
	}
	handleUpdate(evt) {
		evt.preventDefault();
		//send new task info to parent
		this.props.update(this.props.id, this.state.task);
		this.toggleForm();
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	render() {
		let result;
		if (this.state.editMode) {
			result = (
				<div>
					<form onSubmit={this.handleUpdate}>
						<input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div>
					<li>{this.props.taskTitle}</li>
				</div>
			);
		}
		return (
			<div>
				{result}
				<button name="editTask" onClick={this.toggleForm}>
					Edit
				</button>
				<button name="deleteTask" onClick={this.handleRemove}>
					Delete
				</button>
			</div>
		);
	}
}

export default ToDo;
