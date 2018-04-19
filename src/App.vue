<template>
  <div id="app">
    <app-header></app-header>
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import AppHeader from '@/components/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader
  },
  store
}
</script>

<style lang="scss">
@import './styles/main';

</style>
