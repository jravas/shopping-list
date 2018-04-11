<template>
  <div>
    <div class="row">
      <div class="col">
        <p class="h2">Items in stock</p>
        <hr class="my-4">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center"
              v-for="(item, index) in items"
              :key="index">
            <a>{{ item.name }}</a>
            <span class="badge">
              {{ item.price }} $
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <hr class="my-5">
      </div>
    </div>
    <div class="row">
      <div class="col text-right">
        <p class="h5">Total: {{ $store.state.totalStock }} $</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$store.state.stock
    }
  },
  mounted () {
    this.$store.dispatch('totalInStock')
  }
}
</script>
