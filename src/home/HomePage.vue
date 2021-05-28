  <template>
  <div class="home-page">
    <div class="home-page__game-info">
      <div class="home-page__score">
        {{ 'HIGHEST SCORE' }} : {{ highScore }}
      </div>
      <div class="home-page__score">
        {{ 'SCORE' }} : {{ scoreValue }}
      </div>
      <GameCounter />
    </div>
    <div v-if="!isButtonDisabled">
      <div class="placeholder">
        {{ 'PUSH START BUTTON' }}
      </div>
    </div>
    <div v-else>
      <GameBoard />
    </div>
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
    scoreValue() {
      return this.$store.state.score;
    },
    highScore() {
      return this.$store.state.highScore;
    },
    isButtonDisabled() {
      return !!this.$store.state.counter;
    },
  },
};
</script>

<style scoped>
.home-page {
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
.home-page__game-info {
  display: flex;
  align-items: center;
}
.home-page__score {
  font-size: 24px;
  color: tomato;
  font-weight: bold;
  padding: 16px;
}
button {
  margin: 16px;
  width: 100px;
  height: 30px;
}
.placeholder {
  font-size: 36px;
  color: tomato;
  font-weight: bold;
  padding: 16px;
}
</style>
