<template>
  <div>
    <div class="row">
      <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <router-link to="add-item" class="btn btn-primary btn-lg" href="#" role="button">Add new item</router-link>
      </div>
    </div>
    <div class="row">
      <ul class="col list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(item, index) in items"
            :key="index">
          <router-link :to="{ name: 'EditItem', params: { id: item.id } }">
            {{ item.name }}
          </router-link>
          <span class="badge">
            {{ item.price }} $
            <span @click="removeItem(item.id)">
              <i class="far fa-trash-alt delete-item"></i>
            </span>
          </span>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col">
        <hr class="my-5">
      </div>
    </div>
    <div class="row">
      <div class="col text-right">
        <p class="h5">Total: {{ total }} $</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      total: 0
    }
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  methods: {
    removeItem (id) {
      this.$store.dispatch('deleteItem', id)
      this.totalCalc()
    },
    totalCalc () {
      this.total = 0
      this.$store.state.items.forEach(el => {
        this.total += Number(el.price)
      })
    }
  },
  mounted () {
    this.totalCalc()
  }
}
</script>

<style lang="scss" scoped>
  .delete-item {
    margin-left: 15px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
</style>
