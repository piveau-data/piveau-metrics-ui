<template>
  <div class="content">
    <div class="container">
      <div class="Search__container">
      </div>
        <div class="Chart__content">
            <p style="text-align: center">{{ $t("message.dashboard.accessibility.plots.title.status_error_code") }}</p>
            <div v-if="loaded == true" class="relative">
            <div v-if="!success.success || success.success == false" class="relative">
              <p class="text-muted" style="text-align: center">  {{ $t("message.no_data") }} </p>
            </div>
            <div class="relative" v-else>
              <bar-chart :width="150" :height="150" v-if="loaded" :chart-data="data | toparray | hope('percentage')" :chart-labels="data | toparray | hope('name')" id="temp_space"></bar-chart>
           </div>
          </div>
         </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import round from 'vue-round-filter'
import BarChart from '@/components/BarChart'
export default {
  components: {
    BarChart
  },
  props: {},
  data () {
    return {
      loaded: false,
      desc: [],
      errors: [],
      labels: [],
      data: [],
      test: 12.23123,
      showError: false,
      errorMessage: 'No Data availale'
    }
  },
  mounted () {
    if (this.$route.params.package) {
      this.package = this.$route.params.package
      // this.requestData()
    }
  },
  methods: {
    requestData () {
      axios.get(this.$env.ROOT_API + '/metric/global/distributions/status_codes', {
        auth: {
          username: this.$env.USERNAME_ENV,
          password: this.$env.PASSWORD_ENV
        },
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
        .then(response => {
          // console.log(response.data)
          // this.errors = response.data.result.map(p => p.percentage)
          // this.desc = response.data.result.map(p => p.name)
          this.data = response.data.result
          this.success = response.data
          this.loaded = true
          // this.removeZero(this.errors, 0.5)
          // this.round(this.data)
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
    },
    round
  },
  created: function () {
    this.requestData()
  }
}
</script>

<style>
#temp_space{
  padding-top:24px;
}

</style>
