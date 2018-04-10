<template>
  <div>
    <div class="row">
        <h1 class="display-4">Add new item</h1>
    </div>
    <div class="row">
        <form style="width:100%" @submit.prevent="editItem" v-if="item">
          <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input v-model="item.name" type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Name">
          </div>
          <div class="form-group">
              <label for="exampleInputPassword1">Price</label>
              <input v-model="item.price" type="number" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Price">
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
  name: 'edit-item',
  data () {
    return {
      item: null
    }
  },
  methods: {
    editItem () {
      // add item to store
      this.$store.dispatch('editItem', this.item)
      // change route
      this.$router.push('/')
    }
  },
  mounted () {
    this.item = this.$store.state.items.find(item => item.id === this.$route.params.id)
  }
}
</script>
