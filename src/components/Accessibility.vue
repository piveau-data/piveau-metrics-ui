<template>
  <div class="content">
    <div class="container">
      <div class="Search__container">
      </div>
      <div class="findability"><h3> {{ $t("message.dashboard.accessibility.own_headline") }} </h3>
      </div>
        <div class="Chart__content">
         <p style="text-align: center"> {{ $t("message.dashboard.accessibility.plots.title.accessUrlStatusCodes") }} </p>
            <div v-if="loaded == true" class="relative">
            <div v-if="!success || success == false" class="relative">
              <p class="text-muted" style="text-align: center">  {{ $t("message.no_data") }} </p>
            </div>
            <div class="relative" v-else>
              <bar-chart :width="150" :height="150" v-if="loaded" :chart-data="data.accessibility.accessUrlStatusCodes | toparray | hope('percentage')" :chart-labels="data.accessibility.accessUrlStatusCodes | toparray | hope('name')" id="temp_space"></bar-chart>
           </div>
          </div>
         </div>
      </div>
      <div style="height: 40px;"></div>
        <div class="Chart__content">
         <p style="text-align: center"> {{ $t("message.dashboard.accessibility.plots.title.downloadUrlAvailability") }} </p>
         <div v-if="loaded == true" class="relative">
          <div  v-if="!success || success === false"  class="relative">
           <p class="text-muted" style="text-align: center"> {{ $t("message.no_data") }}</p>
          </div>
          <div class="relative" v-if="success === true">
           <doughnut-chart :width="150" :height="150" v-if="loaded" :chart-data="[Math.round(data.accessibility.downloadUrlAvailability[0].percentage | addPercentage), Math.round(data.accessibility.downloadUrlAvailability[1].percentage), 0]" :chart-labels="desc"></doughnut-chart>
           <div class="absolute-center text-center">
            <div v-if="this.loading"><cube-spin background="#fff" color="rgb(59,106,160)" style=""></cube-spin></div>
             <p> {{Math.round(data.accessibility.downloadUrlAvailability[0].percentage)}} %</p>
           </div>
         </div>
        </div>
      </div>
      <div style="height: 40px;"></div>
       <div class="Chart__content">
         <p style="text-align: center"> {{ $t("message.dashboard.accessibility.plots.title.downloadUrlStatusCodes") }} </p>
           <div v-if="loaded == true" class="relative">
            <div v-if="!success || success == false" class="relative">
              <p class="text-muted" style="text-align: center">  {{ $t("message.no_data") }} </p>
            </div>
            <div class="relative" v-else>
            <bar-chart :width="150" :height="150" v-if="loaded" :chart-data="data.accessibility.downloadUrlStatusCodes | toparray | hope('percentage')" :chart-labels="data.accessibility.downloadUrlStatusCodes | toparray | hope('name')" id="temp_space"></bar-chart>
           </div>
          </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import BarChart from '@/components/BarChart'
import round from 'vue-round-filter'
import DoughnutChart from '@/components/DoughnutChart'

export default {
  components: {
    DoughnutChart,
    BarChart
  },
  props: {
    msg: String
  },
  data () {
    return {
      loaded: false,
      loading: true,
      desc: ['yes %', 'no %', 'unknown %'],
      data: [],
      showError: false,
      errorMessage: 'No Data availale.',
      addPercentage: '',
      success: true
    }
  },
  mounted () {
    if (this.$route.params.package) {
      this.loading = true
      this.package = this.$route.params.package
    }
  },
  methods: {
    requestData () {
      axios.get('http://localhost:8080/metric/sampleCatalogue', { // this.$env.ROOT_API + `/metric/global/distributions/accessibility/access_url`
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
        .then(response => {
          // console.log(response.data)
          this.data = response.data
          this.loaded = true
          this.loading = false
          this.$emit('changeLoading', this.loading)
        })
        .catch(err => {
          this.errorMessage = err.response.data.error
          this.showError = true
        })
    },
    round (errors) {
      var x = 0
      var len = this.errors.length
      while (x < len) {
        this.errors[x] = this.errors[x].toFixed(2)
        x++
      }
      // console.log(this.errors)
    },
    removeZero (arr, val) {
      var i = arr.length
      while (i--) {
        if (arr[i] < val) {
          arr.splice(i, 1) // Save IndexNumber of deleted item > Delte inside the desc Array at this point
        }
      }
      return arr
    }
  },
  filters: {
    addPercentage: async function (value) {
      return value + ' %'
    },
    toparray: function (value) {
      return value.filter(function (data) {
        return data.percentage > 0.5
      })
    },
    hope: function (objects, key) {
      return objects.map(function (object) {
        return round(object[key])
      })
    }
  },
  created: function () {
    this.requestData()
  }
}
</script>
