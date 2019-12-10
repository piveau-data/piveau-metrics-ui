<template>
  <div class="content">
    <div class="container">
      <div class="Search__container">
      </div>
      <div class="findability"><h3> {{ $t("message.dashboard.interoperability.own_headline") }} </h3>
      </div>
        <div class="Chart__content">
         <p style="text-align: center"> {{ $t("message.dashboard.interoperability.plots.title.formatMediaTypeNonProprietary") }} </p>
         <div v-if="loaded == true" class="relative">
          <div  v-if="!success || success === false"  class="relative">
           <p class="text-muted" style="text-align: center"> {{ $t("message.no_data") }}</p>
          </div>
          <div class="relative" v-if="success === true">
           <doughnut-chart :width="150" :height="150" v-if="loaded" :chart-data="[Math.round(data.interoperability.formatMediaTypeNonProprietary[0].percentage | addPercentage), Math.round(data.interoperability.formatMediaTypeNonProprietary[1].percentage), 0]" :chart-labels="desc"></doughnut-chart>
           <div class="absolute-center text-center">
            <div v-if="this.loading"><cube-spin background="#fff" color="rgb(59,106,160)" style=""></cube-spin></div>
             <p> {{Math.round(data.interoperability.formatMediaTypeNonProprietary[0].percentage)}} %</p>
           </div>
         </div>
        </div>
      </div>
      <div style="height: 40px;"></div>
        <div class="Chart__content">
         <p style="text-align: center"> {{ $t("message.dashboard.interoperability.plots.title.formatMediaTypeAlignment") }}  </p>
         <div v-if="loaded == true" class="relative">
          <div  v-if="!success || success === false"  class="relative">
           <p class="text-muted" style="text-align: center"> {{ $t("message.no_data") }}</p>
          </div>
          <div class="relative" v-if="success === true">
           <doughnut-chart :width="150" :height="150" v-if="loaded" :chart-data="[Math.round(data.interoperability.formatMediaTypeAlignment[0].percentage | addPercentage), Math.round(data.interoperability.formatMediaTypeAlignment[1].percentage), 0]" :chart-labels="desc"></doughnut-chart>
           <div class="absolute-center text-center">
            <div v-if="this.loading"><cube-spin background="#fff" color="rgb(59,106,160)" style=""></cube-spin></div>
             <p> {{Math.round(data.interoperability.formatMediaTypeAlignment[0].percentage)}} %</p>
           </div>
         </div>
        </div>
      </div>
      <div style="height: 40px;"></div>
       <div class="Chart__content">
         <p style="text-align: center"> {{ $t("message.dashboard.interoperability.plots.title.formatMediaTypeMachineReadable") }}  </p>
         <div v-if="loaded == true" class="relative">
          <div  v-if="!success || success === false"  class="relative">
           <p class="text-muted" style="text-align: center"> {{ $t("message.no_data") }}</p>
          </div>
          <div class="relative" v-if="success === true">
           <doughnut-chart :width="150" :height="150" v-if="loaded" :chart-data="[Math.round(data.interoperability.formatMediaTypeMachineReadable[0].percentage | addPercentage), Math.round(data.interoperability.formatMediaTypeMachineReadable[1].percentage), 0]" :chart-labels="desc"></doughnut-chart>
           <div class="absolute-center text-center">
            <div v-if="this.loading"><cube-spin background="#fff" color="rgb(59,106,160)" style=""></cube-spin></div>
             <p> {{Math.round(data.interoperability.formatMediaTypeMachineReadable[0].percentage)}} %</p>
           </div>
         </div>
        </div>
      </div>
       <div style="height: 40px;"></div>
       <div class="Chart__content">
         <p style="text-align: center"> {{ $t("message.dashboard.interoperability.plots.title.dcatApCompliance") }}  </p>
         <div v-if="loaded == true" class="relative">
          <div  v-if="!success || success === false"  class="relative">
           <p class="text-muted" style="text-align: center"> {{ $t("message.no_data") }}</p>
          </div>
          <div class="relative" v-if="success === true">
           <doughnut-chart :width="150" :height="150" v-if="loaded" :chart-data="[Math.round(data.interoperability.dcatApCompliance[0].percentage | addPercentage), Math.round(data.interoperability.dcatApCompliance[1].percentage), 0]" :chart-labels="desc"></doughnut-chart>
           <div class="absolute-center text-center">
            <div v-if="this.loading"><cube-spin background="#fff" color="rgb(59,106,160)" style=""></cube-spin></div>
             <p> {{Math.round(data.interoperability.dcatApCompliance[0].percentage)}} %</p>
           </div>
         </div>
        </div>
      </div>
       <div style="height: 40px;"></div>
       <div class="Chart__content">
         <p style="text-align: center"> {{ $t("message.dashboard.interoperability.plots.title.mediaTypeAvailability") }}  </p>
         <div v-if="loaded == true" class="relative">
          <div  v-if="!success || success === false"  class="relative">
           <p class="text-muted" style="text-align: center"> {{ $t("message.no_data") }}</p>
          </div>
          <div class="relative" v-if="success === true">
           <doughnut-chart :width="150" :height="150" v-if="loaded" :chart-data="[Math.round(data.interoperability.mediaTypeAvailability[0].percentage | addPercentage), Math.round(data.interoperability.mediaTypeAvailability[1].percentage), 0]" :chart-labels="desc"></doughnut-chart>
           <div class="absolute-center text-center">
            <div v-if="this.loading"><cube-spin background="#fff" color="rgb(59,106,160)" style=""></cube-spin></div>
             <p> {{Math.round(data.interoperability.mediaTypeAvailability[0].percentage)}} %</p>
           </div>
         </div>
        </div>
      </div>
      <div style="height: 40px;"></div>
       <div class="Chart__content">
         <p style="text-align: center"> {{ $t("message.dashboard.interoperability.plots.title.formatAvailability") }}  </p>
         <div v-if="loaded == true" class="relative">
          <div  v-if="!success || success === false"  class="relative">
           <p class="text-muted" style="text-align: center"> {{ $t("message.no_data") }}</p>
          </div>
          <div class="relative" v-if="success === true">
           <doughnut-chart :width="150" :height="150" v-if="loaded" :chart-data="[Math.round(data.interoperability.formatAvailability[0].percentage | addPercentage), Math.round(data.interoperability.formatAvailability[1].percentage), 0]" :chart-labels="desc"></doughnut-chart>
           <div class="absolute-center text-center">
            <div v-if="this.loading"><cube-spin background="#fff" color="rgb(59,106,160)" style=""></cube-spin></div>
             <p> {{Math.round(data.interoperability.formatAvailability[0].percentage)}} %</p>
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
    }
  },
  filters: {
    addPercentage: async function (value) {
      return value + ' %'
    }
  },
  created: function () {
    this.requestData()
  }
}
</script>
