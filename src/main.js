// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@babel/polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import OverviewTable from './components/OverviewTable.vue'
import Accessibility from './components/Accessibility.vue'
import DownloadUrl from './components/DownloadUrl.vue'
import MachineReadableDatasets from './components/MachineReadableDatasets.vue'
import DcatDatasets from './components/DcatDatasets.vue'
import LicenceRatio from './components/LicenceRatio.vue'
import AccessibilityErrorCode from './components/AccessibilityErrorCode.vue'
import MachineReadableUsedFormats from './components/MachineReadableUsedFormats.vue'
import LicenceUsed from './components/LicenceUsed.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import modal from './components/modal.vue'
import InformationModal from './components/InformationModal.vue'
import VueI18n from 'vue-i18n'
import AccessibilityCatalogue from './components/AccessibilityCatalogue'
import DownloadUrlCatalogue from './components/DownloadUrlCatalogue'
import AccessibilityErrorCodeCatalogue from './components/AccessibilityErrorCodeCatalogue'
import MachineReadableDatasetsCatalogue from './components/MachineReadableDatasetsCatalogue'
import DcatDatasetsCatalogue from './components/DcatDatasetsCatalogue'
import LicenceRatioCatalogue from './components/LicenceRatioCatalogue'
import i18njson from './i18n/lang.json'
import VueProgress from 'vue-progress'
import progress from './components/progress'
import LicenceUsedCatalogue from './components/LicenceUsedCatalogue'
import subNavigation from './components/subNavigation'
import BackToTop from 'vue-backtotop'
import pagination from './components/pagination'
import DcatViolations from './components/DcatViolations'
import DcatViolationsCatalogue from './components/DcatViolationsCatalogue'
import AccessURL from './components/AccessURL'
import AccessDownlaodURL from './components/AccessDownloadURL'
import AccessURLCatalogue from './components/AccessURLCatalogue'
import AccessDownloadURLCatalogue from './components/AccessDownloadURLCatalogue'
import MachineReadableUsedFotmatsCatalogue from './components/MachineReadableUsedFotmatsCatalogue'
import _ from 'lodash'
import DetailSubNavigation from './components/DetailSubNavigation'
import Harvesting from '@/components/Harvesting'
import AceEditor from '@/components/AceEditor'
import ChartEvolutionTotal from './components/ChartEvolutionTotal.vue'
import Findability from './components/Findability.vue'
import Contextuality from './components/Contextuality.vue'
import Interoperability from './components/Interoperability.vue'
import Reusability from './components/Reusability.vue'

// Import Font Awesome Icons Library for vue
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGoogle,
  faGooglePlus,
  faGooglePlusG,
  faFacebook,
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import {
  faComment,
  faExternalLinkAlt,
  faPlus,
  faMinus,
  faArrowDown,
  faArrowUp,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VTooltip from 'v-tooltip'
import RuntimeConfiguration from './utils/runtimeconfig'

Vue.prototype.$_ = _
/* eslint-disable */
var Promise = require('es6-promise').Promise
require('es6-promise').polyfill()

require('./assets/img/edplogo.png')

// Add font Awesome icons to library so we can access them in our vue application
library.add(faGoogle, faGooglePlus, faGooglePlusG, faFacebook, faFacebookF, faInstagram, faTwitter, faLinkedinIn, faComment, faExternalLinkAlt, faPlus, faMinus, faArrowDown, faArrowUp, faInfoCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(vueSmoothScroll)
Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.use(VueProgress)
Vue.use(BackToTop)
Vue.use(VTooltip)
Vue.use(RuntimeConfiguration, { debug: true })

Vue.component('overview-table', OverviewTable) // Component OverviewTable
Vue.component('access-doughnut', Accessibility)
Vue.component('access-catalogue', AccessibilityCatalogue)
Vue.component('download-url', DownloadUrl)
Vue.component('download-url-catalogue', DownloadUrlCatalogue)
Vue.component('machine-readability', MachineReadableDatasets)
Vue.component('machine-readability-catalogue', MachineReadableDatasetsCatalogue)
Vue.component('machine-formats', MachineReadableUsedFormats)
Vue.component('machine-reability-formats-catalogue', MachineReadableUsedFotmatsCatalogue)
Vue.component('dcat-datasets', DcatDatasets)
Vue.component('dcat-datasets-catalogue', DcatDatasetsCatalogue)
Vue.component('licence-ratio', LicenceRatio)
Vue.component('licence-ratio-catalogue', LicenceRatioCatalogue)
Vue.component('error-status-codes', AccessibilityErrorCode)
Vue.component('error-status-codes-catalogue', AccessibilityErrorCodeCatalogue)
Vue.component('used-licences', LicenceUsed)
Vue.component('used-licences-catalogue', LicenceUsedCatalogue)
Vue.component('modal', modal)
Vue.component('info-modal', InformationModal)
Vue.component('progress-test', progress)
Vue.component('subnavigation', subNavigation)
Vue.component('paginiation', pagination)
Vue.component('dcat-top-violations', DcatViolations)
Vue.component('dcat-top-violations-catalogue', DcatViolationsCatalogue)
Vue.component('access-url', AccessURL)
Vue.component('access-download-url', AccessDownlaodURL)
Vue.component('access-url-catalogue', AccessURLCatalogue)
Vue.component('access-download-url-catalogue', AccessDownloadURLCatalogue)
Vue.component('detail-sub-nav', DetailSubNavigation)
Vue.component('harvesting', Harvesting)
Vue.component('ace-editor', AceEditor)
Vue.component('chart-evolution-total', ChartEvolutionTotal)
Vue.component('findability', Findability)
Vue.component('accessibility', Accessibility)
Vue.component('contextuality', Contextuality)
Vue.component('interoperability', Interoperability)
Vue.component('reusability', Reusability)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: i18njson // set locale messages
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
