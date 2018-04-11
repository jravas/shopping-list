<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand" href="#">Pantry manager</router-link>
        <button @click="toggleNav" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="{ collapse: !isActive}" class="navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{ active: (this.$route.name === 'AppHome') }">
              <router-link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item" :class="{ active: (this.$route.name === 'ShoppingList') }">
              <router-link to="/shopping-list" class="nav-link" href="#">Shopping list</router-link>
            </li>
            <li class="nav-item" :class="{ active: (this.$route.name === 'StockList') }">
              <router-link to="/stock-list" class="nav-link" href="#">Stock</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav () {
      this.isActive = !this.isActive
    }
  },
  watch: {
    '$route': function (from, to) {
      if (this.isActive) {
        this.toggleNav()
      }
    }
  }
}
</script>
