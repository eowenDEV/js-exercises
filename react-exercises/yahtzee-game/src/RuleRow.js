import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
	render() {
		const enabled = this.props.score === undefined;
		return (
			<tr
				className={`RuleRow RuleRow-${enabled ? 'active' : 'disabled'}`}
				onClick={enabled ? this.props.doScore : null}
			>
				<td className="RuleRow-name">{this.props.name}</td>
				<td className="RuleRow-score">{enabled ? this.props.description : this.props.score}</td>
			</tr>
		);
	}
}

export default RuleRow;
