<template>
  <div class="dashboard">
    <p style="position:relative;">
    <a style="position:absolute; top:-10px;" id="Accessibility"></a>
    </p>
    <div class="container" id="accessibility-intro">
      <div class="row">
        <div class="col-sm">
          <div class="toc">
          <a href="#Accessibility" class="toc-active "> {{ $t("message.dashboard.accessibility.own_headline") }}</a><br>
          <a href="#MachineReadability" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.machine_readability.own_headline") }}</a><br>
          <a href="#DCAT" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.dcat_ap_compliance.own_headline") }}</a><br>
          <a href="#LicenceUsage" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.licence_usage.own_headline") }}</a><br>
          <!-- <a href="#Harvesting" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.catalogue_detail.harvesting.title") }}</a><br> -->
          </div>
        </div>
        <div class="col-sm">
          <div class="intro-section-text">
           <p> <span v-html="$t('message.dashboard.accessibility.description')"></span></p>
          </div>
        </div>
      </div>
     </div>
    <div class="graph-content">
    <div class="container">
      <div class="row">
          <div class="doughnat">
            <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
            <info-modal name="accessibility_url"></info-modal>
            <access-url-catalogue v-bind:id="searchevents[0].id" @changeLoading="setLoading"></access-url-catalogue>
          </div>
          <div class="doughnat">
             <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
            <info-modal name="downloadUrl"></info-modal>
            <download-url-catalogue v-bind:id="searchevents[0].id" @changeLoading="setLoading"></download-url-catalogue>
          </div>
          <div class="doughnat">
            <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
            <info-modal name="accessibility_dl_url"></info-modal>
            <access-download-url-catalogue v-bind:id="searchevents[0].id" @changeLoading="setLoading"></access-download-url-catalogue>
          </div>
        <div class="col-sm" id="bar-mobile">
         <div class="bar-chart">
            <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
           <info-modal name="statusErrorCodes"></info-modal>
            <error-status-codes-catalogue v-bind:id="searchevents[0].id" @changeLoading="setLoading"></error-status-codes-catalogue>
          </div>
       </div>
      </div>
    </div>
    </div>
    <p style="position:relative;">
    <a style="position:absolute; top:10px;" id="MachineReadability"></a>
    </p>
    <div class="container" id="machine-readability-intro">
      <div class="row">
        <div class="col-sm">
          <div class="toc">
           <a href="#Accessibility" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.accessibility.own_headline") }}</a><br>
          <a href="#MachineReadability" class="toc-active ">{{ $t("message.dashboard.machine_readability.own_headline") }}</a><br>
          <a href="#DCAT" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.dcat_ap_compliance.own_headline") }}</a><br>
          <a href="#LicenceUsage" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.licence_usage.own_headline") }}</a><br>
          <!-- <a href="#Harvesting" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.catalogue_detail.harvesting.title") }}</a><br> -->
          </div>
        </div>
        <div class="col-sm">
          <div class="intro-section-text">
             <p> <span v-html="$t('message.dashboard.machine_readability.description')"></span></p>
          </div>
        </div>
      </div>
     </div>
     <div class="graph-content">
    <div class="container">
      <div class="row">
          <div class="doughnat">
            <info-modal name="ratioMr"></info-modal>
            <machine-readability-catalogue v-bind:id="searchevents[0].id"></machine-readability-catalogue>
            <!--
            <p class="doughnat__graph-title">Machine Readability</p>
            <div id="container" class="doughnat__graph-specs"></div>
            <p class="doughnat__graph-subtitle">Datasets are machine readable</p>
            -->
          </div>
       <div class="col-sm" id="bar-mobile">
         <div class="bar-chart">
           <info-modal name="formatsMr"></info-modal>
          <machine-reability-formats-catalogue  v-bind:id="searchevents[0].id"></machine-reability-formats-catalogue>
        </div>
       </div>
      </div>
    </div>
    </div>
    <p style="position:relative;">
    <a style="position:absolute; top:10px;" id="DCAT"></a>
    </p>
    <div class="container" id="dcat-intro">
      <div class="row">
        <div class="col-sm">
          <div class="toc">
          <a href="#Accessibility" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.accessibility.own_headline") }}</a><br>
          <a href="#MachineReadability" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.machine_readability.own_headline") }}</a><br>
          <a href="#DCAT" class="toc-active ">{{ $t("message.dashboard.dcat_ap_compliance.own_headline") }}</a><br>
          <a href="#LicenceUsage" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.licence_usage.own_headline") }}</a><br>
          <!-- <a href="#Harvesting" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.catalogue_detail.harvesting.title") }}</a><br> -->
          </div>
        </div>
        <div class="col-sm">
          <div class="intro-section-text">
             <p> <span v-html="$t('message.dashboard.dcat_ap_compliance.description')"></span></p>
         </div>
        </div>
      </div>
     </div>
     <div class="graph-content">
    <div class="container">
      <div v-if="violation_result == false" class="relative">
      <div class="alert alert-info" role="alert">
        <i class="fas fa-exclamation-triangle"></i> <span v-html="$t('message.no_data')"> </span>
      </div>
      </div>
      <div v-else>
      <div class="row">
          <div class="doughnat">
            <info-modal name="dcatCompliance"></info-modal>
            <dcat-datasets-catalogue v-bind:id="searchevents[0].id"></dcat-datasets-catalogue>
          </div>
       <div class="col-sm" id="bar-mobile">
         <div class="bar-chart">
        <info-modal name="topViolations"></info-modal>
        <dcat-top-violations-catalogue v-bind:id="searchevents[0].id"></dcat-top-violations-catalogue>
        </div>
       </div>
      </div>
      </div>
    </div>
    </div>
    <p style="position:relative;">
    <a style="position:absolute; top:10px;" id="LicenceUsage"></a>
    </p>
    <div class="container" id="licence-usage-intro">
      <div class="row">
        <div class="col-sm">
          <div class="toc">
          <a href="#Accessibility" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.accessibility.own_headline") }}</a><br>
          <a href="#MachineReadability" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.machine_readability.own_headline") }}</a><br>
          <a href="#DCAT" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.dcat_ap_compliance.own_headline") }}</a><br>
          <a href="#LicenceUsage" class="toc-active ">{{ $t("message.dashboard.licence_usage.own_headline") }}</a><br>
          <!-- <a href="#Harvesting" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.catalogue_detail.harvesting.title") }}</a><br> -->
        </div>
        </div>
        <div class="col-sm">
          <div class="intro-section-text">
           <span v-html="$t('message.dashboard.licence_usage.description')"></span>
          </div>
        </div>
      </div>
     </div>
     <div class="graph-content">
    <div class="container">
      <div v-if="licence_result == false" class="relative">
      <div class="alert alert-info" role="alert">
          <i class="fas fa-exclamation-triangle"></i> <span v-html="$t('message.dashboard.licence_usage.not_applicable')"></span>
      </div>
      </div>
      <div v-else>
      <div class="row">
          <div class="doughnat">
            <info-modal name="ratioLicence"></info-modal>
          <licence-ratio-catalogue v-bind:id="searchevents[0].id"></licence-ratio-catalogue>
          </div>
       <div class="col-sm" id="bar-mobile">
         <div class="bar-chart">
          <info-modal name="usedLicence"></info-modal>
          <used-licences-catalogue v-bind:id="searchevents[0].id"></used-licences-catalogue>
         </div>
       </div>
      </div>
    </div>
  </div>
  </div>
  <!-- <p style="position:relative;">
  <a style="position:absolute; top:-10px;" id="Harvesting"></a>
   <div class="container" id="licence-usage-intro">
      <div class="row">
        <div class="col-sm">
          <div class="toc">
          <a href="#Accessibility" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.accessibility.own_headline") }}</a><br>
          <a href="#MachineReadability" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.machine_readability.own_headline") }}</a><br>
          <a href="#DCAT" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.dcat_ap_compliance.own_headline") }}</a><br>
          <a href="#LicenceUsage" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.licence_usage.own_headline") }}</a><br>
          <a href="#Harvesting" class="toc-active ">{{ $t("message.catalogue_detail.harvesting.title") }}</a><br>
          </div>
        </div>
        <div class="col-sm">
          <div class="intro-section-text">
          </div>
        </div>
      </div>
     </div>
     <div class="graph-content">
         <harvesting></harvesting>
    </div> -->
 </div>
</template>
<script>
import Detail from '@/components/Detail'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Detail
  },
  props: ['title', 'description', 'spatial', 'dist'],
  data () {
    return {
      loaded: false,
      loading: true,
      id: this.$route.params.id,
      name: this.$route.params.name,
      portals: [],
      violation_result: '',
      licence_result: '',
      filterValue: '',
      showError: false
    }
  },
  mounted () {
    axios
      .get(this.$env.ROOT_API + '/info/catalogues', { auth: {
        username: this.$env.USERNAME_ENV,
        password: this.$env.PASSWORD_ENV
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
      })
      .then(response => (this.portals = response.data.result)
      )
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      // eslint-disable-next-line
      .finally(() => this.x = false)
    axios
      .get(this.$env.ROOT_API + '/metric/catalogues/' + this.dist + '/render/violations', { auth: {
        username: this.$env.USERNAME_ENV,
        password: this.$env.PASSWORD_ENV
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
      })
      .then(response => (this.violation_result = response.data.result)
      )
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      // eslint-disable-next-line
      .finally(() => this.x = false)
    axios
      .get(this.$env.ROOT_API + '/metric/catalogues/' + this.dist + '/render/licences', { auth: {
        username: this.$env.USERNAME_ENV,
        password: this.$env.PASSWORD_ENV
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
      })
      .then(response => (this.licence_result = response.data.result)
      )
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      // eslint-disable-next-line
      .finally(() => this.x = false)
  },
  computed: {
    searchevents: function () {
      let result = this.portals
      // eslint-disable-next-line
      if (!this.name)
        return result
      const name = this.name.toLowerCase()
      const filter = event =>
        event.name.toLowerCase().includes(name)
      return result.filter(filter)
    }
  },
  methods: {
    requestData () {
    },
    created: function () {
    },
    setLoading (msg) {
      this.loading = false
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#demo-spacer{
  margin-top:300px;
}
</style>
