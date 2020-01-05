import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
	constructor(props) {
		super(props);
		this.state = { editMode: false, task: '' };
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleToggleCompletion = this.handleToggleCompletion.bind(this);
	}
	handleRemove(evt) {
		// trigger on parent
		this.props.removeTask(this.props.id);
	}
	toggleForm() {
		this.setState({ editMode: !this.state.editMode });
	}
	handleUpdate(evt) {
		evt.preventDefault();
		//send new task info to parent
		this.props.updateTask(this.props.id, this.state.task);
		this.toggleForm();
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleToggleCompletion(evt) {
		// trigger on parent
		this.props.completeTask(this.props.id);
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
					<li
						className={this.props.completed ? 'completed' : ''}
						onClick={this.handleToggleCompletion}
					>
						{this.props.taskTitle}
					</li>
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
