<template>
    <div class="counter__container">
      {{ 'TIME LEFT' }} : {{ minutes }}:{{ seconds }}
    </div>
</template>

<script>
export default {
  name: 'GameCounter',
  data() {
    return {
      startTime: '',
      timerId: '',
    };
  },
  methods: {
    addLeadingZeros: (value) => `${value}`.padStart(2, '0'),
    handleResetGame() {
      this.$store.commit('finishGame');
    },
  },
  mounted() {
    this.timerId = setInterval(() => {
      if (this.startTime === this.counterValue) {
        clearInterval(this.timerId);
        this.handleResetGame();
      }
      this.startTime = Math.floor(new Date().getTime() / 1000);
    }, 1000);
  },
  computed: {
    seconds() {
      if (!this.$store.state.counter) return this.addLeadingZeros(0);
      return this.addLeadingZeros(Math.floor((this.counterValue - this.startTime) % 60));
    },
    minutes() {
      if (!this.$store.state.counter) return this.addLeadingZeros(0);
      return this.addLeadingZeros(
        Math.floor((this.counterValue - this.startTime) / 60) % 60,
      );
    },
    counterValue() {
      return this.$store.state.counter;
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter__container {
  padding: 16px;
  font-size: 24px;
  color: goldenrod;
  font-weight: bold;
}
</style>
