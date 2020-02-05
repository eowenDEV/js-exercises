/* Exercise 1: Display random mood */
function getMood() { 
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random()*moods.length)];
}

class JSXDemo extends React.Component {
    render() { 
        return (
            <div>
                <h1>My Current Mood is: {getMood()}</h1>               
            </div>
        );
    }
}

//ReactDOM.render(<JSXDemo />, document.getElementById('root'));

/* Exercise 2: Display random number. If number is 7, say congrats */
function getNum() { 
    return Math.floor(Math.random()*10)+1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg =
                <h2>CONGRATS YOU WIN!</h2>
        } else { 
            msg = <p>Sorry You Lose!</p>
         }
        return (
            <div>
                <h1>Your number is {num}</h1>
                {/* <p>{num === 7 ? 'Lucky Winner!' : 'Sorry, Try Again!'}</p> */}
                {msg}
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));