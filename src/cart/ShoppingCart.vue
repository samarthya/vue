<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{ robot.heads.title }}
          </td>
          <td class="cost">
            {{ robot.cost | currency('$') }}
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="saleItems">You saved money on these items.</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{ robot.heads.title }}
          </td>
          <td class="cost">
            {{ robot.cost | currency('$') }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import currencyFilter from '../shared/currency-filter';

/**
 * Shopping cart VUE component.
 */
export default {
  name: 'Cart',
  filters: {
    currency: currencyFilter,
  },
  computed: {
    cart() {
      /** Access the cart from stae. */
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      // return this.$store.getters.cartSaleItems;
      return this.$store.getters['robots/cartSaleItems'];
    },
  },
};
</script>

<style scoped>
td,
th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
.saleItems {
  margin-top: 50px;
  font-size: 18px;
  color: green;
}
</style>
