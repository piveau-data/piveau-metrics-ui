<template>
  <div class="content">
    <div class="container">
      <div class="Search__container">
      </div>
        <div class="Chart__content">
            <p style="text-align: center">{{ $t("message.dashboard.machine_readability.plots.title.distribution_formats") }}</p>
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
import BarChart from '@/components/BarChart'
import round from 'vue-round-filter'
export default {
  components: {
    BarChart
  },
  props: {},
  data () {
    return {
      loaded: false,
      desc: [],
      formats: [],
      format2: [80, 55, 22, 34, 22, 1, 17, 33],
      labels: ['CSV', 'GMZ', 'ZIP', '?', 'HTML', 'TXT', 'JSON', 'PDF', 'XLS', 'XML'],
      showError: false,
      errorMessage: 'No Data availale'
    }
  },
  mounted () {
    if (this.$route.params.package) {
      this.package = this.$route.params.package
      this.requestData()
    }
  },
  methods: {
    requestData () {
      axios.get(this.$env.ROOT_API + '/metric/global/distributions/formats', {
        auth: {
          username: this.$env.USERNAME_ENV,
          password: this.$env.PASSWORD_ENV
        },
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
        .then(response => {
          // console.log(response.data)
          this.formats = response.data.result.map(p => p.percentage)
          this.desc = response.data.result.map(p => p.name)
          this.data = response.data.result
          this.success = response.data
          this.loaded = true
          this.$emit('changeLoading', this.loading)
          this.removeZero(this.formats, 3.5)
          this.round(this.formats)
        })
        .catch(err => {
          this.errorMessage = err.response.data.error
          this.showError = true
        })
    },
    round (formats) {
      var x = 0
      var len = this.formats.length
      while (x < len) {
        this.formats[x] = this.formats[x].toFixed(2)
        x++
      }
      // console.log(this.formats)
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
    // ORDER FUNKTION!!
  },
  filters: {
    toparray: function (value) {
      return value.filter(function (data) {
        return data.percentage > 3
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

<style>
#temp_space{
  padding-top:24px;
}

</style>
