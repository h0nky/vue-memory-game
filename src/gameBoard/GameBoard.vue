<template>
  <div class="game-board">
    <ul>
      <li v-for="image in cardImages" :key="image.id">
        <GameCard :imageSrc="image.path" />
      </li>
    </ul>
  </div>
</template>

<script>
import GameCard from '../gameCard/GameCard.vue';
import cardImages from '../cards.json';

export default {
  name: 'GameBoard',
  components: {
    GameCard,
  },
  props: {},
  data: () => ({
    cardImages,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-board {
  max-width: 600px;
}
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
