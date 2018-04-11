<template>
  <div>
    <div class="row">
      <div class="col">
        <p class="h2">Items in Shopping list</p>
        <hr class="my-4">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button @click="toggleModal('new')" class="btn btn-primary btn-block" href="#" role="button">Add new item</button>
      </div>
    </div>
    <br>
    <items-list v-if="items" :data="items" @add="addToStock" @edit="editItem"></items-list>
    <app-modal v-if="isModalOpen" @close="toggleModal('new')" @update="updateView" :data="{item: stockItem, edit: isModalEdit}"></app-modal>
  </div>
</template>

<script>
import ItemsList from '@/components/ItemsList'
import AppModal from '@/components/AppModal'
export default {
  name: 'ShoppingList',
  components: {
    ItemsList,
    AppModal
  },
  data () {
    return {
      items: [],
      isModalOpen: false,
      isModalEdit: false,
      stockItem: null
    }
  },
  methods: {
    toggleModal (modal) {
      if (modal === 'new') {
        this.isModalEdit = false
        this.stockItem = null
        this.isModalOpen = !this.isModalOpen
      } else if (modal === 'add') {
        this.isModalEdit = false
        this.isModalOpen = !this.isModalOpen
      } else if (modal === 'edit') {
        this.isModalEdit = true
        this.isModalOpen = !this.isModalOpen
      }
    },
    addToStock (item) {
      this.stockItem = item
      this.toggleModal('add')
    },
    editItem (item) {
      this.stockItem = item
      this.toggleModal('edit')
    },
    updateView () {
      // view should update automatic
      // this is quick bug fix
      this.items = this.$store.state.items
    }
  },
  mounted () {
    this.items = this.$store.state.items
  }
}
</script>
