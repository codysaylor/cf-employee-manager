<template lang="html">
  <div id="view-product">
    <h1>{{ brand }} {{ collection }} {{ attributes }} {{ type }}</h1>
    <img :src="image" alt="">
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'view-product',
  data () {
    return {
      sku: null,
      attributes: null,
      brand: null,
      collection: null,
      image: null,
      price: null,
      type: null
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('products').where('sku', '==', to.params.sku).get()
      .then(querySnapshot => {
        console.log(querySnapshot)
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.sku = doc.data().sku,
            vm.attributes = doc.data().attributes,
            vm.brand = doc.data().brand,
            vm.collection = doc.data().collection,
            vm.image = doc.data().image,
            vm.price = doc.data().price,
            vm.type = doc.data().type
          })
        })
      })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('products').where('sku', '==', this.$route.params.sku).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.sku = doc.data().sku
          })
        })
    },
    addToCart () {
      console.log('added')
    }
  }
}
</script>

<style lang="css">
</style>
