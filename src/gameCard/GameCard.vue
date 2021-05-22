<template>
    <div class="game-card" v-on:click="handleClick">
        <img
          width="150"
          height="150"
          class="game-card__image"
          :src="require(`@/assets/${imageSrc}`)"
        />
    </div>
</template>

<script>

export default {
  name: ' GameCard',
  props: {
    imageSrc: String,
    onClick: Function,
  },
  methods: {
    handleClick: () => {
      console.log('Click!');
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-card__image {
  width: inherit;
}
</style>
