<template>
  <div>
      <div class="row">
          <h1 class="display-4">Add new item</h1>
      </div>
      <div class="row">
          <form style="width:100%" @submit.prevent="addItem">
            <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input v-model="name" type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Price</label>
                <input v-model="price" type="number" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Price">
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'add-item',
  data () {
    return {
      name: null,
      price: null
    }
  },
  methods: {
    addItem () {
      // add item to store
      this.$store.dispatch('addItem', { id: this.$store.state.items.length, name: this.name, price: this.price })
      // reset form
      this.name = null
      this.price = null
      // change route
      this.$router.push('/')
    }
  }
}
</script>
