import Vue from 'vue';
import Vuex from 'vuex';
import gameCards from '../cards.json';
import { shuffle } from '../utils';

Vue.use(Vuex);

const getInitialState = () => ({
  gameBoard: gameCards,
  score: 0,
  highScore: 0,
  counter: 0,
});

const mutations = {
  resetGame(state) {
    Object.assign(state, getInitialState());
  },
  startGame(state) {
    const shuffledCards = shuffle(gameCards);
    state.gameBoard = [...shuffledCards];
    state.counter = Math.floor((new Date()).getTime() / 1000) + 60;
  },
  finishGame(state) {
    const newState = getInitialState();
    if (state.highScore < state.score) {
      newState.highScore = state.score;
    } else {
      newState.highScore = state.highScore;
    }
    Object.assign(state, newState);
    console.log(state);
  },
  removeMatchedCards(state) {
    const newGameBoard = state.gameBoard.map((card) => {
      if (card.show) {
        return {};
      }
      return card;
    });
    state.gameBoard = newGameBoard;
  },
  resetUnmatchedCards(state) {
    const unmatched = state.gameBoard.map((card) => {
      if (card.show) {
        return {
          ...card,
          show: false,
        };
      }
      return card;
    });
    state.gameBoard = unmatched;
  },
  updateCardState(state, id) {
    const elementIndex = state.gameBoard.findIndex((card) => card.id === +id);
    const element = state.gameBoard.find((card) => card.id === +id);
    const updatedElement = { ...element, show: true };
    state.gameBoard.splice(elementIndex, 1, updatedElement);
  },
  updateScore(state) {
    const newScore = state.score + 1;
    state.score = newScore;
  },
};

export default new Vuex.Store({
  state: getInitialState(),
  mutations,
  getters: {},
});
