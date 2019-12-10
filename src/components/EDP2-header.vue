<template>
  <div class="edp2-topnav-wrapper container-fluid mb-3" id="edp2-header">
    <div class="row edp2-header">
      <div class="col-auto">
        <a :href="`${rootURL}${$i18n.locale}`" class="edp2-home-link">
          <div class="mt-3 d-flex flex-row">
            <img class="edp-logo ml-3" src="../assets/img/edplogo.png" alt="European data portal logo">
            <div class="edp-title d-flex flex-column ml-3 mt-1">
              <div class="edp-title-top">{{ $t('message.header.european') }}</div>
              <div class="edp-title-bottom">{{ $t('message.header.dataPortal') }}</div>
            </div>
          </div>
        </a>
      </div>
      <div class="col">
        <div class="row">
          <div class="col justify-content-end">
            <ul class="nav subnav justify-content-end mt-1 d-none d-lg-flex position-absolute fixed-top">
              <li class="nav-item small">
                <a :href="`${rootURL}${$i18n.locale}/newsletter/subscribe`" class="nav-link p-0">{{ $t('message.header.subnav.newsletter') }}</a>
              </li>
              <li class="nav-item small">
                <a :href="`${rootURL}${$i18n.locale}/faq`" class="nav-link p-0">{{ $t('message.header.subnav.faq') }}</a>
              </li>
              <li class="nav-item small">
                <a :href="`${rootURL}${$i18n.locale}/search/site`" class="nav-link p-0">{{ $t('message.header.subnav.search') }}</a>
              </li>
              <li class="nav-item small">
                <a :href="`${rootURL}${$i18n.locale}/feedback/form`" class="nav-link p-0">{{ $t('message.header.subnav.contact') }}</a>
              </li>
              <li class="nav-item small">
                <a :href="`${rootURL}${$i18n.locale}/cookies`" class="nav-link p-0">{{ $t('message.header.subnav.cookies') }}</a>
              </li>
              <li class="nav-item small">
                <a :href="`${rootURL}${$i18n.locale}/legal-notice`" class="nav-link p-0">{{ $t('message.header.subnav.legalNotice') }}</a>
              </li>
              <li class="nav-item small">
                <!-- <a :href="`${rootURL}sparql-manager/${$i18n.locale}/user`" class="nav-link p-0">{{ $t('message.header.subnav.login') }}</a> -->
                <a href="#" class="nav-link p-0" title="Coming Soon">{{ $t('message.header.subnav.login') }}</a>
              </li>
            </ul>
          </div>
          <div class="col-auto d-flex justify-content-end">
            <language-selector></language-selector>
          </div>
        </div>
        <div class="row d-flex justify-content-end">
          <div class="col-lg-5 col-md-8 d-none d-md-block">
            <search-bar :root-url="`${rootURL}`"></search-bar>
          </div>
        </div>
      </div>
    </div>
    <div class="row edp2-breadcrumb d-none d-md-block">
        <span class="edp2-breadcrumb-text ml-3 text-white"><small><a :href="`${rootURL}${$i18n.locale}`">{{ `${$t('message.header.european')} ${$t('message.header.dataPortal')}` }}</a></small>
        <small> ><strong> {{ $t('message.header.navigation.data.metadataQuality') }}</strong></small></span>
    </div>
    <div class="row">
      <nav class="navbar navbar-expand-md w-100 h-100 p-0 edp2-topnav">
        <a :href="`${rootURL}${$i18n.locale}`" class="navbar-brand p-0 m-0 d-none d-md-block edp2-topnav-home"><i class="material-icons w-100 text-center">home</i></a>
        <ul class="navbar-nav nav-fill w-100 h-100 justify-content-between flex-row d-none d-md-flex">
            <li class="nav-item dropdown edp2-topnav-dropdown">
              <a  href="#"
                  class="nav-link dropdown-toggle"
                  id="edp2-topnav-dropdown-1"
                  data-toggle="dropdown">{{ $t('message.header.navigation.whatWeDo.title') }}</a>
              <div class="dropdown-menu border-0 w-100 mt-0 edp2-topnav-dropdown-container" aria-labelledby="edp2-topnav-dropdown-1">
                <ul class="d-flex flex-row justify-content-center px-3">
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/what-we-do/our-activities`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.whatWeDo.ourActivities') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/dashboard`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.whatWeDo.openDataMaturity') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/what-we-do/factsheets-and-reports`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.whatWeDo.factsheetsAndReports') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/what-we-do/highlights-archive`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.whatWeDo.featuredHighlights') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/what-we-do/calendar`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.whatWeDo.calendar') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/what-we-do/articles-archive`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.whatWeDo.news') }}</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown edp2-topnav-dropdown">
              <a  href="#"
                  class="nav-link dropdown-toggle"
                  id="edp2-topnav-dropdown-2"
                  data-toggle="dropdown">{{ $t('message.header.navigation.data.title') }}</a>
              <div class="dropdown-menu border-0 w-100 mt-0 edp2-topnav-dropdown-container" aria-labelledby="edp2-topnav-dropdown-2">
                <ul class="d-flex flex-row justify-content-center px-3">
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`https://www.europeandataportal.eu/data/#/datasets?locale=${$i18n.locale}`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.data.datasets') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                     <a :href="`https://www.europeandataportal.eu/data/#/catalogues?locale=${$i18n.locale}`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.data.catalogues') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                   <a @click="$router.push({ path: '/' })" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.data.metadataQuality') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/content/filter-licenses`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.data.licensingAssistant') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}sparql-manager/${$i18n.locale}/`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.data.sparqlManager') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`https://www.europeandataportal.eu/catalogue-statistics/CurrentState?locale=${$i18n.locale}`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.data.statistics') }}</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown edp2-topnav-dropdown">
              <a  href="#"
                  class="nav-link dropdown-toggle"
                  id="edp2-topnav-dropdown-3"
                  data-toggle="dropdown">{{ $t('message.header.navigation.providingData.title') }}</a>
              <div class="dropdown-menu border-0 w-100 mt-0 edp2-topnav-dropdown-container" aria-labelledby="edp2-topnav-dropdown-3">
                <ul class="d-flex flex-row justify-content-center px-3">
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/providing-data/goldbook`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.providingData.practicalGuide') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`https://www.europeandataportal.eu/data/#/catalogues?locale=${$i18n.locale}`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.providingData.cataloguesHarvestedByUs') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`https://www.europeandataportal.eu/${$i18n.locale}/providing-data/how-to-be-harvested-by-us`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.providingData.beHarvestedByUs') }}</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown edp2-topnav-dropdown">
              <a  href="#"
                  class="nav-link dropdown-toggle"
                  id="edp2-topnav-dropdown-4"
                  data-toggle="dropdown">{{ $t('message.header.navigation.usingData.title') }}</a>
              <div class="dropdown-menu border-0 w-100 mt-0 edp2-topnav-dropdown-container" aria-labelledby="edp2-topnav-dropdown-4">
                <ul class="d-flex flex-row justify-content-center px-3">
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/using-data/benefits-of-open-data`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.usingData.benefitsOfUsingData') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/using-data/using-data-checklist`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.usingData.checklistForUsingData') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/using-data/use-cases`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.usingData.useCases') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/using-data/tell-us-your-story`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.usingData.tellUsYourStory') }}</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown edp2-topnav-dropdown">
              <a  href="#"
                  class="nav-link dropdown-toggle"
                  id="edp2-topnav-dropdown-5"
                  data-toggle="dropdown">{{ $t('message.header.navigation.resources.title') }}</a>
              <div class="dropdown-menu border-0 w-100 mt-0 edp2-topnav-dropdown-container" aria-labelledby="edp2-topnav-dropdown-5">
                <ul class="d-flex flex-row justify-content-center px-3">
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/resources/elearning`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.resources.elearning') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/resources/training-companion`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.resources.trainingCompanion') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/resources/more-training-materials`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.resources.moreTrainingMaterial') }}</a>
                  </li>
                  <li class="dropdown-item p-0 mx-1">
                    <a :href="`${rootURL}${$i18n.locale}/resources/reports-about-open-data`" class="nav-link btn rounded edp2-topnav-dropdown-button" role="button">{{ $t('message.header.navigation.resources.reportsAboutOpenData') }}</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
      </nav>
      <nav class="navbar navbar-expand-md w-100 edp2-topnav-mobile d-md-none d-flex justify-content-end">
        <button class="navbar-toggler rounded collapsed" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <div class="arrow"></div>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggle">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}`" class="nav-link"><i class="material-icons w-100 text-center">home</i></a></li>
            <div class="dropdown-divider"></div>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ $t('message.header.navigation.whatWeDo.title') }}</a>
              <ul class="navbar-nav ml-3">
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/what-we-do/our-activities`" class="nav-link">{{ $t('message.header.navigation.whatWeDo.ourActivities') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/dashboard`" class="nav-link">{{ $t('message.header.navigation.whatWeDo.openDataMaturity') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/what-we-do/factsheets-and-reports`" class="nav-link">{{ $t('message.header.navigation.whatWeDo.factsheetsAndReports') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/what-we-do/highlights-archive`" class="nav-link">{{ $t('message.header.navigation.whatWeDo.featuredHighlights') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/what-we-do/calendar`" class="nav-link">{{ $t('message.header.navigation.whatWeDo.calendar') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/what-we-do/articles-archive`" class="nav-link">{{ $t('message.header.navigation.whatWeDo.news') }}</a></li>
              </ul>
            </li>
            <div class="dropdown-divider"></div>
            <li class="nav-item active">
              <a class="nav-link" href="#">{{ $t('message.header.navigation.data.title') }}</a>
              <ul class="navbar-nav ml-3">
                <li class="nav-item"><a :href="`${rootURL}data/${$i18n.locale}/dataset`" class="nav-link">{{ $t('message.header.navigation.data.datasets') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}data/${$i18n.locale}/organization`" class="nav-link">{{ $t('message.header.navigation.data.catalogues') }}</a></li>
                <li class="nav-item"><a :href="`https://www.europeandataportal.eu/mqa?locale=${$i18n.locale}`" class="nav-link">{{ $t('message.header.navigation.data.metadataQuality') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/content/filter-licenses`" class="nav-link">{{ $t('message.header.navigation.data.licensingAssistant') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}sparql-manager/${$i18n.locale}/`" class="nav-link">{{ $t('message.header.navigation.data.sparqlManager') }}</a></li>
                <li class="nav-item"><a :href="`https://www.europeandataportal.eu/catalogue-statistics?locale=${$i18n.locale}`" class="nav-link">{{ $t('message.header.navigation.data.statistics') }}</a></li>
              </ul>
            </li>
            <div class="dropdown-divider"></div>
            <li class="nav-item active">
              <a class="nav-link" href="#">{{ $t('message.header.navigation.providingData.title') }}</a>
              <ul class="navbar-nav ml-3">
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/providing-data/goldbook`" class="nav-link">{{ $t('message.header.navigation.providingData.practicalGuide') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}data/${$i18n.locale}/organization`" class="nav-link">{{ $t('message.header.navigation.providingData.cataloguesHarvestedByUs') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/providing-data/how-to-be-harvested-by-us`" class="nav-link">{{ $t('message.header.navigation.providingData.beHarvestedByUs') }}</a></li>
              </ul>
            </li>
            <div class="dropdown-divider"></div>
            <li class="nav-item active">
              <a class="nav-link" href="#">{{ $t('message.header.navigation.usingData.title') }}</a>
              <ul class="navbar-nav ml-3">
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/using-data/benefits-of-open-data`" class="nav-link">{{ $t('message.header.navigation.usingData.benefitsOfUsingData') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/using-data/using-data-checklist`" class="nav-link">{{ $t('message.header.navigation.usingData.checklistForUsingData') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/using-data/use-cases`" class="nav-link">{{ $t('message.header.navigation.usingData.useCases') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/using-data/tell-us-your-story`" class="nav-link">{{ $t('message.header.navigation.usingData.tellUsYourStory') }}</a></li>
              </ul>
            </li>
            <div class="dropdown-divider"></div>
            <li class="nav-item active">
              <a class="nav-link" href="#">{{ $t('message.header.navigation.resources.title') }}</a>
              <ul class="navbar-nav ml-3">
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/resources/elearning`" class="nav-link">{{ $t('message.header.navigation.resources.elearning') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/resources/training-companion`" class="nav-link">{{ $t('message.header.navigation.resources.trainingCompanion') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/resources/more-training-materials`" class="nav-link">{{ $t('message.header.navigation.resources.moreTrainingMaterial') }}</a></li>
                <li class="nav-item"><a :href="`${rootURL}${$i18n.locale}/resources/reports-about-open-data`" class="nav-link">{{ $t('message.header.navigation.resources.reportsAboutOpenData') }}</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import LanguageSelector from './LanguageSelector'
import SearchBar from './SearchBar'

export default {
  name: 'topnav',
  components: {
    LanguageSelector,
    SearchBar
  },
  data () {
    return {
      rootURL: 'https://www.europeandataportal.eu/'
    }
  },
  computed: {},
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

  #edp2-header {
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    .edp2-header {
      height: 90px;
      background-color: white;
      .edp2-home-link {
        &:hover {
          text-decoration: none;
        }
      }
      .subnav {
        .nav-item {
          a {
            color: #0065a2;
          }
          &:not(:last-child) a::after {
            content: "|";
            color: #0065a2;
            padding-left: 5px;
            padding-right: 5px;
          }
        }

      }
      .edp-title {
        font-size: 24px;
        color: #0065a2;
        text-transform: uppercase;
        line-height: 1.1;
        .edp-title-bottom {
          font-weight: 700;
        }
      }
      .edp-logo {
        width:  62px;
        height: 62px;
      }
    }
    .edp2-breadcrumb {
      height: 23px;
      background-color: #074A8B;
      a {
        color: white;
        vertical-align: middle;
      }
    }
    .edp2-topnav {
      background-color: #0065a2;
      height: 56px;
      .edp2-topnav-home {
        background-color: #1986DC;
        width: 54px;
        height: 56px;
        line-height: 46px;
        i {
          vertical-align: middle;
        }
      }
      .edp2-topnav-dropdown {
        position: static;
        &.show {
          .dropdown-toggle {
            background-color: #1986DC;
          }
        }
        .dropdown-toggle {
          line-height: 40px;
        }
        .edp2-topnav-dropdown-container {
          border-radius: 0;
          background-color: #1986DC;
          ul {
            li {
              .edp2-topnav-dropdown-button {
                color: white;
                background-color: #289dfa;
                &:hover {
                  background-color: #0065a2;
                  cursor: pointer;
                }
              }
              &:hover {
                background: transparent;
              }
            }
          }
        }
      }
      a {
        color: white;
      }
    }
    .edp2-topnav-mobile {
      background-color: #0065a2;
      .navbar-collapse {
        background-color: #0065a2;
      }
      button {
        color: white;
        background-color: #074a8b;
        border: 1px solid white;
        padding: 12px 10px 11px;
        .arrow {
          width: 0;
          height: 0;
          border-left: 11px solid transparent;
          border-right: 11px solid transparent;
          border-top: 11px solid #f5f5f5;
          color: white;
        }
        &.collapsed {
          .arrow {
            border-top: none;
            border-bottom: 11px solid #f5f5f5;
            box-shadow: 0 1px 0 rgba(0, .25, 0, 0);
          }
        }
      }
      .nav-item {
        ul {
          .nav-link {
            font-size: .9em;
          }
        }
        .nav-link {
          color: white;
        }
      }
      .dropdown-divider {
        border-color: #2481C4;
      }
    }
    @media (max-width: 991.98px) {
      .edp2-topnav {
        font-size: small;
        .nav-link {
          font-size: small;
        }
      }
    }
  }
</style>
