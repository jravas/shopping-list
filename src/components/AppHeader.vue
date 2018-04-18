<template>
  <div class="navigation-wrapper">
    <nav class="main-navigation">
      <svg class="menu" @click="toggleNav" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
        <path d="M0,382.5h153v-51H0V382.5z M0,76.5v51h459v-51H0z M0,255h306v-51H0V255z" fill="#FFFFFF"/>
      </svg>
      <svg class="close" @click="toggleNav" v-if="isActive" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 224.512 224.512" style="enable-background:new 0 0 224.512 224.512;" xml:space="preserve" width="25px" height="25px">
        <polygon points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254    0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254  " fill="#FFFFFF"/>
      </svg>
      <transition name="fade">
        <ul v-if="isActive">
          <li :class="{ active: (this.$route.name === 'AppHome') }">
            <router-link to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li :class="{ active: (this.$route.name === 'ShoppingList') }">
            <router-link to="/shopping-list">Shopping list</router-link>
          </li>
          <li :class="{ active: (this.$route.name === 'StockList') }">
            <router-link to="/stock-list">Stock</router-link>
          </li>
        </ul>
      </transition>
    </nav>
    <h1>{{ $route.name }}</h1>
    <div class="triangle">
      <svg height="120" width="1920">
        <polygon points="0,120 1920,0 1920,120" style="fill:white;" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav () {
      this.isActive = !this.isActive
    }
  },
  watch: {
    '$route': function (from, to) {
      if (this.isActive) {
        this.toggleNav()
      }
    }
  }
}
</script>

<style lang="scss">
.navigation-wrapper {
  background-image: url('../assets/cart.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #6563a3; /* Old browsers */
    background: -moz-linear-gradient(top,  #6563a3 0%, #000000 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #6563a3 0%,#000000 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #6563a3 0%,#000000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6563a3', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
    opacity: .6;
  }
  .main-navigation {
    position: relative;
    padding: 15px 15px;
    .menu {
      cursor: pointer;
    }
    .close {
      position: absolute;
      z-index: 999;
      top: 30px;
      right: 30px;
    }
    ul {
      position: fixed;
      z-index: 998;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      // only on mobile center verticaly by another
      padding: 20% 0;
      @media screen and (max-width: 720px){
        padding: 40% 0;
      }
      text-align: center;
      line-height: 48px;
      li {
        position: relative;
        a {
          font-size: 28px;
          text-decoration: none;
          color: #fff;
        }
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #6563a3; /* Old browsers */
        background: -moz-linear-gradient(top,  #6563a3 0%, #000000 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  #6563a3 0%,#000000 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  #6563a3 0%,#000000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6563a3', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
        opacity: .9;
      }
    }
  }
  h1 {
    color: #fff;
    position: relative;
    text-align: center;
    font-size: 32px;
    @media screen and (min-width: 720px) {
      margin-left: 18%;
      line-height: 100px;
      text-align: initial;
    }
  }
  .triangle {
    // on mobile on desktop is to large
    margin-top: -45px;
    svg {
      width: 100%;
      position: relative;
      display: block;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
