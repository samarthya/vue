<template>
  <div v-if="availableParts" class="content">
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.heads.src"/>
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
            <img :src="selectedRobot.torsos.src"/>
            <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.bases.src"/>
          </div>
        </div>
      </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart()"> Add to cart </button>
    </div>
    <div class="top-row">
      <div class="robot-name">
        <!-- v-once -->
        {{ selectedRobot.heads.title }}
      </div>
      <!-- Binding PARTS and position -->
      <part-selector
        :parts="availableParts.heads"
        v-on:partSelected="part => selectedRobot.heads=part"
        position="top"/>
    </div>
    <div class="middle-row">
      <part-selector
        :parts="availableParts.arms"
        v-on:partSelected="part => selectedRobot.leftArm=part" position="left"/>
      <part-selector
        position="center"
        :parts="availableParts.torsos"
        v-on:partSelected="part => selectedRobot.torsos=part"/>
      <part-selector
        position="right"
        :parts="availableParts.arms"
        v-on:partSelected="part => selectedRobot.rightArm=part"/>
    </div>
    <div class="bottom-row">
      <part-selector
        position="bottom"
        :parts="availableParts.bases"
        v-on:partSelected="part => selectedRobot.bases=part"/>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex';
import CollapsibleSection from '../shared/CollapsibleSection.vue';
import PartSelector from './PartsSelector.vue';


export default {
  name: 'RobotBuilder',
  created() {
    // this.$store.dispatch('robots/getParts');
    this.getParts();
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      /* eslint no-alert: 0 */
      /* eslint no-restricted-globals: 0 */
      const response =
        confirm(' You have not added your robot to your cart, are you sure you want to leave?');
      next(response);
    }
  },
  components: { PartSelector, CollapsibleSection },
  data() {
    return {
      addedToCart: false,
      selectedRobot: {
        heads: {},
        torsos: {},
        leftArm: {},
        rightArm: {},
        bases: {},
      },
    };
  },
  computed: {
    // selectedRobot() {
    // },
    availableParts() {
      return this.$store.state.robots.parts;
    },
  },
  methods: {
    ...mapActions('robots', ['getParts', 'addRobotToCart']),
    addToCart() {
      const robot = this.selectedRobot;
      // console.log(JSON.stringify(this.selectedRobot));
      const cost = robot.heads.cost +
          robot.leftArm.cost +
          robot.rightArm.cost +
          robot.bases.cost +
          robot.torsos.cost;
      this.addRobotToCart(Object.assign({}, robot, { cost }))
        .then(() => this.$router.push('/cart'));
      // this.$store
      //   .dispatch('robots/addRobotToCart', Object.assign({}, robot, { cost }));
      this.addedToCart = true;
    },
  },
};
</script>

<style scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}

.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}

.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  text-shadow: 1em;
  text-decoration-line: underline;
  color:blue;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
