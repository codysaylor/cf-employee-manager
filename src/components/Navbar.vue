<template lang="html">
  <nav>
    <div class="nav-wrapper black">
      <div class="container">
        <router-link to="/" class="brand-logo">CustomFit</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/dashboard">Command Center</router-link></li>
          <li><router-link to="/shop">Shop</router-link></li>
          <li><router-link to="/cart">Cart ({{ cartQuantity }})</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'cart',
  data () {
    return {
      cartQuantity: null
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('cart').get()
      .then(querySnapshot => {
        this.cartQuantity = doc.data().cartQuantity
      })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    addToCart () {
      this.cartQuantity += 1
    }
  }
}
</script>

<style>
  .black {
    background: #212121 !important;
  }
</style>
