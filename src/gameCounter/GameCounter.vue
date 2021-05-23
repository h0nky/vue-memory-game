<template>
    <div class="counter__container">
      {{ minutes }}:{{ seconds }}
    </div>
</template>

<script>
export default {
  name: 'GameCounter',
  props: {
    date: {
      type: Number,
    },
  },
  methods: {
    addLeadingZeros: (value) => `${value}`.padStart(2, '0'),
  },
  mounted() {
    setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  computed: {
    seconds() {
      if (!this.$store.state.counter) return this.addLeadingZeros(0);
      return this.addLeadingZeros((this.counterValue - this.now) % 60);
    },
    minutes() {
      if (!this.$store.state.counter) return this.addLeadingZeros(0);
      return this.addLeadingZeros(Math.trunc((this.counterValue - this.now) / 60) % 60);
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
}
</style>
