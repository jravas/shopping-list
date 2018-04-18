<template>
  <div>
    <div class="row">
      <vue-event-calendar
      :events="events"
      @day-changed="handleDayChanged">
        <!-- <template scope="props">
          <div v-for="(event, index) in props.showEvents" :key="index" class="event-item">
            {{event}}
          </div>
        </template> -->
        <template slot-scope="props">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center event-item"
                v-for="(item, index) in props.showEvents"
                :key="index">
              <a>{{ item.title }}</a>
              <span class="badge">
                {{ item.desc }} $
              </span>
            </li>
          </ul>
        </template>
      </vue-event-calendar>
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
  methods: {
    handleDayChanged (data) {
      console.log(data)
    }
  },
  mounted () {
    this.$store.dispatch('totalInStock')
    this.$store.state.stock.forEach(el => {
      this.events.push({ date: moment(el.purchaseDate).format('YYYY/MM/DD'), title: el.name, desc: el.price })
    })
    // set event calendar today
    console.log(this.$EventCalendar)
  }
}
</script>

<style lang="scss">
.events-wrapper {
  // color is changed by plugin internal JavaScript :(
  background-color: #e9ecef !important;
  .date {
    display: none;
  }
}
.is-today {
  border-radius: 0 !important;
  height: 2px !important;
}
</style>
