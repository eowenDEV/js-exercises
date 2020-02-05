import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
	static defaultProps = {
		nrows: 5,
		ncols: 5,
		chanceLightStartsOn: 0.25
	};
	constructor(props) {
		super(props);
		this.state = {
			board: this.createBoard(),
			hasWon: false
		};
		this.flipCellsAround = this.flipCellsAround.bind(this);
	}

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
	createBoard() {
		let board = [];
		// create array-of-arrays of true/false values
		for (let y = 0; y < this.props.nrows; y++) {
			let row = [];
			for (let x = 0; x < this.props.ncols; x++) {
				// decide if cell is on/off
				row.push(Math.random() < this.props.chanceLightStartsOn);
			}
			board.push(row);
		}
		return board;
	}

	/** Handle changing a cell: update board & determine if winner */
	flipCellsAround(coord) {
		let { ncols, nrows } = this.props;
		let board = this.state.board;
		let [ y, x ] = coord.split('-').map(Number);

		function flipCell(y, x) {
			// if this coord is actually on board, flip it
			if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
				board[y][x] = !board[y][x];
			}
		}

		flipCell(y, x); // flip initial cell
		flipCell(y, x - 1); // flip left cell
		flipCell(y, x + 1); // flip right cell
		flipCell(y + 1, x); // flip cell above
		flipCell(y - 1, x); // flip cell below

		// win when every cell is turned off
		let hasWon = board.every((row) =>
			row.every((cell) => {
				return cell === false;
			})
		);

		this.setState({ board: board, hasWon: hasWon });
	}
	restartGame() {
		this.setState({
			board: this.createBoard(),
			hasWon: false
		});
	}
	/** Render game board or winning message. */
	render() {
		// make table board
		const tableBoard = [];
		for (let y = 0; y < this.props.nrows; y++) {
			let row = [];
			for (let x = 0; x < this.props.ncols; x++) {
				let coord = `${y}-${x}`;
				row.push(
					<Cell
						key={coord}
						coord={coord}
						isLit={this.state.board[y][x]}
						flipCellsAroundMe={this.flipCellsAround}
					/>
				);
			}
			console.log(row);
			tableBoard.push(<tr key={`row${y}`}>{row}</tr>);
		}

		// if game won, hide board and show winning message
		let gameState;
		this.state.hasWon
			? (gameState = <h2>Winner!</h2>)
			: (gameState = (
					<div>
						<table className="Board-table">
							<tbody>{tableBoard}</tbody>
						</table>
					</div>
				));
		return (
			<div className="Board">
				<h1>Lights Out Game</h1>
				{gameState}
				<form onSubmit={this.restartGame}>
					<button>New Game</button>
				</form>
			</div>
		);
	}
}

export default Board;
