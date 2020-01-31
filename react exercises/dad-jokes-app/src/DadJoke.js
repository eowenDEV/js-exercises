import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import './DadJoke.css';
const API_URL = 'https://icanhazdadjoke.com/';

class DadJoke extends Component {
	static defaultProps = {
		numInitialJokes: 20
	};
	constructor(props) {
		super(props);
		this.state = { jokeList: [] };
		this.getJokes = this.getJokes.bind(this);
		this.handleVote = this.handleVote.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.seenJokes = new Set(this.state.jokeList.map((j) => j.text));
		console.log(this.seenJokes);
	}

	componentDidMount() {
		this.getJokes();
	}

	async getJokes() {
		let jokes = [];
		while (jokes.length < this.props.numInitialJokes) {
			// load jokes from https://icanhazdadjoke.com/
			let res = await axios.get(API_URL, { headers: { Accept: 'application/json' } });
			let newJoke = res.data;
			// only add unique jokes
			// if (jokes.id.indexOf(newJoke.id) != -1) {
			// 	console.log(`duplicate joke: ${newJoke.joke}`);
			// }
			//console.log(`joke: ${Array.from(jokes).length}`);
			const jokeFound = jokes.some((j) => {
				return j.id === res.data.id;
			});
			console.log(`jokeFound ${jokeFound} ${newJoke.joke}`);
			if (!jokeFound) {
				jokes.push({ id: newJoke.id, text: newJoke.joke, votes: 0 });
			}
		}
		// update state with new joke
		this.setState({
			jokeList: jokes
		});
	}
	handleVote(id, change) {
		this.setState((st) => ({
			jokeList: st.jokeList.map((j) => (j.id === id ? { ...j, votes: j.votes + change } : j))
		}));
	}
	handleClick() {
		this.getJokes();
	}
	render() {
		// render all jokes
		let showJokes = this.state.jokeList.map((j) => {
			return (
				<Joke
					text={j.text}
					key={j.id}
					votes={j.votes}
					upvote={() => this.handleVote(j.id, 1)}
					downvote={() => this.handleVote(j.id, -1)}
				/>
			);
		});
		return (
			<div className="DadJoke">
				<div className="DadJoke-sidebar">
					<h1 className="DadJoke-title">
						<span>Dad</span> Jokes
					</h1>
					<img
						src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
						alt="Laughing Emoji"
					/>
					<button className="DadJoke-newjokes" onClick={this.handleClick}>
						New Jokes
					</button>
				</div>
				<div className="DadJoke-jokelist">{showJokes}</div>
			</div>
		);
	}
}

export default DadJoke;
