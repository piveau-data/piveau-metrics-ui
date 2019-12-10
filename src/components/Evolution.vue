<template>
  <div class="Evolution" id="container">
   <div class="current-state">
   <div class="headline">Choose a Date from the past</div>
   <!-- <span class="filter">
   <button class="btn btn-light" :class="{ 'active': isactive}" v-on:click="showTable()"><i class="fas fa-table"></i> </button>
   <button class="btn btn-light" :class="{ 'active': !isactive}" v-on:click="showPie()"><i class="fas fa-chart-pie"></i> </button>
   </span>
   <br>
    <time-chart v-if="table"></time-chart>
    <line-chart v-if="pie"></line-chart> -->
   <span class="content">
    <button class="btn btn-light" :class="{ 'active': total}" v-on:click="showTotal()"> Total</button>
   </span>
    <chart-evolution-total v-if="total"></chart-evolution-total>
    <div class="spacer"></div>
  </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Evolution',
  data () {
    return {
      isactive: true,
      table: true,
      pie: false,
      catalogue: false,
      country: false,
      category: false,
      countryCatalogue: false,
      total: true
    }
  },
  methods: {
    showTable () {
      this.isactive = true
      this.pie = false
      this.table = true
      return this.pie && this.table
    },
    showPie () {
      this.isactive = false
      this.pie = true
      this.table = false
      return this.pie && this.table
    },
    showCatalogue () {
      this.catalogue = true
      this.country = false
      this.category = false
      this.total = false
      this.countryCatalogue = false
      return this.catalogue
    },
    showCountry () {
      this.catalogue = false
      this.country = true
      this.category = false
      this.total = false
      this.countryCatalogue = false
      return this.country
    },
    showCategory () {
      this.catalogue = false
      this.country = false
      this.category = true
      this.total = false
      this.countryCatalogue = false
      return this.category
    },
    showCountryCatalogue () {
      this.catalogue = false
      this.country = false
      this.total = false
      this.category = false
      this.countryCatalogue = true
      return this.countryCatalogue
    },
    showTotal () {
      this.catalogue = false
      this.country = false
      this.category = false
      this.countryCatalogue = false
      this.total = true
      return this.total
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#container{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}

.filter {
  float: right;
  padding-right: 18px;
  padding-bottom: 20px;
}
.headline {
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 20px;

}

.spacer {
  margin-top: 20px;
}

</style>
