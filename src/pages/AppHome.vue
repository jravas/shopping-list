<template>
  <div>
    <div class="row">
      <vue-event-calendar :events="events"></vue-event-calendar>
    </div>
    <!-- <div class="row">
      <div class="col">
        <p class="h3 text-center">Spent this month: {{ $store.state.totalStock }} $</p>
        <hr class="my-4">
        <bar-example :data="chart"/>
        <br>
      </div>
    </div> -->
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      events: [
        // {
        //   date: '2016/12/15',
        //   title: 'eat',
        //   desc: 'longlonglong description'
        // },
        // {
        //   date: '2016/11/12',
        //   title: 'this is a title'
        // }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('totalInStock')
    this.$store.state.stock.forEach(el => {
      this.events.push({ date: moment(el.purchaseDate).format('YYYY/MM/DD'), title: el.name, desc: el.price })
      console.log(moment(el.purchaseDate).format('YYYY/MM/DD'))
    })
    // console.log(this.$store.state.stock)
    // this.renderChart(this.testData, {responsive: true, maintainAspectRatio: false})
    console.log(moment())
  }
}
</script>
