<template>
<div class="subnavigation">
<div class="container" id="header">
         <form class="form-inline my-2 my-lg-0" id="download-report-form">
                  <!-- <div class="shacl-validation-link">
                  <i class="fas fa-external-link-alt"></i> <a href="https://www.europeandataportal.eu/shacl/" target="_blank">  SHACL Validation</a>
                  </div> -->
                <div class="btn-group">
                    <button type="button" class="btn btn"> <span class="dl-icon-main"><i class="fa fa-download" aria-hidden="true"></i></span> <app-link :to="`https://www.ppe-aws.europeandataportal.eu/api/mqa/reports/report/${$i18n.locale}/pdf`" matomo-track-download>{{ $t("message.navigation.download_report.direct") }}</app-link></button>
                    <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only"></span>
                    </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <app-link class="dropdown-item" :to="`${rootURL}/api/mqa/reports/report/${$i18n.locale}/pdf`" matomo-track-download><span class="dl-icon-main"><i class="fa fa-download" aria-hidden="true"></i></span>{{ $t("message.navigation.download_report.second_pdf") }}</app-link>
                            <app-link class="dropdown-item" :to="`${rootURL}/api/mqa/reports/report/${$i18n.locale}/ods`" matomo-track-download><span class="dl-icon-main"><i class="fa fa-download" aria-hidden="true"></i></span>{{ $t("message.navigation.download_report.second_ods") }}</app-link>
                            <app-link class="dropdown-item" :to="`${rootURL}/api/mqa/reports/report/${$i18n.locale}/xls`" matomo-track-download><span class="dl-icon-main"><i class="fa fa-download" aria-hidden="true"></i></span>{{ $t("message.navigation.download_report.second_xls") }}</app-link>
                    </div>
                </div>
            </form>
        <nav class="navbar navbar-expand-lg navbar-light">
            <!-- <a class="navbar-brand" href="#"></a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                   <router-link :to="{ path: '/', query: { locale:`${$i18n.locale}` }} "  class="nav-link" exact> <button class="btn btn-light" :class="{ 'active': dash}" v-on:click="dash = true, cat = false, doc = false">{{ $t("message.navigation.dashboard") }}</button></router-link>
                 </li>
                 <li class="nav-item">
                 <router-link :to="{ path: '/Catalogue', query: { locale:`${$i18n.locale}` }}" class="nav-link"> <button class="btn btn-light" :class="{ 'active': cat}" v-on:click="cat = true, dash = false, doc = false">{{ $t("message.navigation.catalogues") }} </button></router-link>
                </li>
                <!-- <li class="nav-item">
                 <router-link to="/Evolution" class="nav-link"> <button class="btn btn-light" :class="{ 'active': !isactive}" v-on:click="isactive = false"> Evolution Testing </button></router-link>
                </li> -->
                  <li class="nav-item">
                    <router-link :to="{ path: '/Aboutmetrics', query: { locale:`${$i18n.locale}` }}" class="nav-link"> <button class="btn btn-light" :class="{ 'active': doc}" v-on:click="doc = true, cat = false, dash = false"> Methodology </button></router-link>
                </li>
                  <li class="nav-item">
                 <div class="shacl-validation-link">
                  <i class="fas fa-external-link-alt"></i> <a :href="`${rootURL}/shacl/`" target="_blank" class="shacl-link">  DCAT-AP {{ $t("message.navigation.validation") }} </a>
                  </div>
                  </li>
            </ul>
        </div>
      </nav>
    </div>
</div>
</template>
<script>
import appLink from './AppLink'

export default {
  props: ['language'],
  components: {
    appLink
  },
  data () {
    return {
      lang: 'en',
      dash: true,
      cat: false,
      doc: false,
      rootURL: this.$env.ROOT_URL
    }
  }
}
</script>

<style scoped>

</style>
