<template>
  <div class="content">
    <div class="container">
      <div class="Search__container">
      </div>
        <div class="Chart__content">
            <p style="text-align: center">{{ $t("message.dashboard.dcat_ap_compliance.plots.title.dcat_ap_compliant") }}</p>
            <div v-if="loaded == true" class="relative">
            <div v-if="!data.success || data.success == false" class="relative">
              <p class="text-muted" style="text-align: center"> {{ $t("message.no_data") }} </p>
            </div>
            <div class="relative" v-else>
              <doughnut-chart :width="150" :height="150" v-if="loaded" :chart-data="[Math.round(data.result.yes), Math.round(data.result.no)]" :chart-labels="desc"></doughnut-chart>
              <div class="absolute-center text-center">
               <p>{{Math.round(data.result.yes)}} %</p>
               <p class="debug">debug: id =  {{this.id}} </p>
               <p class="debug">{{data.success}} </p>
            </div>
          </div>
          </div>
         </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import DoughnutChart from '@/components/DoughnutChart'
export default {
  components: {
    DoughnutChart
  },
  props: ['id'],
  data () {
    return {
      loaded: false,
      desc: ['yes', 'no'],
      data: [],
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
      axios.get(this.$env.ROOT_API + '/metric/catalogues/' + this.id + '/datasets/compliance', {
        auth: {
          username: this.$env.USERNAME_ENV,
          password: this.$env.PASSWORD_ENV
        },
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
        .then(response => {
          // console.log(response.data)
          this.data = response.data
          this.loaded = true
          this.$emit('changeLoading', this.loading)
        })
        .catch(err => {
          this.errorMessage = err.response.data.error
          this.showError = true
        })
    }
  },
  created: function () {
    this.requestData()
  }
}
</script>
