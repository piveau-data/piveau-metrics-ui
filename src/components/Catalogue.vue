<template>
  <div class="catalogue">
    <div class="container" id="overview-intro">
      <div class="row">
        <!--
        <div class="col-sm"> git
          <div class="catalogue-intro">
          <h4>Download full Report</h4>
          <div class="download-full-report">
          <br>
          <button class="btn btn-link"> Portable Document Format (.pdf) </button><br>
          <button class="btn btn-link"> Open Document Spreadsheet (.ods)</button><br>
          <button class="btn btn-link"> Mircosoft Excel (.xls) </button> <br>
          </div>
         </div>
        </div> -->
        <div class="col-sm">
          <div class="catalogue_intro-section-text">
          <p>{{ $t("message.catalogue_list.description") }} </p>
           <!-- <search v-bind:portal_name="portal_name"></search> -->
           <!-- <client-search></client-search> -->
           <div class="filter-bar ui basic segment grid">
    <div class="ui form">
      <div class="inline field">
           <input type="text" class="form-control" v-model="search" :placeholder="$t('message.catalogue_list.search.placeholder')" >
      </div>
    </div>
  </div>
</div>
</div>
<div class="container" id="catalogue-table">
    <div class="row">
      <div class="col">
        <div class="table-responsive-sm">
        <div v-if="!isMobile() && !isExplorer()">
        <table class="table table-hover">
            <thead v-sticky sticky-side="top" id="sticky">
            <tr>
                <th v-on:click="sortTable(spatial)" class="table-title-catalogue" width="110px">
                   <span :class="{ 'active': sortColumn === spatial }">{{ $t("message.dashboard.overview.table_title.country") }}</span>
                   &nbsp;
                   <span :class="{ 'up': sortColumn === spatial & ascending === true}"></span>
                   <span :class="{ 'down': sortColumn === spatial & ascending === false}"></span>
                   <span class="hide">{{spatial}}</span>
                  </th>
                <th v-on:click="sortTableAsc(name)" class="table-title-catalogue" width="297px">
                   <span :class="{ 'active': sortColumn === name }">{{ $t("message.dashboard.overview.table_title.name") }}</span>
                   &nbsp;
                   <span :class="{ 'up': sortColumn === name & ascending === true}"></span>
                   <span :class="{ 'down': sortColumn === name & ascending === false}"></span>
                   <span class="hide">{{name}}</span>
                  </th>
                <th v-on:click="sortTable(description)" class="table-title-catalogue" width="403px">
                    <span :class="{ 'active': sortColumn === description }">{{ $t("message.dashboard.overview.table_title.desc") }}</span>
                    &nbsp;
                    <span :class="{ 'up': sortColumn === description & ascending === true}"></span>
                    <span :class="{ 'down': sortColumn === description & ascending === false}"></span>
                    <span class="hide">{{description}}</span>
                  </th>
            </tr>
            </thead>
            <tbody>
               <div v-if="this.loading === true" class="spinner-space"><div class="lds-ring" id="spinner-catalogue"><div></div><div></div><div></div><div></div></div>
               </div>
               <tr v-for="portal in filteredPortals" :key="portal.id">
                    <td class="spatial-row" width="110px">
                      <div v-if="portal.spatial === 'cz' "> <img src="../assets/img/flags/cz.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ee' "> <img src="../assets/img/flags/ee.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'es' "> <img src="../assets/img/flags/es.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'hr' "> <img src="../assets/img/flags/hr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'pl' "> <img src="../assets/img/flags/pl.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'dk' "> <img src="../assets/img/flags/dk.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'gr' "> <img src="../assets/img/flags/gr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ie' "> <img src="../assets/img/flags/ie.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'nl' "> <img src="../assets/img/flags/nl.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'fi' "> <img src="../assets/img/flags/fi.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'de' "> <img src="../assets/img/flags/de.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'hu' "> <img src="../assets/img/flags/hu.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'fr' "> <img src="../assets/img/flags/fr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'se' "> <img src="../assets/img/flags/se.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'li' "> <img src="../assets/img/flags/li.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'no' "> <img src="../assets/img/flags/no.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'lt' "> <img src="../assets/img/flags/lt.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'lu' "> <img src="../assets/img/flags/lu.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ro' "> <img src="../assets/img/flags/ro.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'md' "> <img src="../assets/img/flags/md.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'sk' "> <img src="../assets/img/flags/sk.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'si' "> <img src="../assets/img/flags/si.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'at' "> <img src="../assets/img/flags/at.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'lv' "> <img src="../assets/img/flags/lv.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'gb' "> <img src="../assets/img/flags/gb.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'mt' "> <img src="../assets/img/flags/mt.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'cy' "> <img src="../assets/img/flags/cy.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'bg' "> <img src="../assets/img/flags/bg.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'is' "> <img src="../assets/img/flags/is.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'rs' "> <img src="../assets/img/flags/rs.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'be' "> <img src="../assets/img/flags/be.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ua' "> <img src="../assets/img/flags/ua.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ch' "> <img src="../assets/img/flags/ch.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'it' "> <img src="../assets/img/flags/it.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'pt' "> <img src="../assets/img/flags/pt.png" width="30px" class="flag-icon"></div>
                      <!--- all v-else-if flags here -->
                      <div v-else><img src="../assets/img/eu_flag.svg" width="30px" class="flag-icon"> </div>
                      </td>
                    <td width="297px"><router-link :to="{ name: 'Detail', params: {id: portal.id, title: portal.title, spatial: portal.spatial, description: portal.description, name: portal.name}, query: { locale:`${$i18n.locale}`}}">{{portal.title}}<span v-if="portal.spatial != null"> ({{portal.spatial}})</span></router-link></td>
                    <td width="403px">{{portal.description }}</td>
                </tr>
            </tbody>
        </table>
        </div>
        <div v-else-if="isExplorer()">
          <table class="table table-hover">
            <thead>
            <tr>
                <th v-on:click="sortTable(spatial)" class="table-title-catalogue" width="110px">
                   <span :class="{ 'active': sortColumn === spatial }">{{ $t("message.dashboard.overview.table_title.country") }}</span>
                   &nbsp;
                   <span :class="{ 'up': sortColumn === spatial & ascending === true}"></span>
                   <span :class="{ 'down': sortColumn === spatial & ascending === false}"></span>
                   <span class="hide">{{spatial}}</span>
                  </th>
                <th v-on:click="sortTableAsc(name)" class="table-title-catalogue" width="297px">
                   <span :class="{ 'active': sortColumn === name }">{{ $t("message.dashboard.overview.table_title.name") }}</span>
                   &nbsp;
                   <span :class="{ 'up': sortColumn === name & ascending === true}"></span>
                   <span :class="{ 'down': sortColumn === name & ascending === false}"></span>
                   <span class="hide">{{name}}</span>
                  </th>
                <th v-on:click="sortTable(description)" class="table-title-catalogue" width="403px">
                    <span :class="{ 'active': sortColumn === description }">{{ $t("message.dashboard.overview.table_title.desc") }}</span>
                    &nbsp;
                    <span :class="{ 'up': sortColumn === description & ascending === true}"></span>
                    <span :class="{ 'down': sortColumn === description & ascending === false}"></span>
                    <span class="hide">{{description}}</span>
                  </th>
            </tr>
            </thead>
            <tbody>
               <div v-if="this.loading === true" class="spinner-space"><div class="lds-ring" id="spinner-catalogue"><div></div><div></div><div></div><div></div></div>
               </div>
               <tr v-for="portal in filteredPortals" :key="portal.id">
                    <td class="spatial-row" width="110px">
                      <div v-if="portal.spatial === 'cz' "> <img src="../assets/img/flags/cz.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ee' "> <img src="../assets/img/flags/ee.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'es' "> <img src="../assets/img/flags/es.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'hr' "> <img src="../assets/img/flags/hr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'pl' "> <img src="../assets/img/flags/pl.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'dk' "> <img src="../assets/img/flags/dk.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'gr' "> <img src="../assets/img/flags/gr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ie' "> <img src="../assets/img/flags/ie.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'nl' "> <img src="../assets/img/flags/nl.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'fi' "> <img src="../assets/img/flags/fi.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'de' "> <img src="../assets/img/flags/de.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'hu' "> <img src="../assets/img/flags/hu.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'fr' "> <img src="../assets/img/flags/fr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'se' "> <img src="../assets/img/flags/se.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'li' "> <img src="../assets/img/flags/li.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'no' "> <img src="../assets/img/flags/no.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'lt' "> <img src="../assets/img/flags/lt.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'lu' "> <img src="../assets/img/flags/lu.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ro' "> <img src="../assets/img/flags/ro.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'md' "> <img src="../assets/img/flags/md.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'sk' "> <img src="../assets/img/flags/sk.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'si' "> <img src="../assets/img/flags/si.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'at' "> <img src="../assets/img/flags/at.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'lv' "> <img src="../assets/img/flags/lv.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'gb' "> <img src="../assets/img/flags/gb.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'mt' "> <img src="../assets/img/flags/mt.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'cy' "> <img src="../assets/img/flags/cy.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'bg' "> <img src="../assets/img/flags/bg.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'is' "> <img src="../assets/img/flags/is.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'rs' "> <img src="../assets/img/flags/rs.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'be' "> <img src="../assets/img/flags/be.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ua' "> <img src="../assets/img/flags/ua.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ch' "> <img src="../assets/img/flags/ch.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'it' "> <img src="../assets/img/flags/it.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'pt' "> <img src="../assets/img/flags/pt.png" width="30px" class="flag-icon"></div>
                      <!--- all v-else-if flags here -->
                      <div v-else><img src="../assets/img/eu_flag.svg" width="30px" class="flag-icon"> </div>
                      </td>
                    <td width="297px"><router-link :to="{ name: 'Detail', params: {id: portal.id, title: portal.title, spatial: portal.spatial, description: portal.description, name: portal.name} , query: { locale:`${$i18n.locale}`}}">{{portal.title}}<span v-if="portal.spatial != null"> ({{portal.spatial}})</span></router-link></td>
                    <td width="403px">{{portal.description }}</td>
                </tr>
            </tbody>
        </table>
        </div>
        <div v-else>
        <table class="table">
          <thead>
            <tr>
                <th @click="sort('spatial')"> {{ $t("message.dashboard.overview.table_title.country") }}</th>
                <th @click="sort('name')"> {{ $t("message.dashboard.overview.table_title.name") }}</th>
            </tr>
            </thead>
            <tbody>
               <div v-if="this.loading === true" class="spinner-space"><div class="lds-ring" id="spinner-catalogue"><div></div><div></div><div></div><div></div></div>
               </div>
               <tr v-for="portal in sortedPortals" :key="portal.id">
                    <td>
                      <div v-if="portal.spatial === 'cz' "> <img src="../assets/img/flags/cz.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ee' "> <img src="../assets/img/flags/ee.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'es' "> <img src="../assets/img/flags/es.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'hr' "> <img src="../assets/img/flags/hr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'pl' "> <img src="../assets/img/flags/pl.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'dk' "> <img src="../assets/img/flags/dk.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'gr' "> <img src="../assets/img/flags/gr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ie' "> <img src="../assets/img/flags/ie.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'nl' "> <img src="../assets/img/flags/nl.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'fi' "> <img src="../assets/img/flags/fi.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'de' "> <img src="../assets/img/flags/de.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'hu' "> <img src="../assets/img/flags/hu.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'fr' "> <img src="../assets/img/flags/fr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'se' "> <img src="../assets/img/flags/se.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'li' "> <img src="../assets/img/flags/li.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'no' "> <img src="../assets/img/flags/no.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'lt' "> <img src="../assets/img/flags/lt.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'lu' "> <img src="../assets/img/flags/lu.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ro' "> <img src="../assets/img/flags/ro.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'md' "> <img src="../assets/img/flags/md.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'sk' "> <img src="../assets/img/flags/sk.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'si' "> <img src="../assets/img/flags/si.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'at' "> <img src="../assets/img/flags/at.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'lv' "> <img src="../assets/img/flags/lv.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'gb' "> <img src="../assets/img/flags/gb.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'mt' "> <img src="../assets/img/flags/mt.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'cy' "> <img src="../assets/img/flags/cy.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'bg' "> <img src="../assets/img/flags/bg.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'is' "> <img src="../assets/img/flags/is.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'rs' "> <img src="../assets/img/flags/rs.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'be' "> <img src="../assets/img/flags/be.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ua' "> <img src="../assets/img/flags/ua.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'ch' "> <img src="../assets/img/flags/ch.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'it' "> <img src="../assets/img/flags/it.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="portal.spatial === 'pt' "> <img src="../assets/img/flags/pt.png" width="30px" class="flag-icon"></div>
                      <!--- all v-else-if flags here -->
                      <div v-else>  <img src="../assets/img/eu_flag.svg" width="30px" class="flag-icon"> </div>
                      </td>
                    <td><router-link :to="{ name: 'Detail', params: {id: portal.id, title: portal.title, spatial: portal.spatial, description: portal.description, name: portal.name}, query: { locale:`${$i18n.locale}`}}">{{portal.title}}<span v-if="portal.spatial != null">({{portal.spatial}})</span></router-link></td>
                </tr>
            </tbody>
         </table>
        </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>
</div>
</template>
<script>
/* eslint-disable */
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VueEvents from 'vue-events'
import Vue from 'vue'
import axios from 'axios'
import Sticky from 'vue-sticky-directive'
// import CubeSpin from 'vue-loading-spinner/src/components/circle2'

Vue.use(VueEvents)

export default {
  components: {
  },
   directives: {
    Sticky
  },
  data () {
    return {
      ascending: true,
      sortColumn: '',
      loaded: false,
      loading: true,
      spatial: 'spatial',
      search: '',
      currentSort:'name',
      name: 'name',
      description: 'description',
      currentSortDir:'asc',
      portals: [],
      catalogues: null,
      success: {},
      info: null,
      showError: false,
      errorMessage: 'No Data availale',
      catalogue: true
    }
  },
  mounted () {
       axios
      .get(this.$env.ROOT_API + '/info/catalogues',{ auth: {
        username: this.$env.USERNAME_ENV,
        password: this.$env.PASSWORD_ENV
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (
        this.portals = response.data.result,
        this.success = response.data.success,
        this.loading = false,
        this.sortTableAsc(this.name),
        this.AddEU(this.portals)
        )
      )
      .catch(error => {
        // console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  methods: {
    sort: function (s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'? 'desc':'asc'
      }
      this.currentSort = s
    },
    isMobile () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    isExplorer () {
      if (navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1 || window.navigator.userAgent.indexOf("Edge") > -1) {
        //  alert ('It is InternetExplorer')
        return true
       }else{
        //  alert('It is NOT InternetExplorer')
        return false
      }
    },
    sortTable: function (x) {
      if (this.sortColumn === x) {
        this.ascending = !this.ascending
      } else {
        this.ascending = false
        this.sortColumn = x
      }
      var ascending = this.ascending
      this.portals.sort(function (a, b) {
        if (a[x] > b[x]) {
          return ascending ? 1 : -1
        } else if (a[x] < b[x]) {
          return ascending ? -1 : 1
        }
        return 0
      })
    },
    sortTableAsc: function (x) {
      if (this.sortColumn === x) {
        this.ascending = !this.ascending
      } else {
        this.ascending = true
        this.sortColumn = x
      }
      var ascending = this.ascending
      this.portals.sort(function (a, b) {
        if (a[x] > b[x]) {
          return ascending ? 1 : -1
        } else if (a[x] < b[x]) {
          return ascending ? -1 : 1
        }
        return 0
      })
    },
      AddEU (arr) {
      for (var x = 0; x < arr.length; x++) {
        if (this.portals[x].spatial === null) {
          Vue.set(this.portals[x], 'spatial', 'EU')
        } else {
        }
      }
      // console.log('addEU')
      return arr
    },
  },
  computed: {
    filteredPortals: function () {
      var matcher = new RegExp(this.search, 'i')
      return this.portals.filter(function (portal) {
        return matcher.test([portal.title, portal.id, portal.description, portal.spatial])
      })
    },
    sortedPortals2: function () {
      return this.filteredPortals
    },
    sortedPortals: function () {
      return this.filteredPortals.sort((a, b) => {
        let modifier = 1
        if (this.currentSortDir === 'desc') modifier = -1
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier
        return 0
      })
    } // https://www.raymondcamden.com/2018/02/08/building-table-sorting-and-pagination-in-vuejs
  }
}
</script>

<style scoped>
.hide{
  visibility: hidden;
  font-size: 0px;
}

#demoSpacer{
  margin-top:1000px;
}

.active{
   text-decoration: none;
}
.down {
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-bottom:3px
}
.up {
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  margin-bottom:1px
}
</style>
