<template>
  <div id="app">
    Root Foo: {{ rootFoo }} <br/>
    Robots Foo: {{ robotsFoo }} <br/>
    Users Foo: {{ usersFoo }} <br/>
    <br/>
    Root's Getter Foo : {{rootGetterFoo}} <br/>
    Robots's Getter Foo : {{robotsGetterFoo}} <br/>
    Users's Getter Foo : {{usersGetterFoo}} <br/>
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{ name: 'Home'}" class="nav-link" exact>
             <img src="./assets/build-a-bot-logo.png" alt="" class="logo">&nbsp; Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Build'}" class="nav-link" exact>
              Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link to="/cart" class="nav-link" exact>
              Cart
            </router-link>
            <div class="cart-items">
              {{ cart.length }}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
      <main>
        <!-- <HomePage/> -->
        <!-- <robot-builder/> -->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app',
  computed: {
    rootGetterFoo() {
      return this.$store.getters.foo;
    },
    robotsGetterFoo() {
      return this.$store.getters['robots/foo'];
    },
    usersGetterFoo() {
      return this.$store.getters['users/foo'];
      /**
       * Since no users/ module namespace use the root
       */
    },
    cart() {
      return this.$store.state.robots.cart;
    },
    ...mapState({ rootFoo: 'foo' }),
    robotsFoo() {
      return this.$store.state.robots.foo;
    },
    usersFoo() {
      return this.$store.state.users.foo;
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.router-link-inactive {
  color: grey;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  background-color: grey;
  padding: 30px;
  width: 100px;
  min-height: 300px;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
