import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card.js';
import './Deck.css';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = { deckID: null, drawnDeck: [], emptyDeck: false };
		this.getCard = this.getCard.bind(this);
	}
	async componentDidMount() {
		// fetch deck ID
		let newDeck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
		this.setState({ deckID: newDeck.data.deck_id });
	}
	async getCard() {
		try {
			// make request with deck id
			let getDeck = await axios.get(`${API_BASE_URL}/${this.state.deckID}/draw/`);

			// check if cards are remaining
			if (!getDeck.data.success) {
				this.setState({ emptyDeck: true });
				console.log(`success? ${getDeck.data.success}`);
				throw new Error('No cards remaining');
			}

			// set state with new card info from API
			let getCard = getDeck.data.cards[0];
			let newCard = {
				name: `${getCard.value} of ${getCard.suit}`,
				image: getCard.images.png,
				code: getCard.code
			};
			this.setState((st) => ({
				drawnDeck: [ ...st.drawnDeck, newCard ]
			}));
		} catch (err) {
			alert(err);
		}
	}
	render() {
		// loop through drawn cards
		let cards = this.state.drawnDeck.map((card) => {
			return <Card imageURL={card.image} name={card.name} key={card.code} />;
		});
		// if empty deck, change GET CARD button
		let cardState;
		this.state.emptyDeck
			? (cardState = <p>No Cards Remaining</p>)
			: (cardState = (
					<button className="Deck-btn" onClick={this.getCard}>
						Get Card!
					</button>
				));
		return (
			<div className="Deck">
				<h1 className="Deck-title">Card Dealer</h1>
				<h3 className="Deck-title subtitle">A little demo made with React</h3>
				{cardState}
				<div className="Deck-cardstack">{cards}</div>
			</div>
		);
	}
}

export default Deck;
