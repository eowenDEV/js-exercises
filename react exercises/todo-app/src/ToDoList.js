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
		this.toggleCompletion = this.toggleCompletion.bind(this);
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
		const updatedTaskList = this.state.taskList.map((todo) => {
			if (todo.id === taskId) {
				// update task
				return { ...todo, task: updatedTask };
			}
			return todo;
		});
		// update state
		this.setState({ taskList: updatedTaskList });
	}
	toggleCompletion(taskId) {
		const updatedTaskList = this.state.taskList.map((todo) => {
			if (todo.id === taskId) {
				// update task as complete
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		// update state
		this.setState({ taskList: updatedTaskList });
	}
	render() {
		const newTaskList = this.state.taskList.map((todo) => {
			return (
				<ToDo
					key={todo.id}
					id={todo.id}
					taskTitle={todo.task}
					completed={todo.completed}
					removeTask={this.removeTask}
					updateTask={this.updateTask}
					completeTask={this.toggleCompletion}
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
