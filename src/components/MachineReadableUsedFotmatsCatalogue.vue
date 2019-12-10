<template>
  <div class="content">
    <div class="container">
      <div class="Search__container">
      </div>
        <div class="Chart__content">
            <p style="text-align: center">{{ $t("message.dashboard.machine_readability.plots.title.distribution_formats") }}</p>
            <div v-if="loaded == true || success == false" class="relative">
            <div v-if="!success.success || success.success == false" class="relative">
               <p style="text-align: center" id="no-data">  <img src="../assets/img/no-dcat.png" alt="no data" height="25" width="25"> <br><br>{{ $t("message.no_data") }} </p>
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
  props: ['id'],
  data () {
    return {
      loaded: false,
      desc: [],
      errors: [],
      labels: [],
      data: [],
      success: false,
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
      axios.get(this.$env.ROOT_API + '/metric/catalogues/' + this.id + '/distributions/formats', {
        auth: {
          username: this.$env.USERNAME_ENV,
          password: this.$env.PASSWORD_ENV
        },
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
        .then(response => {
          // console.log(response.data)
          this.errors = response.data.result.map(p => p.percentage)
          this.desc = response.data.result.map(p => p.name)
          this.data = response.data.result
          this.success = response.data
          this.loaded = true
          this.round(this.errors)
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
    }
  },
  filters: {
    toparray: function (value) {
      return value.filter(function (data) {
        return data.percentage > 4
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
