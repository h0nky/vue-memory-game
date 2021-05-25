  <template>
  <div class="HomePage">
    <GameCounter />
    <GameBoard />
    <div class="button-container">
      <button
        :disabled="isButtonDisabled"
        class="start-game-button" @click="handleStartGame()">Start</button>
      <button class="reset-game-button" @click="handleResetGame()">Reset</button>
    </div>
  </div>
</template>

<script>
import GameBoard from '../gameBoard/GameBoard.vue';
import GameCounter from '../gameCounter/GameCounter.vue';

export default {
  name: 'HomePage',
  components: {
    GameBoard,
    GameCounter,
  },
  methods: {
    handleStartGame() {
      this.$store.commit('startGame');
    },
    handleResetGame() {
      this.$store.commit('resetGame');
    },
  },
  computed: {
    counterValue() {
      return this.$store.state.counter;
    },
    isButtonDisabled() {
      return !!this.$store.state.counter;
    },
  },
};
</script>

<style scoped>
.HomePage {
  background-color:#eeeee4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button-container {
  padding: 16px;
  display: flex;
}
</style>
