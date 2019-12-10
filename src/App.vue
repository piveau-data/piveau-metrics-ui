<template>
  <div class="site-wrapper" id="app">
    <back-to-top bottom="20px" right="20px" visibleoffsetbottom="200" >
    <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-angle-up" aria-hidden="true"></i></button>
    </back-to-top>
    <topnav/>
    <subnavigation/>
    <div class="container">
      <div class="main-content">
        <router-view/>
      </div>
    </div>
    <div id="ignorePDF">
    <div class="container" id="footer">
         <!-- <a target="_blank" class="link-small" href="https://www.fokus.fraunhofer.de/imprint">Imprint</a> |
         <a target="_blank" class="link-small" href="https://www.fokus.fraunhofer.de/data_protection">Data Protection</a> -->
    </div>
  </div>
  <bottom></bottom>
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</div>
</template>

<script>
import Topnav from './components/EDP2-header'
import Bottom from './components/EDP2-footer'

export default {
  name: 'app',
  components: {
    topnav: Topnav,
    bottom: Bottom
  },
  data () {
    return {
      tracker: null,
      matomoURL: this.$env.MATOMO_URL,
      lastRoute: null
    }
  },
  mounted () {
    /* eslint-disable */
    // Get Matomo
    window._paq = window._paq || []
    this.tracker = window._paq

    console.log(`router = ${this.$route}`)

    window._paq.push(['trackPageView']);

    (() => {
      const u = this.matomoURL
      window._paq.push(['setTrackerUrl', `${u}matomo.php`])
      window._paq.push(['setSiteId', '1'])
      const d = document
      const g = d.createElement('script')
      const s = d.getElementsByTagName('script')[0]
      g.type = 'text/javascript'
      g.async = true
      g.defer = true
      g.src = `${u}matomo.js`
      s.parentNode.insertBefore(g, s)
    })()
  },
  watch: {
    '$route' (to, from) {
      console.log(`hello from watcher ${window.location.origin}/mqa${to.fullPath}`)
      // Help Matomo track new page views.
      // Also gets triggered on initial page load.

      // router-link somehow makes this watcher trigger twice; Once immediately after the click
      // and once after the new view has loaded.
      // This is a workaround to prevent tracking the same route full path twice.
      if (to.fullPath !== this.lastRoute) {
        window._paq.push(['setCustomUrl', `${window.location.origin}/mqa${to.fullPath}`]);
        window._paq.push(['trackPageView']);
        this.lastRoute = to.fullPath;
      }
    }
  },
  Methods: {
  }
}
</script>

<style lang="scss">
@import './styles/metrics-style.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

* {
  box-sizing: border-box;
}

.site-wrapper {
  border: 1px solid #83b4c2;
  margin: auto;
  max-width: 984px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.spacer {
  margin: 500px;
}

</style>
