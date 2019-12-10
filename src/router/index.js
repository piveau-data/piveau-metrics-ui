import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Catalogue from '@/components/Catalogue'
import OverviewTable from '@/components/OverviewTable'
import Accessibility from '@/components/Accessibility'
import DoughnutChart from '@/components/DoughnutChart'
import DownloadUrl from '@/components/DownloadUrl'
import MachineReadableDatasets from '@/components/MachineReadableDatasets'
import DcatDatasets from '@/components/DcatDatasets'
import LicenceRatio from '@/components/LicenceRatio'
import AccessibilityErrorCode from '@/components/AccessibilityErrorCode'
import MachineReadableUsedFormats from '@/components/MachineReadableUsedFormats'
import LicenceUsed from '@/components/LicenceUsed'
import vueSmoothScroll from 'vue2-smooth-scroll'
import modal from '@/components/modal'
import InformationModal from '@/components/InformationModal'
import Detail from '@/components/Detail'
import AboutMetrics from '@/components/AboutMetrics'
import AccessibilityCatalogue from '@/components/AccessibilityCatalogue'
import DownloadUrlCatalogue from '@/components/DownloadUrlCatalogue'
import AccessibilityErrorCodeCatalogue from '@/components/AccessibilityErrorCodeCatalogue'
import Distributions from '@/components/Distributions'
import violations from '@/components/Violations'
import detaildashboard from '@/components/detailDashboard'
import Evolution from '@/components/Evolution'
import Findability from '@/components/Findability'
import Contextuality from '@/components/Contextuality'
import Interoperability from '@/components/Interoperability'
import Reusability from '@/components/Reusability'

Vue.use(vueSmoothScroll)
Vue.use(Router)

export default new Router({
  mode: 'history', // disables component hashtag in url (# > Anchor now)
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Evolution',
      name: 'Evolution',
      component: Evolution
    },
    {
      path: '/Catalogue',
      name: 'Catalogue',
      component: Catalogue,
      props: true
    },
    {
      path: '/OverviewTable',
      name: 'OverviewTable',
      component: OverviewTable
    },
    {
      path: '/Findability',
      name: 'Findability',
      component: Findability
    },
    {
      path: '/Reusability',
      name: 'Reusability',
      component: Reusability
    },
    {
      path: '/Interoperability',
      name: 'Interoperability',
      component: Interoperability
    },
    {
      path: '/Contextuality',
      name: 'Contextuality',
      component: Contextuality
    },
    {
      path: '/Accessibility',
      name: 'Accessibility',
      component: Accessibility
    },
    {
      path: '/DoughnutChart',
      name: 'DoughnutChart',
      component: DoughnutChart
    },
    {
      path: '/DownloadUrl',
      name: 'DownloadUrl',
      component: DownloadUrl
    },
    {
      path: '/MachineReadableDatasets',
      name: 'MachineReadableDatasets',
      component: MachineReadableDatasets
    },
    {
      path: '/DcatDatasets',
      name: 'DcatDatasets',
      component: DcatDatasets
    },
    {
      path: '/LicenceRatio',
      name: 'LicenceRatio',
      component: LicenceRatio
    },
    {
      path: '/AccessibilityErrorCode',
      name: 'AccessibilityErrorCode',
      component: AccessibilityErrorCode
    },
    {
      path: '/MachineReadableUsedFormats',
      name: 'MachineReadableUsedFormats',
      component: MachineReadableUsedFormats
    },
    {
      path: '/LicenceUsed',
      name: 'LicenceUsed',
      component: LicenceUsed
    },
    {
      path: '/modal',
      name: 'modal',
      component: modal
    },
    {
      path: '/InformationModal',
      name: 'InformationModal',
      component: InformationModal
    },
    {
      path: '/AboutMetrics',
      name: 'AboutMetrics',
      component: AboutMetrics
    },
    {
      path: '/AccessibilityCatalogue',
      name: 'AccessibilityCatalogue',
      component: AccessibilityCatalogue
    },
    {
      path: '/DownloadUrlCatalogue',
      name: 'DownloadUrlCatalogue',
      component: DownloadUrlCatalogue
    },
    {
      path: '/AccessibilityErrorCodeCatalogue',
      name: 'AccessibilityErrorCodeCatalogue',
      component: AccessibilityErrorCodeCatalogue
    },
    {
      path: '/:name',
      name: 'Detail',
      component: Detail,
      props: true,
      children: [{
        path: '',
        component: detaildashboard},
      {
        path: 'distributions',
        components: {
          a: Distributions
        }
      },
      {
        path: 'violations',
        components: {
          a: violations
        }
      }
      ]
    }
  ]
})
