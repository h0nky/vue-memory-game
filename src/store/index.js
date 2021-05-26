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
  updateMoves(state) {
    const newMove = state.moves + 1;
    state.moves = newMove;
  },
};

export default new Vuex.Store({
  state: getInitialState(),
  mutations,
  getters: {},
});
