<template lang="html">
  <div id="cart">
    <h1>Cart</h1>
    <table class="striped responsive-table">
      <thead>
        <tr>
          <th colspan="2">Product</th>
          <th>Item Name</th>
          <th>Item Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cart" v-bind:key="product.sku">
          <td><img :src="'http://www.lehighoutfitters.com/on/demandware.static/-/Sites-Master-Product-catalog-en/default/dw4ddd6207/images/'+ product.sku +'_LARGE.jpg'" style="width: 50px;" alt=""></td>
          <td>{{ product.sku }}</td>
          <td>Eclair</td>
          <td>$0.87</td>
          <td>X</td>
        </tr>
      </tbody>
    </table>
    <input type="text" name="discount" placeholder="Discount" value="">
    <input type="text" name="discount" placeholder="Name" value="">
    <input type="text" name="discount" placeholder="Phone" value="">
    <vue-google-autocomplete id="map" classname="form-control" placeholder="Ship Address" v-on:placechanged="getAddressData">
    </vue-google-autocomplete>
    <form>
      <input type="checkbox" id="bill" checked> <label for="bill">Billing is the same</label>
      <form>
        <p>
          <input name="group1" type="radio" id="ship" />
          <label for="ship">Free Ship</label>
        </p>
        <p>
          <input name="group1" type="radio" id="ship2" />
          <label for="ship2">Fast Ship</label>
        </p>
        <p>
          <input name="group1" type="radio" id="ship3"  />
          <label for="ship3">Overnight Ship</label>
        </p>
      </form>
    </form>
    <CheckoutCard/>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import CheckoutCard from './CheckoutCard'
import db from './firebaseInit'
export default {
  name: 'cart',
  components: {
    CheckoutCard,
    VueGoogleAutocomplete
  },
  data () {
    return {
      cart: []
    }
  },
  methods: {
    getAddressData (res) {
      console.log(res)
    }
  },
  created () {
    db.collection('cart').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'sku': doc.data().sku,
          'image': doc.data().image,
          'price': doc.data().price,
          'brand': doc.data().brand,
          'type': doc.data().type
        }
        this.cart.push(data)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="css">
</style>
