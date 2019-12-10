<template>
<div id="print">
  <div class="dashboard">
    <p style="position:relative;">
    <a style="position:absolute; top:-70px;" id="Overview"></a>
    </p>
    <!-- <span v-html="NODE_ENV"></span> -->
    <div class="container" id="overview-intro">
      <div class="row">
        <div class="col-sm">
          <div class="toc">
          <a href="#Overview" class="toc-active">{{ $t("message.dashboard.overview.headline") }}</a><br>
          <a href="#Accessibility" class="toc-inactive" id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.accessibility.own_headline") }}</a><br>
          <a href="#MachineReadability" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.machine_readability.own_headline") }}</a><br>
          <a href="#DCAT" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.dcat_ap_compliance.own_headline") }}</a><br>
          <a href="#LicenceUsage" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.licence_usage.own_headline") }}</a><br>
         </div>
        </div>
        <div class="col-sm-auto">
          <div class="intro-section-text">
          <p> <span v-html="$t('message.dashboard.intro.desc')"></span></p>
          </div>
        </div>
      </div>
    <div class="container" id="overview-table" >
      <div class="row">
       <div class="col">
         <!-- <backtotop></backtotop> -->
         <overview-table></overview-table>
       </div>
      </div>
    </div>
    </div>
    <p style="position:relative;">
    <a style="position:absolute; top:-10px;" id="Accessibility"></a>
    </p>
    <div class="container" id="accessibility-intro">
      <div class="row">
        <div class="col-sm">
          <div class="toc">
          <a href="#Overview" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.overview.headline") }}</a><br>
          <a href="#Accessibility" class="toc-active "> {{ $t("message.dashboard.accessibility.own_headline") }}</a><br>
          <a href="#MachineReadability" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.machine_readability.own_headline") }}</a><br>
          <a href="#DCAT" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.dcat_ap_compliance.own_headline") }}</a><br>
          <a href="#LicenceUsage" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.licence_usage.own_headline") }}</a><br>
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="intro-section-text">
          <p> <span v-html="$t('message.dashboard.accessibility.description')"></span></p>
          </div>
        </div>
      </div>
     </div>
    <div class="graph-content">
    <div class="container">
      <div class="row">
       <!--   <div class="doughnat">
           <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
           <info-modal name="accessibility" id="ignorePDF"></info-modal>
           <access-doughnut @changeLoading="setLoading"> </access-doughnut>
         </div>  // GENERAL Accessibility (API down) -->
            <findability></findability>
            <accessibility></accessibility>
            <contextuality></contextuality>
            <reusability></reusability>
            <interoperability></interoperability>
            <!-- <div class="doughnat"> -->
           <!-- <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
           <info-modal name="accessibility_url" id="ignorePDF"></info-modal>
           <access-url @changeLoading="setLoading"> </access-url>
         </div>
          <div class="doughnat">
            <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
            <info-modal name="downloadUrl" id="ignorePDF"></info-modal>
            <download-url @changeLoading="setLoading"></download-url>
          </div>
           <div class="doughnat">
           <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
           <info-modal name="accessibility_dl_url" id="ignorePDF"></info-modal>
           <access-download-url @changeLoading="setLoading"> </access-download-url>
         </div> -->
       <!-- <div style="height: 40px;"></div>
       <div class="col-sm" id="bar-mobile">
         <div class="bar-chart">
           <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
           <info-modal name="statusErrorCodes" id="ignorePDF"></info-modal>
            <error-status-codes @changeLoading="setLoading"></error-status-codes>
          </div>
       </div> -->
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
          <a href="#Overview" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.overview.headline") }}</a><br>
          <a href="#Accessibility" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.accessibility.own_headline") }}</a><br>
          <a href="#MachineReadability" class="toc-active ">{{ $t("message.dashboard.machine_readability.own_headline") }}</a><br>
          <a href="#DCAT" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.dcat_ap_compliance.own_headline") }}</a><br>
          <a href="#LicenceUsage" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.licence_usage.own_headline") }}</a><br>
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
            <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
            <info-modal name="ratioMr" id="ignorePDF"></info-modal>
            <machine-readability @changeLoading="setLoading"></machine-readability>
           </div>
            <!--
            <p class="doughnat__graph-title">Machine Readability</p>
            <div id="container" class="doughnat__graph-specs"></div>
            <p class="doughnat__graph-subtitle">Datasets are machine readable</p>
            -->
         <div class="col-sm" id="bar-mobile">
           <div class="bar-chart">
          <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
           <info-modal name="formatsMr" id="ignorePDF"></info-modal>
           <machine-formats @changeLoading="setLoading"></machine-formats>
           </div>
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
          <a href="#Overview" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.overview.headline") }}</a><br>
          <a href="#Accessibility" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.accessibility.own_headline") }}</a><br>
          <a href="#MachineReadability" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.machine_readability.own_headline") }}</a><br>
          <a href="#DCAT" class="toc-active ">{{ $t("message.dashboard.dcat_ap_compliance.own_headline") }}</a><br>
          <a href="#LicenceUsage" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.licence_usage.own_headline") }}</a><br>
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="intro-section-text">
         <p> <span v-html="$t('message.dashboard.dcat_ap_compliance.description')"></span></p>
         </div>
        </div>
      </div>
     </div>
     <div class="graph-content">
    <div class="container">
      <div class="row">
          <div class="doughnat">
            <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
            <info-modal name="dcatCompliance" id="ignorePDF"></info-modal>
            <dcat-datasets @changeLoading="setLoading"></dcat-datasets>
          </div>
        <div class="col-sm" id="bar-mobile">
           <div class="bar-chart">
         <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
         <info-modal name="topViolations" id="ignorePDF"></info-modal>
         <dcat-top-violations @changeLoading="setLoading"></dcat-top-violations>
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
          <a href="#Overview" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.overview.headline") }}</a><br>
          <a href="#Accessibility" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.accessibility.own_headline") }}</a><br>
          <a href="#MachineReadability" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.machine_readability.own_headline") }}</a><br>
          <a href="#DCAT" class="toc-inactive " id="ignorePDF" v-smooth-scroll="{ duration: 700, offset: -50}">{{ $t("message.dashboard.dcat_ap_compliance.own_headline") }}</a><br>
          <a href="#LicenceUsage" class="toc-active ">{{ $t("message.dashboard.licence_usage.own_headline") }}</a><br>
          </div>
        </div>
        <div class="col-sm">
          <div class="intro-section-text">
          <p> <span v-html="$t('message.dashboard.licence_usage.description')"></span></p>
          </div>
        </div>
      </div>
     </div>
     <div class="graph-content">
    <div class="container">
      <div class="row">
          <div class="doughnat">
           <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
            <info-modal name="ratioLicence" id="ignorePDF"></info-modal>
          <licence-ratio @changeLoading="setLoading"></licence-ratio>
        </div>
        <div class="col-sm" id="bar-mobile">
           <div class="bar-chart">
         <div v-if="this.loading === true" class="lds-ring" id="spinner-plot"><div></div><div></div><div></div><div></div></div>
          <info-modal name="usedLicence" id="ignorePDF"></info-modal>
          <used-licences @changeLoading="setLoading"></used-licences>
         </div>
         </div>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
import modal from './modal.vue'
// import CubeSpin from 'vue-loading-spinner/src/components/circle2'

export default {
  name: 'app',
  components: {
    modal
  },
  data () {
    return {
      loading: true,
      test: '<a href="www.googl.de">klick</a>',
      cors: 'test',
      dashboard: true
    }
  },
  mounted () {
  },
  methods: {
    setLoading (msg) {
      this.loading = false
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.break-after {
  break-after: always;
}

#demo-spacer{
  margin-top:300px;
}
</style>
