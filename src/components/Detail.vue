<template>
  <div class="dashboard">
   <div class="row" id="detail-sub-header">
      <div class="col-sm">
        <div class="detail-header">
           <nav class="navbar navbar-expand-lg navbar-light">
             <div v-if="this.portals != null">
                <h3> {{this.searchevents[0].title}} </h3>
              </div>
         </nav>
         <div class="detail-desc">
          <!-- <h2> <h2>{{searchevents[0].title}}</h2></h2> -->
           <!--- all v-else-if flags here -->
                      <div v-if="searchevents[0].spatial === 'cz' "> <img src="../assets/img/flags/cz.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}} </div>
                      <div v-else-if="searchevents[0].spatial === 'ee' "> <img src="../assets/img/flags/ee.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'es' "> <img src="../assets/img/flags/es.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'hr' "> <img src="../assets/img/flags/hr.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'pl' "> <img src="../assets/img/flags/pl.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'dk' "> <img src="../assets/img/flags/dk.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'gr' "> <img src="../assets/img/flags/gr.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'ie' "> <img src="../assets/img/flags/ie.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'nl' "> <img src="../assets/img/flags/nl.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'fi' "> <img src="../assets/img/flags/fi.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'de' "> <img src="../assets/img/flags/de.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'hu' "> <img src="../assets/img/flags/hu.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'fr' "> <img src="../assets/img/flags/fr.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'se' "> <img src="../assets/img/flags/se.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'li' "> <img src="../assets/img/flags/li.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'no' "> <img src="../assets/img/flags/no.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'lt' "> <img src="../assets/img/flags/lt.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'lu' "> <img src="../assets/img/flags/lu.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'ro' "> <img src="../assets/img/flags/ro.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'md' "> <img src="../assets/img/flags/md.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'sk' "> <img src="../assets/img/flags/sk.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'si' "> <img src="../assets/img/flags/si.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'at' "> <img src="../assets/img/flags/at.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'lv' "> <img src="../assets/img/flags/lv.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'gb' "> <img src="../assets/img/flags/gb.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'mt' "> <img src="../assets/img/flags/mt.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'cy' "> <img src="../assets/img/flags/cy.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'bg' "> <img src="../assets/img/flags/bg.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'is' "> <img src="../assets/img/flags/is.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'rs' "> <img src="../assets/img/flags/rs.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'be' "> <img src="../assets/img/flags/be.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'ua' "> <img src="../assets/img/flags/ua.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'ch' "> <img src="../assets/img/flags/ch.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'it' "> <img src="../assets/img/flags/it.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <div v-else-if="searchevents[0].spatial === 'pt' "> <img src="../assets/img/flags/pt.png" width="30px" class="flag-icon-detail"> {{searchevents[0].description}}</div>
                      <!--- all v-else-if flags here -->
                      <div v-else><img src="../assets/img/eu_flag.svg" width="30px" class="flag-icon"> {{searchevents[0].description}}</div>
           <!-- <div v-if="searchevents[0].rating < 0.2 "> <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px"></div>
                      <div v-else-if="searchevents[0].rating < 0.4 && searchevents[0].rating > 0.2">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      </div>
                      <div v-else-if="searchevents[0].rating < 0.6 && searchevents[0].rating > 0.4">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      </div>
                      <div v-else-if="searchevents[0].rating < 0.8 && searchevents[0].rating > 0.6">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      </div>
                      <div v-else-if="searchevents[0].rating < 1 && searchevents[0].rating > 0.8">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      <img src="https://image.flaticon.com/icons/svg/148/148841.svg" width="10px">
                      </div>
                      <div v-else> no Rating </div>
                </div> -->
        </div>
        <!-- <div class="detail-sub-navigation">
        <router-link :to="'/' + this.name + ''" exact>
        <span class="detail-sub-nav-inactive">{{ $t("message.catalogue_detail.title") }}</span>
        </router-link>
        <router-link :to="'/' + this.name + '/distributions'" v-bind:title="title">
        <span class="detail-sub-nav-inactive"><span style="color:#9ba2a2">{</span>{{ $t("message.catalogue_detail.distributions.title") }}<span style="color:#9ba2a2">}<span class="badge badge-warning" id="badge">{{this.distributions}}</span></span></span>
        </router-link>
        <router-link :to="'/' + this.name + '/violations'">
          <span class="detail-sub-nav-inactive"><span style="color:#9ba2a2">{</span>{{ $t("message.catalogue_detail.violations.own_headline") }}<span style="color:#9ba2a2">}<span class="badge badge-warning" id="badge">{{this.violations}}</span></span></span>
        </router-link>
        </div> -->
         <!-- {{ $t("message.catalogue_detail.introduction") }} -->
         <detail-sub-nav :dist="this.searchevents[0].id"></detail-sub-nav>
       </div>
      </div>
    </div>
    <!-- Main Content -->
    <router-view :dist="this.searchevents[0].id" :access_badge="this.access_badge">
      {{this.$router.push({ query: { locale:`${$i18n.locale}` } }) }}
      {{this.access_badge}}
      </router-view>
    <router-view class="detail-content" name="a" :dist="this.searchevents[0].id" :access_badge="this.access_badge">
      {{this.$router.push({ query: { locale:`${$i18n.locale}`} }) }}
    </router-view>
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
  props: ['title', 'description', 'spatial'],
  data () {
    return {
      violations: 10,
      distributions: '122',
      loaded: false,
      loading: true,
      id: this.$route.params.id,
      name: this.$route.params.name,
      portals: [],
      filterValue: '',
      showError: false,
      access_badge: ''
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
      .finally(() => this.loading = true)
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

.router-link-active{
  font-weight: 500;
  color: black;
  font-size: 18px;
}
</style>
