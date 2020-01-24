import React, { Component } from 'react'
import axios from "axios";
import Joke from './Joke';
const API_URL = "https://icanhazdadjoke.com/";


class DadJoke extends Component {
    static defaultProps = {
        numInitialJokes: 10
    };
    constructor(props) {
        super(props);
        this.state = {jokeList: []};
        this.getJokes = this.getJokes.bind(this);
    }

    componentDidMount() {
        this.getJokes();
    }
    
    async getJokes() {        
        let jokes = [];
        while(jokes.length < this.props.numInitialJokes){ 
            // load jokes from https://icanhazdadjoke.com/
            let res = await axios.get(API_URL, {headers: {Accept: "application/json"}});
            let newJoke = res.data;
            jokes.push(newJoke);
        }
        //console.log(`jokes array: ${Object.keys(jokes).length}`);  
        // update state with new joke
        this.setState({
            jokeList: jokes
        });

    }
    
    render() {
        // render all jokes
        let showJokes = this.state.jokeList.map(j => {
            return <Joke text={j.joke} key={j.id} />
        });
        return (
            <div>
                <h1>Dad Joke</h1>
                {showJokes}
            </div>
        )
    }
}

export default DadJoke; 