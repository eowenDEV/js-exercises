import React, {Component} from 'react';
import './Pokecard.css';
//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num) => {
    if(num.toString().length === 1) {
        num = `00${num}`;
    } else if (num.toString().length === 2){
        num = `0${num}`;
    }
    return num;
};

class Pokecard extends Component {
    // Shows a single pokemon with name, image, type
    render() {
        const {id, name, type, exp} = this.props;
        const imgSrc = `${POKE_API}${padToThree(id)}.png`;
        return (
            <div className="Pokecard">
                <h1>{name}</h1>
                <img src={imgSrc} alt={name}/>
                <p>Type: {type}</p>
                <p>EXP: {exp}</p> 
            </div>
        )
    }
}

export default Pokecard;