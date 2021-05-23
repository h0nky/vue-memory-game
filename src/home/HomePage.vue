  <template>
  <div class="HomePage">
    <GameCounter />
    <GameBoard />
    <div class="button-container">
      <button class="start-game-button" @click="startGame()">Start</button>
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
}
</style>
