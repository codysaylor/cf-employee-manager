<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
.green.btn, .primary.btn {
  background: #bed600 !important;
  color: #212121;
}

.green, .primary {
  color: #bed600;
}

.secondary.btn {
  background: #212121 !important;
  color: white;
}
</style>
