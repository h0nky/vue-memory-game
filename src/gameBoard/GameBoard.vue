<template>
  <div class="game-board">
    <ul>
      <li v-for="card in gameCards" :key="card.id">
        <div v-if="card.show">
          <GameCard :imageSrc="card.path" @toggle-card="handleClick" />
        </div>
        <div v-else>
          <GameCard imageSrc="AvalancheLogo.jpg" @toggle-card="handleClick" />
        </div>
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
  computed: {
    gameCards() {
      return this.$store.state.gameBoard;
    },
  },
  methods: {
    handleClick: (value) => {
      console.log('Card is Clicked!', value);
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
  }
</style>
