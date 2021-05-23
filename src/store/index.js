import Vue from 'vue';
import Vuex from 'vuex';
import gameCards from '../cards.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameBoard: gameCards,
    matched: [],
    score: 0,
    highestScore: 0,
    moves: 0,
    temp: [],
    counter: 0,
  },
  mutations: {
    updateGameBoard() {},
    updateMatched(state, card) {
      state.matched.push(card);
    },
    updateTemp(state, id) {
      const element = state.gameBoard.find((card) => card.id === +id);
      state.temp.push(element);
    },
    // updateCardState(state, id) {
    //   const elementIndex = state.gameBoard.findIndex((card) => card.id === +id);
    //   const element = state.gameBoard.find((card) => card.id === +id);
    //   const updatedElement = { ...element, show: true };
    //   state.gameBoard.splice(elementIndex, 1, updatedElement);
    // },
  },
});
