<template>
  <div id='order-confirmation'>
    <h1>Order Confirmation</h1>
    <p>Thank you for <router-link :to="{ name: 'account', params: {} }">your order</router-link></p>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
