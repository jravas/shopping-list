import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'shoppingListApp', // The key to store the state on in the storage provider.
  storage: window.localStorage // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export default new Vuex.Store({
  state: {
    items: []
  },
  actions: {
    addItem ({commit}, item) {
      this.commit('addItemsMutation', item)
    },
    editItem ({commit}, item) {
      this.commit('editItemMutation', item)
    },
    deleteItem ({commit}, item) {
      this.commit('deleteItemMutation', item)
    }
  },
  mutations: {
    addItemsMutation (state, item) {
      state.items.push(item)
    },
    editItemMutation (state, item) {
      state.items.forEach(el => {
        if (el.id === item.id) {
          el.name = item.name
          el.price = item.price
        }
      })
    },
    deleteItemMutation (state, item) {
      state.items.forEach(function (el, i) {
        if (el.id === item) {
          state.items.splice(i, 1)
        }
      })
    }
  },
  plugins: [vuexLocalStorage.plugin]
})
