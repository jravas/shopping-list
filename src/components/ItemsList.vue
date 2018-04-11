<template>
  <div>
    <div class="row">
      <div class="col">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center"
              v-for="(item, index) in data"
              :key="index">
            <!-- <router-link :to="{ name: 'EditItem', params: { id: item.id } }">
              {{ item.name }}
            </router-link> -->
            <a @click="$emit('edit', item)">
              {{ item.name }}
            </a>
            <span class="badge">
              <!-- {{ item.price }} $ -->
              <span @click="removeItem(item.id)">
                <i class="far fa-trash-alt delete-item"></i>
              </span>
              <span @click="addToStock(item)">
                <i class="fas fa-shopping-cart add-to-stock"></i>
              </span>
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
    <!-- <div class="row">
      <div class="col text-right">
        <p class="h5">Total: {{ total }} $</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
//   name: 'items-list',
  props: ['data'],
  methods: {
    removeItem (id) {
      this.$store.dispatch('deleteItem', id)
      // this.totalCalc()
    },
    addToStock (item) {
      this.$emit('add', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .delete-item {
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
  .add-to-stock {
    cursor: pointer;
    &:hover {
      color: #28a745;
    }
  }
  .list-group-item a {
    cursor: pointer;
  }
</style>
