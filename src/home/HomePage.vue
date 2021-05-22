  <template>
  <div class="HomePage">
    <GameBoard />
    <!-- <button class="start-game-button" @click="startGame()">Start</button> -->
  </div>
</template>

<script>
import GameBoard from '../gameBoard/GameBoard.vue';

export default {
  name: 'HomePage',
  components: {
    GameBoard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HomePage {
  background-color:#eeeee4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
