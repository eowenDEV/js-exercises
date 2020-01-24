import React, { Component } from 'react'

class Joke extends Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Joke; 