<template>
  <div class="container">
    <div class="line-chart">
     <line-chart
      v-if="loaded"
      :chartlabels="Catalogues"
      :chartdata="count_data"
      :date="date_handy"
      :options="options"/>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import Vue from 'vue'
import LineChart from './LineChartTotal.vue'

export default {
  name: 'Evolution',
  components: { LineChart },
  data () {
    return {
      loaded: false,
      chartdata: [10, 20, 100],
      Catalogues_Sum: '',
      Catalogues: [],
      loading: true,
      desc: ['yes', 'no', 'unknown'],
      data: [],
      showError: false,
      errorMessage: 'No Data availale.',
      name: 'name',
      CountryCount: 'CountryCount',
      ascending: true,
      sortColumn: '',
      isActive: false,
      isLoading: true,
      EvolutionCountryCount: [],
      EvolutionCountryDate: [],
      labels: [],
      count: [],
      count_dummy: [],
      count_dummy1: [],
      count_data: 
      [[ 548448, 864659, 867693, 855055 ]],  // Total 
      //    count_data: 
      // [[548448,	754807, 842119,	856560,	830320,	829777, 864997, 861160, 836160, 864659, 867693 ]],  // Total 
      date_handy: [ '2016','01/04/19', '01/05/19', '01/06/19'],
      // date_handy: ['2016', '2017', '02/07/18', '08/08/18', '03/09/18', '04/10/18', '01/01/19', '01/02/19', '01/03/19', '01/04/19', '01/05/19'],
      total: [['Total']],
      date_dummy: [],
      hope: [],
      Labels: 'Total'
    }
  },
  mounted () {
    if (this.$route.params.package) {
      this.loading = true
      this.package = this.$route.params.package
    }
    this.addEvolutionCountryDate(this.Catalogues)
  },
  methods: {
    addSortableCountryCount (arr) {
      console.log(this.Catalogues)
      for (var x = 0; x < arr.length; x++) {
        Vue.set(this.Catalogues[x], 'CountryCount', +this.Catalogues[x].stats[0].count)
      }
      // console.log('SORT Count 3')
      return arr
    },
    addEvolutionCountryCountX (arr) {
      // this.count_dummy[0].push(this.Catalogues[0].stats[2].count)
      // this.count_dummy[0].push(this.Catalogues[0].stats[1].count)
      // this.count_dummy[0].push(this.Catalogues[0].stats[0].count)
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
          this.count_dummy.push(this.Catalogues[j].stats[i].count)
        }
      }
      return arr
      // console.log('SORT Count 3')
    },
    addLabels () {
      for (var l = 0; l < this.Catalogues.length; l++) {
        for (var i = 0; i < this.Catalogues.length; i++) {
          this.date_dummy.push(this.Catalogues[l].stats[i].date)
          this.count_dummy.push(+this.Catalogues[l].stats[i].count)
          this.count_dummy1.push(+this.Catalogues[1].stats[i].count)
          this.count_dummy.sort((a, b) => a - b)
          // this.hope.push(this.count_dummy.reverse())
          // this.hope.push(this.count_dummy)
        }
        return this.hope
      }
    },
    addLabelsSAVe () {
      for (var l = 0; l < this.Catalogues.length; l++) {
        this.date_dummy.push(this.Catalogues[l].stats[l].date)
        for (var i = 0; i < this.Catalogues.length; i++) {
          this.count_dummy.push(this.Catalogues[l].stats[i].count)
        }
      }
    },
    round (zahl, nStelle) {
      zahl = (Math.round(zahl * nStelle) / nStelle)
      return zahl
    },
    requestData () {
      axios.get(this.$env.ROOT_API + '/catalogue-statistics/data/ds-per-country?list=true', { // http://odp-lic.ppe-aws.europeandataportal.eu:9090/data/ds-per-catalogue'
      })
        .then(response => {
          // console.log(response.data)
          this.Catalogues = response.data.result
          this.Catalogues_Sum = response.data.sum
          // this.labels = response.data.result.map(p => p.name)
          // this.count = response.data.result.map(p => p.stats[0].count)
          // this.date = response.data.result.map(p => p.stats[0].date)
          this.loaded = true
          this.loading = false
          this.$emit('changeLoading', this.loading)
          this.addLabels()
        })
        .catch(err => {
          this.errorMessage = err.response.data.error
          this.showError = true
        })
    },
    isMobile () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    isExplorer () {
      if (navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1 || window.navigator.userAgent.indexOf('Edge') > -1) {
        //  alert ('It is InternetExplorer')
        return true
      } else {
        //  alert('It is NOT InternetExplorer')
        return false
      }
    }
  },
  computed: {
  },
  Filters: {
    addPercentage: function (value) {
      return this.value + '%'
    }
  },
  created: function () {
    this.requestData()
  }
}
</script>

<style>

.line-chart{
  padding-top: 50px;
}

#detail-table{
  margin-top:25px;
}

.total-number{
  padding-left: 5px;
  margin-bottom: 10px;
  float: right;
}


.active-table-head{
  text-decoration:underline;
}

.active{
   text-decoration: none;
}

.hide{
  visibility: hidden;
  font-size: 0px;
}

 #percent {
    text-align: center;
    color: #000;
    margin-right: 135px;
    font-size: 16px;
  }

  #less{
    font-size: 12px;
    color: darkgrey;
  }

  #sticky {
  background-color: #fff !important;
  background: solid;
  min-width: 952px !important;
}

</style>
