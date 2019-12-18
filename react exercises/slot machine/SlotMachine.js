class SlotMachine extends React.Component {
    render() {
        const s1 = this.props.s1,
            s2 = this.props.s2,
            s3 = this.props.s3;
        let msg;
        if(s1 === s2 && s2 === s3) {
            msg = "You Win!"
        } else {
            msg = "You Lose";
        }
        return (
            <div>
                <h3>Result:</h3>
                <p>{s1} {s2} {s3}</p>
                <p>{msg}</p>
            </div>
        )
    }
}