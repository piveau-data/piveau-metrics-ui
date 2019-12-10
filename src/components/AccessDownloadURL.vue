<template>
  <div class="content">
    <div class="container">
      <div class="Search__container"></div>
      <div class="Chart__content">
        <p
          style="text-align: center"
        >{{ $t("message.dashboard.accessibility.plots.title.accessibility_download_url") }}</p>
        <div v-if="loaded == true" class="relative">
          <div v-if="!data.success || data.success === false" class="relative">
            <p class="text-muted" style="text-align: center">{{ $t("message.no_data") }}</p>
          </div>
          <div class="relative" v-else-if="data.success === true">
            <doughnut-chart
              :width="150"
              :height="150"
              v-if="loaded"
              :chart-data="[Math.round(data.result.yes), Math.round(data.result.no), Math.round(data.result.unknown)]"
              :chart-labels="desc"
            ></doughnut-chart>
            <div class="absolute-center text-center">
              <!-- <div v-if="this.loading"><cube-spin background="#fff" color="rgb(59,106,160)" style=""></cube-spin></div> -->
              <p>{{Math.round(data.result.yes)}} %</p>
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
// import CubeSpin from 'vue-loading-spinner/src/components/circle2'

export default {
  components: {
    DoughnutChart
  },
  props: {
    msg: String
  },
  data () {
    return {
      loaded: false,
      loading: true,
      desc: ['yes', 'no', 'unknown'],
      data: [],
      showError: false,
      errorMessage: 'No Data availale.'
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
      axios
        .get(
          this.$env.ROOT_API +
            '/metric/global/distributions/accessibility/download_url',
          {
            auth: {
              username: this.$env.USERNAME_ENV,
              password: this.$env.PASSWORD_ENV
            },
            headers: { 'content-type': 'application/x-www-form-urlencoded' }
          }
        )
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
    }
  },
  created: function () {
    // eslint-disable-next-line
    this.requestData()
  }
}
</script>
