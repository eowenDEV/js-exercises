class SlotMachine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        let msg = "";
        console.log(winner);
        if(winner) {
            msg = "You Win!"
        } else {
            msg = "You Lose";
        }
        return (
            <div className="SlotMachine">
                <h3>Result:</h3>
                <p className="slot-results">{s1} {s2} {s3}</p>
                <p className={winner ? "win" : "lose"}>{msg}</p>
            </div>
        )
    }
}