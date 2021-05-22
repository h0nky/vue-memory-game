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
  },
  mutations: {
    updateGameBoard() {},
    updateMatched(state, card) {
      state.matched.push(card);
    },
    updateTemp(state, card) {
      state.temp.push(card);
    },
  },
});
