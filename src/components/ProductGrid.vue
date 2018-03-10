<template lang="html">
  <div id="products">
    <h1>Product Grid</h1>
    <!-- <ul class="collection with-header">
      <li class="collection-header"><h3>Products</h3></li>
      <li v-for="product in products" class="collection-item">
        {{ product }}
      </li>
    </ul> -->

    <div class="row">
      <div class="col s12 m6 l4 xl3" v-for="product in products" v-bind:key="product.sku">
        <div class="card">
          <router-link :to="{ name: 'view-product', path: 'product', params: {sku: product.sku} }" class="card-image">
            <img :src="product.image" style="padding: 0 1em;">
          </router-link>
          <div class="card-content">
            <p style="min-height: 70px;"><router-link :to="{ name: 'view-product', path: 'product', params: {sku: product.sku} }">{{ product.brand }} {{ product.collection }} {{ product.attributes }} {{ product.type }}</router-link></p>
            <p style="color: #999; text-align: center; margin-top: 1em;">Style {{ product.sku }}</p>
            <p class="price center">${{ product.price }}</p>
          </div>
          <div class="card-action center">
            <a class="btn waves-effect waves-light primary" style="padding: 0 1em;" @click="addToCart">Buy Now</a>
            <a class="btn waves-effect waves-light secondary" style="padding: 0 1em;" @click="deleteProduct"><i class="material-icons">add_shopping_cart</i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-action-btn">
      <router-link to="/addproduct" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'products',
  data () {
    return {
      products: []
    }
  },
  created () {
    db.collection('products').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'sku': doc.data().sku,
          'image': doc.data().image,
          'price': doc.data().price,
          'brand': doc.data().brand,
          'attributes': doc.data().attributes,
          'collection': doc.data().collection,
          'type': doc.data().type
        }
        this.products.push(data)
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    addToCart: () => {
      console.log(products)
    },
    deleteProduct: () => {
      if (confirm('Are you sure?')) {
        db.collection('products').where('sku', '==', this.$route.params.sku).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete()
              this.$router.push('/shop')
            })
          })
      }
    }
  }
}
</script>

<style lang="css">
  .price {
    font-size: 1.4em;
  }
  .card .card-content, .card .card-action {
    padding: 1em;
  }
</style>
