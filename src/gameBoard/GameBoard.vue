<template>
  <div class="GameBoard">
    <ul>
      <!-- <li v-for="image in data" :key="image.id" /> -->
    </ul>
  </div>
</template>

<script>

export default {
  name: 'GameBoard',
  components: {},
  props: {},
  data: () => ({
    cardImages: [
      {
        id: 0,
        path: '../assets/GenZ.jpg',
      },
      {
        id: 1,
        path: '../assets/JustCause3.jpg',
      },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .GameBoard {
    display: flex;
  }
</style>
