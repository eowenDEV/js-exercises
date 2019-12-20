//import React from 'react';
//import ReactDOM from 'react-dom';
import foods from './foods'
import {choice, remove} from './helpers'

// Get array of food
const food = foods();
console.log(food);
// Randomly get an item from food array
const randomFood = choice(food);
// Log conversation message for random food
console.log(`I'd like one ${randomFood}, please`);
console.log(`Here you go: ${randomFood}`);
console.log('Delicious! May I have another?');
// Remove food from array of food
const foodEaten = remove(food, randomFood);
// Log message showing how many foods remain
console.log(`I'm sorry, we're all out. We have ${foodEaten} other foods left`);
console.log(food);
