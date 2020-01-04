import React, { Component } from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskList: []
		};
		this.addTask = this.addTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.updateTask = this.updateTask.bind(this);
	}
	addTask(newTask) {
		this.setState({
			taskList: [ ...this.state.taskList, newTask ]
		});
	}
	removeTask(taskId) {
		this.setState({
			taskList: this.state.taskList.filter((todo) => todo.id !== taskId)
		});
	}
	updateTask(taskId, updatedTask) {
		console.log('start update');
		const updatedTaskList = this.state.taskList.map((todo) => {
			if (todo.id === taskId) {
				// update task
				return { ...todo, task: updatedTask };
			}
			return todo;
		});
		// update state
		this.setState({ taskList: updatedTaskList });
		console.log('updated');
	}
	render() {
		const newTaskList = this.state.taskList.map((todo) => {
			return (
				<ToDo
					key={todo.id}
					id={todo.id}
					taskTitle={todo.task}
					remove={this.removeTask}
					update={this.updateTask}
				/>
			);
		});
		return (
			<div>
				<h1>To Do List</h1>
				<ul>{newTaskList}</ul>
				<NewToDoForm add={this.addTask} />
			</div>
		);
	}
}

export default ToDoList;
