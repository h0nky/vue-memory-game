import Vue from 'vue';
import Vuex from 'vuex';
import gameCards from '../cards.json';
import { shuffle } from '../utils';

Vue.use(Vuex);

const getInitialState = () => ({
  gameBoard: gameCards,
  matched: [],
  score: 0,
  highestScore: 0,
  moves: 0,
  temp: [],
  counter: 0,
});

const mutations = {
  resetGame(state) {
    console.log('RESET GAME!');
    Object.assign(state, getInitialState());
  },
  startGame(state) {
    console.log('START GAME');
    const shuffledCards = shuffle(gameCards);
    state.gameBoard = [...shuffledCards];
    state.counter = Math.trunc((new Date()).getTime() / 1000) + 60;
    console.log('NEW STATE', state);
  },
  updateGameBoard() {},
  updateMatched(state, card) {
    state.matched.push(card);
  },
  updateTemp(state, id) {
    const element = state.gameBoard.find((card) => card.id === +id);
    state.temp.push(element);
  },
  updateCardState(state, id) {
    const elementIndex = state.gameBoard.findIndex((card) => card.id === +id);
    const element = state.gameBoard.find((card) => card.id === +id);
    const updatedElement = { ...element, show: true };
    state.gameBoard.splice(elementIndex, 1, updatedElement);
  },
};

export default new Vuex.Store({
  state: getInitialState(),
  mutations,
  getters: {},
});
