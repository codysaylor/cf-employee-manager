<template lang="html">
  <div id="new-product">
    <h1>New Product</h1>
    <div class="row">
      <form @submit.prevent="saveEmployee" class="col s12">
        <div class="row">
          <div class="input-field col-s12">
            <input type="text" v-model="sku" required>
            <label>SKU</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col-s12">
            <input type="text" v-model="collection" required>
            <label>Collection</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col-s12">
            <input type="text" v-model="brand" required>
            <label>Brand</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col-s12">
            <input type="text" v-model="image" required>
            <label>Image</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col-s12">
            <input type="text" v-model="type" required>
            <label>Type</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col-s12">
            <input type="text" v-model="price" required>
            <label>Price</label>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'new-product',
  data () {
    return {
      sku: null,
      collection: null,
      brand: null,
      image: null,
      type: null,
      price: null
    }
  },
  methods: {
    saveEmployee () {
      db.collection('products').add({
        sku: this.sku,
        collection: this.collection,
        brand: this.brand,
        image: this.image,
        type: this.type,
        price: this.price
      })
      .then(docRef => this.$router.push('/shop'))
      .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="css">
</style>
