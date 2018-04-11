<template>
  <div class="row">
    <div class="col">
      <br>
      <p class="h3">Items in shopping list: {{ $store.state.items.length + 1 }}</p>
      <br>
      <p class="h3">Items in stock: {{ $store.state.stock.length + 1 }}</p>
      <br>
      <p class="h3">The money spent this month: {{ $store.state.totalStock }} $</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('totalInStock')
  }
}
</script>
