<template>
    <div class="game-card" @click="handleClick">
        <img
          :id="id"
          :name="name"
          width="150"
          height="150"
          class="game-card__image"
          :src="require(`@/assets/${show ? imageSrc : placeholder}`)"
        />
    </div>
</template>

<script>

export default {
  name: 'GameCard',
  props: {
    imageSrc: String,
    onClick: Function,
    name: String,
    id: Number,
    placeholder: String,
  },
  data: () => ({
    show: false,
  }),
  methods: {
    handleClick(e) {
      this.show = !this.show;
      this.$emit('cardSelected', e.target);
    },
  },
};

</script>

<style scoped>
.game-card__image {
  width: inherit;
}
</style>
