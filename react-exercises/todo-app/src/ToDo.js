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
		let classComplete = this.props.completed ? 'ToDo-task completed' : 'ToDo-task';
		if (this.state.editMode) {
			result = (
				<div>
					<form className="ToDo-edit-form" onSubmit={this.handleUpdate}>
						<input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
						<button>SAVE</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div>
					<li className={classComplete} onClick={this.handleToggleCompletion}>
						{this.props.taskTitle}
					</li>
				</div>
			);
		}
		return (
			<div className="ToDo">
				{result}
				<div className="ToDo-buttons">
					<button name="editTask" onClick={this.toggleForm}>
						<i class="fas fa-pen" />
					</button>
					<button name="deleteTask" onClick={this.handleRemove}>
						<i class="fas fa-trash" />
					</button>
				</div>
			</div>
		);
	}
}

export default ToDo;
