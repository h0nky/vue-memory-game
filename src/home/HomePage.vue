  <template>
  <div class="HomePage">
    <GameBoard />
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
  width: 100vw;
  height: 100vh;
}
</style>
