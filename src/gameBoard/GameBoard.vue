<template>
  <div class="game-board">
    <ul>
      <li v-for="card in gameCards" :key="card.id">
          <GameCard
            :id="card.id"
            :name="card.name"
            :imageSrc="card.path"
            :show="card.show"
            :placeholder="card.placeholder"
            v-on:cardSelected="flipCard"
          />
      </li>
    </ul>
  </div>
</template>

<script>
import GameCard from '../gameCard/GameCard.vue';

export default {
  name: 'GameBoard',
  components: {
    GameCard,
  },
  props: {},
  data: () => ({
    selectedCards: [],
  }),
  computed: {
    gameCards() {
      return this.$store.state.gameBoard;
    },
  },
  methods: {
    flipCard(value) {
      this.$store.commit('updateCardState', value.id);
      this.selectedCards.push({ id: value.id, name: value.name });

      const BOUND = 2;
      const cards = this.selectedCards.length;

      if (cards === BOUND) {
        if (this.selectedCards[0].name === this.selectedCards[1].name) {
          this.cardsMatch();
        } else {
          this.cardsUnmatch();
        }
      }
    },
    cardsMatch() {
      console.log('MATCH!');
      setTimeout(() => {
        this.$store.commit('removeMatchedCards');
      }, 1000);
      this.updateScore();
      this.updateMoves();
      this.resetSelectedCards();
    },
    cardsUnmatch() {
      setTimeout(() => {
        this.$store.commit('resetUnmatchedCards');
      }, 2000);
      this.updateMoves();
      this.resetSelectedCards();
    },
    updateMoves() {
      console.log('UPDATE MOVES!');
      this.$store.commit('updateMoves');
    },
    updateScore() {
      this.$store.commit('updateScore');
    },
    resetSelectedCards() {
      this.selectedCards.length = 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-board {
  max-width: 680px;
  border: 4px solid #2c3e50;
  padding: 8px 4px 4px;
}
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  margin: 8px;
  min-width: 150px;
  min-height: 155.56px;
}
</style>
