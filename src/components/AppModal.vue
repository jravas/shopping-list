<template>
  <div>
      <div style="background-color: rgba(0,0,0,0.5);display:block;" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <!-- create new modal body -->
          <div class="modal-content" v-if="!data.item && !data.edit">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Add new item</h5>
              <button @click="$emit('close')" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <form style="width:100%">
                      <div class="form-group">
                          <label for="exampleInputPassword1">Name</label>
                          <input v-model="name" type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Name">
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button @click="addItem" class="btn btn-primary">Submit</button>
            </div>
          </div>
          <!-- edit item modal body -->
          <div class="modal-content" v-if="data.item && data.edit">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Edit item</h5>
              <button @click="$emit('close')" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <form style="width:100%">
                      <div class="form-group">
                          <label for="exampleInputPassword1">Name</label>
                          <input v-model="name" type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Name">
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button @click="editItem" class="btn btn-primary">Edit item</button>
            </div>
          </div>
          <!-- add to cart modal body -->
          <div class="modal-content" v-if="data.item && !data.edit">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">{{ this.data.item.name }}</h5>
              <button @click="$emit('close')" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <form style="width:100%">
                      <div class="form-group">
                          <label for="exampleInputPassword1">Price</label>
                          <input v-model="price" type="number" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Price">
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button @click="addToStock" class="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app-modal',
  props: ['data'],
  data () {
    return {
      name: null,
      price: null
    }
  },
  methods: {
    addItem () {
      // add item to store
      this.$store.dispatch('addItem', { name: this.name })
      // reset form
      this.name = null
      // change route
      this.$emit('close')
    },
    editItem () {
      // add item to store
      this.$store.dispatch('editItem', {id: this.data.item.id, name: this.name})
      this.name = null
      // change route
      this.$emit('close')
      // update view
      this.$emit('update')
    },
    addToStock () {
      this.data.item.price = this.price
      // add item to store
      this.$store.dispatch('addTooStock', this.data.item)
      // reset form
      this.price = null
      // remove item from shopping list
      this.$store.dispatch('deleteItem', this.data.item.id)
      // change route
      this.$emit('close')
    }
  },
  mounted () {
    if (this.data.edit) {
      this.name = this.data.item.name
    }
  }
}
</script>
