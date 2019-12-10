<template>
        <div class="table" id="overview-table">
          <div class="row">
          <div v-if="this.rows === 100" class="col-sm" id="table-headline">
           {{ $t("message.common.all") }} {{ $t("message.navigation.catalogues") }}
          </div>
          <div v-else-if="this.rows === 20" id="table-headline" class="col-sm" >
           Top {{this.rows}} {{ $t("message.navigation.catalogues") }}
          </div>
          <div v-else id="table-headline" class="col-sm">
           Top {{this.rows}} {{ $t("message.navigation.catalogues") }}
          </div>
          <div  class="col-sm" >
          <div class="overview-filter">
          <button class="btn btn-light btn-sm" v-on:click="showMore(12)" :class="{ 'active': this.rows == 12 || null}">Top 12</button>
          <button class="btn btn-light btn-sm" v-on:click="showMore(20)" :class="{ 'active': this.rows == 20}">Top 20</button>
          <button class="btn btn-light btn-sm" v-on:click="showMore(100)" :class="{ 'active': this.rows == 100}">{{ $t("message.common.all") }} {{ $t("message.navigation.catalogues") }}</button>
          </div>
          </div>
          </div>
          <!-- {{isExplorer()}} -->
          <div v-if="!isMobile() && !isExplorer()">
              <table class="table table-hover">
              <thead v-sticky sticky-side="top" id="sticky"> <!-- v-sticky sticky-side="top" id="sticky" -->
                <tr>
                  <th v-on:click="sortTable(spatial)" class="overview-row-left" width="90px">
                    <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
                      <span class="hide">{{spatial}} </span>
                      <span :class="{ 'active': sortColumn === spatial }">{{ $t("message.dashboard.overview.table_title.country") }}</span>
                      &nbsp;
                      <span :class="{ 'up': sortColumn === spatial & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === spatial & ascending === false}"></span>
                      </span>
                  </th>
                  <th v-on:click="sortTable(name)" class="overview-row-name" width="170px">
                      <span class="hide">{{name}} </span>
                      <span :class="{ 'active': sortColumn === name }">{{ $t("message.dashboard.overview.table_title.name") }}</span>
                      &nbsp;
                      <span :class="{ 'up': sortColumn === name & ascending === true }"></span>
                      <span :class="{ 'down': sortColumn === name & ascending === false}"></span>
                  </th>
                  <th v-on:click="sortTable(sortAccessUrl)" class="overview-row" width="100px">
                      <span v-tooltip.top-center="$t('message.dashboard.overview.table_tooltip.accessibility_access_url')">
                      <div class="table-title">
                      <span :class="{ 'active': sortColumn === sortAccessUrl }">{{$t("message.dashboard.overview.table_title.accessibility_access_url") }}<span class="hide">{{sortAccessUrl}}</span></span>
                      </div>
                      <div class="sort-arrow">
                      <span :class="{ 'up': sortColumn === sortAccessUrl & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortAccessUrl & ascending === false}"></span>
                      </div>
                      </span>
                  </th>
                  <th v-on:click="sortTable(sortMr)" class="overview-row" width="100px">
                    <span v-tooltip.top-center="$t('message.dashboard.overview.table_tooltip.machine_readability')">
                      <div class="table-title">
                      <span  :class="{ 'active': sortColumn === sortMr }">{{ $t("message.dashboard.machine_readability.own_headline") }}</span> <span class="hide">{{sortMr}}</span>
                      </div>
                      <div class="sort-arrow">
                      <span :class="{ 'up': sortColumn === sortMr & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortMr & ascending === false}"></span>
                      </div>
                      </span>
                      </th>
                  <th v-on:click="sortTable(sortDcatAp)" class="overview-row" width="100px">
                    <span v-tooltip.top-center="$t('message.dashboard.overview.table_tooltip.dcat_ap')">
                      <div class="table-title">
                      <span :class="{ 'active': sortColumn === sortDcatAp }">{{ $t("message.dashboard.overview.table_title.dcat_ap") }}</span><span class="hide">{{sortDcatAp}}</span>
                      </div>
                      <div class="sort-arrow">
                      <span :class="{ 'up': sortColumn === sortDcatAp & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortDcatAp & ascending === false}"></span>
                      </div>
                      </span>
                  </th>
                  <th v-on:click="sortTable(sortKnownLicence)" class="overview-row" width="100px">
                      <span v-tooltip.top-center="$t('message.dashboard.overview.table_tooltip.known_licenses')">
                      <div class="table-title">
                      <span :class="{ 'active': sortColumn === sortKnownLicence }">{{ $t("message.dashboard.overview.table_title.known_licences") }}</span><span class="hide">{{sortKnownLicence}}</span>
                      </div>
                      <div class="sort-arrow">
                      <span :class="{ 'up': sortColumn === sortKnownLicence & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortKnownLicence & ascending === false}"></span>
                      </div>
                      </span>
                  </th>
                    <th v-on:click="sortTable(sortAccessDlUrl)" class="overview-row" width="100px" id="table-not-necs">
                     <span v-tooltip.top-center="$t('message.dashboard.overview.table_tooltip.accessibility_download_url')">
                      <div class="table-title">
                      <span :class="{ 'active': sortColumn === sortAccessDlUrl }"><span class="hide">{{sortAccessDlUrl}}</span>{{ $t("message.dashboard.overview.table_title.accessibility_download_url") }}</span>
                      </div>
                      <div class="sort-arrow">
                      <span :class="{ 'up': sortColumn === sortAccessDlUrl & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortAccessDlUrl & ascending === false}"></span>
                      </div>
                      </span>
                  </th>
                </tr>
              </thead>
              <tbody>
               <div v-if="this.loading === true" class="lds-ring" id="spinner-overview"><div></div><div></div><div></div><div></div></div>
                <tr v-for="row in portals.slice(0, rows)" :key="row.id" >
                   <td class="spatial-row" width="90px">
                      <div v-if="row.spatial === 'cz' "> <img src="../assets/img/flags/cz.png" width="30px" class="flag-icon">  </div>
                      <div v-else-if="row.spatial === 'ee' "> <img src="../assets/img/flags/ee.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'es' "> <img src="../assets/img/flags/es.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'hr' "> <img src="../assets/img/flags/hr.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'pl' "> <img src="../assets/img/flags/pl.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'dk' "> <img src="../assets/img/flags/dk.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'gr' "> <img src="../assets/img/flags/gr.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'ie' "> <img src="../assets/img/flags/ie.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'nl' "> <img src="../assets/img/flags/nl.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'fi' "> <img src="../assets/img/flags/fi.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'de' "> <img src="../assets/img/flags/de.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'hu' "> <img src="../assets/img/flags/hu.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'fr' "> <img src="../assets/img/flags/fr.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'se' "> <img src="../assets/img/flags/se.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'li' "> <img src="../assets/img/flags/li.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'no' "> <img src="../assets/img/flags/no.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'lt' "> <img src="../assets/img/flags/lt.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'lu' "> <img src="../assets/img/flags/lu.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'ro' "> <img src="../assets/img/flags/ro.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'md' "> <img src="../assets/img/flags/md.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'sk' "> <img src="../assets/img/flags/sk.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'si' "> <img src="../assets/img/flags/si.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'at' "> <img src="../assets/img/flags/at.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'lv' "> <img src="../assets/img/flags/lv.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'gb' "> <img src="../assets/img/flags/gb.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'mt' "> <img src="../assets/img/flags/mt.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'cy' "> <img src="../assets/img/flags/cy.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'bg' "> <img src="../assets/img/flags/bg.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'is' "> <img src="../assets/img/flags/is.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'rs' "> <img src="../assets/img/flags/rs.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'be' "> <img src="../assets/img/flags/be.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'ua' "> <img src="../assets/img/flags/ua.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'ch' "> <img src="../assets/img/flags/ch.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'it' "> <img src="../assets/img/flags/it.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'pt' "> <img src="../assets/img/flags/pt.png" width="30px" class="flag-icon"> </div>
                      <!--- all v-else-if flags here -->
                      <div v-else> <img src="../assets/img/eu_flag.svg" width="30px" class="flag-icon"></div>
                    </td>
                  <td width="180px"><router-link :to="{ name: 'Detail', params: {id: row.id, title: row.title, spatial: row.spatial, description: row.description, name: row.name, rating: row.rating}, query: { locale:`${$i18n.locale}` }} ">{{row.title}} <span v-if="row.spatial != null">({{row.spatial}})</span></router-link></td>
                  <td width="100px">
                    <div v-if="row.sortAccessUrl == -1" class="overview-row"> <img src="../assets/img/na_4.png" height="35px"> </div>
                    <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortAccessUrl)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortAccessUrl +'%'"> </div>
                             </div>
                          </div>
                         </td>
                  <td width="100px">
                     <div v-if="row.sortMr == -1" class="overview-row"> <img src="../assets/img/na_4.png" height="35px"></div>
                     <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortMr)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortMr +'%'"> </div>
                             </div>
                          </div>
                         </td>
                  <td width="100px">
                     <!-- <div v-if="row.sortDcatAp == 100" class="overview-row"> <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width: 100%'"> </div>
                             </div> </div> -->
                               <div v-if="row.sortDcatAp == -1" class="overview-row"> <img src="../assets/img/na_4.png" height="35px">  </div>
                     <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortDcatAp)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortDcatAp +'%'"> </div>
                             </div>
                          </div>
                         </td>
                  <td width="100px">
                        <div v-if="row.sortKnownLicence == -1" class="overview-row"> <img src="../assets/img/na_4.png" height="35px"> </div>
                       <div v-else  class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortKnownLicence)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortKnownLicence +'%'"> </div>
                             </div>
                          </div>
                    </td>
                     <td width="100px" id="table-not-necs">
                     <div v-if="row.sortAccessDlUrl == -1" class="overview-row"> <img src="../assets/img/na_4.png" height="35px"> </div>
                     <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortAccessDlUrl)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortAccessDlUrl +'%'"> </div>
                             </div>
                          </div>
                    </td>
                </tr>
              </tbody>
            </table>
            </div>
            <div v-else-if="!isMobile() && isExplorer()">
              <table class="table table-hover">
              <thead> <!-- v-sticky sticky-side="top" id="sticky" -->
                <tr>
                  <th v-on:click="sortTable(spatial)" class="overview-row-left" width="90px">
                    <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
                      <span class="hide">{{spatial}} </span>
                      <span :class="{ 'active': sortColumn === spatial }">{{ $t("message.dashboard.overview.table_title.country") }}</span>
                      &nbsp;
                      <span :class="{ 'up': sortColumn === spatial & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === spatial & ascending === false}"></span>
                      </span>
                  </th>
                  <th v-on:click="sortTable(name)" class="overview-row-name" width="170px">
                      <span class="hide">{{name}} </span>
                      <span :class="{ 'active': sortColumn === name }">{{ $t("message.dashboard.overview.table_title.name") }}</span>
                      &nbsp;
                      <span :class="{ 'up': sortColumn === name & ascending === true }"></span>
                      <span :class="{ 'down': sortColumn === name & ascending === false}"></span>
                  </th>
                  <th v-on:click="sortTable(sortAccessUrl)" class="overview-row" width="100px">
                      <span v-tooltip.top-center="$t('message.dashboard.overview.table_tooltip.accessibility_access_url')">
                      <div class="table-title">
                      <span :class="{ 'active': sortColumn === sortAccessUrl }">{{$t("message.dashboard.overview.table_title.accessibility_access_url") }}<span class="hide">{{sortAccessUrl}}</span></span>
                      </div>
                      <div class="sort-arrow">
                      <span :class="{ 'up': sortColumn === sortAccessUrl & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortAccessUrl & ascending === false}"></span>
                      </div>
                      </span>
                  </th>
                  <th v-on:click="sortTable(sortMr)" class="overview-row" width="100px">
                    <span v-tooltip.top-center="$t('message.dashboard.overview.table_tooltip.machine_readability')">
                      <div class="table-title">
                      <span  :class="{ 'active': sortColumn === sortMr }">{{ $t("message.dashboard.machine_readability.own_headline") }}</span> <span class="hide">{{sortMr}}</span>
                      </div>
                      <div class="sort-arrow">
                      <span :class="{ 'up': sortColumn === sortMr & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortMr & ascending === false}"></span>
                      </div>
                      </span>
                      </th>
                  <th v-on:click="sortTable(sortDcatAp)" class="overview-row" width="100px">
                    <span v-tooltip.top-center="$t('message.dashboard.overview.table_tooltip.dcat_ap')">
                      <div class="table-title">
                      <span :class="{ 'active': sortColumn === sortDcatAp }">{{ $t("message.dashboard.overview.table_title.dcat_ap") }}</span><span class="hide">{{sortDcatAp}}</span>
                      </div>
                      <div class="sort-arrow">
                      <span :class="{ 'up': sortColumn === sortDcatAp & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortDcatAp & ascending === false}"></span>
                      </div>
                      </span>
                  </th>
                  <th v-on:click="sortTable(sortKnownLicence)" class="overview-row" width="100px">
                      <span v-tooltip.top-center="$t('message.dashboard.overview.table_tooltip.known_licenses')">
                      <div class="table-title">
                      <span :class="{ 'active': sortColumn === sortKnownLicence }">{{ $t("message.dashboard.overview.table_title.known_licences") }}</span><span class="hide">{{sortKnownLicence}}</span>
                      </div>
                      <div class="sort-arrow">
                      <span :class="{ 'up': sortColumn === sortKnownLicence & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortKnownLicence & ascending === false}"></span>
                      </div>
                      </span>
                  </th>
                    <th v-on:click="sortTable(sortAccessDlUrl)" class="overview-row" width="100px" id="table-not-necs">
                     <span v-tooltip.top-center="$t('message.dashboard.overview.table_tooltip.accessibility_download_url')">
                      <div class="table-title">
                      <span :class="{ 'active': sortColumn === sortAccessDlUrl }"><span class="hide">{{sortAccessDlUrl}}</span>{{ $t("message.dashboard.overview.table_title.accessibility_download_url") }}</span>
                      </div>
                      <div class="sort-arrow">
                      <span :class="{ 'up': sortColumn === sortAccessDlUrl & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortAccessDlUrl & ascending === false}"></span>
                      </div>
                      </span>
                  </th>
                </tr>
              </thead>
              <tbody>
               <div v-if="this.loading === true" class="lds-ring" id="spinner-overview"><div></div><div></div><div></div><div></div></div>
                <tr v-for="row in portals.slice(0, rows)" :key="row.id" >
                   <td class="spatial-row" width="90px">
                      <div v-if="row.spatial === 'cz' "> <img src="../assets/img/flags/cz.png" width="30px" class="flag-icon">  </div>
                      <div v-else-if="row.spatial === 'ee' "> <img src="../assets/img/flags/ee.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'es' "> <img src="../assets/img/flags/es.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'hr' "> <img src="../assets/img/flags/hr.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'pl' "> <img src="../assets/img/flags/pl.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'dk' "> <img src="../assets/img/flags/dk.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'gr' "> <img src="../assets/img/flags/gr.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'ie' "> <img src="../assets/img/flags/ie.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'nl' "> <img src="../assets/img/flags/nl.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'fi' "> <img src="../assets/img/flags/fi.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'de' "> <img src="../assets/img/flags/de.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'hu' "> <img src="../assets/img/flags/hu.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'fr' "> <img src="../assets/img/flags/fr.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'se' "> <img src="../assets/img/flags/se.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'li' "> <img src="../assets/img/flags/li.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'no' "> <img src="../assets/img/flags/no.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'lt' "> <img src="../assets/img/flags/lt.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'lu' "> <img src="../assets/img/flags/lu.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'ro' "> <img src="../assets/img/flags/ro.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'md' "> <img src="../assets/img/flags/md.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'sk' "> <img src="../assets/img/flags/sk.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'si' "> <img src="../assets/img/flags/si.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'at' "> <img src="../assets/img/flags/at.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'lv' "> <img src="../assets/img/flags/lv.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'gb' "> <img src="../assets/img/flags/gb.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'mt' "> <img src="../assets/img/flags/mt.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'cy' "> <img src="../assets/img/flags/cy.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'bg' "> <img src="../assets/img/flags/bg.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'is' "> <img src="../assets/img/flags/is.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'rs' "> <img src="../assets/img/flags/rs.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'be' "> <img src="../assets/img/flags/be.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'ua' "> <img src="../assets/img/flags/ua.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'ch' "> <img src="../assets/img/flags/ch.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'it' "> <img src="../assets/img/flags/it.png" width="30px" class="flag-icon"> </div>
                      <div v-else-if="row.spatial === 'pt' "> <img src="../assets/img/flags/pt.png" width="30px" class="flag-icon"> </div>
                      <!--- all v-else-if flags here -->
                      <div v-else> <img src="../assets/img/eu_flag.svg" width="30px" class="flag-icon"></div>
                    </td>
                  <td width="180px"><router-link :to="{ name: 'Detail', params: {id: row.id, title: row.title, spatial: row.spatial, description: row.description, name: row.name, rating: row.rating} }">{{row.title}} <span v-if="row.spatial != null">({{row.spatial}})</span></router-link></td>
                  <td width="100px">
                    <div v-if="row.sortAccessUrl == -1" class="overview-row"> <img src="../assets/img/na_4.png" height="35px"> </div>
                    <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortAccessUrl)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortAccessUrl +'%'"> </div>
                             </div>
                          </div>
                         </td>
                  <td width="100px">
                     <div v-if="row.sortMr == -1" class="overview-row"> <img src="../assets/img/na_4.png" height="35px"></div>
                     <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortMr)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortMr +'%'"> </div>
                             </div>
                          </div>
                         </td>
                  <td width="100px">
                     <!-- <div v-if="row.sortDcatAp == 100" class="overview-row"> <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width: 100%'"> </div>
                             </div> </div> -->
                               <div v-if="row.sortDcatAp == -1" class="overview-row"> <img src="../assets/img/na_4.png" height="35px">  </div>
                     <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortDcatAp)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortDcatAp +'%'"> </div>
                             </div>
                          </div>
                         </td>
                  <td width="100px">
                        <div v-if="row.sortKnownLicence == -1" class="overview-row"> <img src="../assets/img/na_4.png" height="35px"> </div>
                       <div v-else  class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortKnownLicence)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortKnownLicence +'%'"> </div>
                             </div>
                          </div>
                    </td>
                     <td width="100px" id="table-not-necs">
                     <div v-if="row.sortAccessDlUrl == -1" class="overview-row"> <img src="../assets/img/na_4.png" height="35px"> </div>
                     <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortAccessDlUrl)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortAccessDlUrl +'%'"> </div>
                             </div>
                          </div>
                    </td>
                </tr>
              </tbody>
            </table>
            </div>
            <div v-else>
                <table class="table">
              <thead>
                <tr>
                  <th v-on:click="sortTable(spatial)" class="overview-row-left">
                      <span class="hide">{{spatial}} </span>
                      <span :class="{ 'active': sortColumn === spatial }"> {{ $t("message.dashboard.overview.table_title.country") }}</span>
                      &nbsp;
                      <span :class="{ 'up': sortColumn === spatial & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === spatial & ascending === false}"></span>
                  </th>
                  <th v-on:click="sortTable(name)" class="overview-row-left">
                      <span class="hide">{{name}} </span>
                      <span :class="{ 'active': sortColumn === name }"> {{ $t("message.dashboard.overview.table_title.name") }}</span>
                      &nbsp;
                      <span :class="{ 'up': sortColumn === name & ascending === true }"></span>
                      <span :class="{ 'down': sortColumn === name & ascending === false}"></span>
                  </th>
                  <th v-on:click="sortTable(sortAccessUrl)" class="overview-row">
                      <span class="hide">{{sortAccessUrl}}</span>
                      <span :class="{ 'up': sortColumn === sortAccessUrl & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortAccessUrl & ascending === false}"></span><br>
                      <span :class="{ 'active': sortColumn === sortAccessUrl }"> {{ $t("message.dashboard.overview.table_title.accessibility_access_url") }}</span>
                  </th>
                  <!-- <th v-on:click="sortTable(sortAccessDlUrl)" class="overview-row">
                      <span class="hide">{{sortAccessDlUrl}}</span>
                      <span :class="{ 'up': sortColumn === sortAccessDlUrl & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortAccessDlUrl & ascending === false}"></span><br>
                      <span :class="{ 'active': sortColumn === sortAccessDlUrl }">{{ $t("message.dashboard.overview.table_title.accessibility_download_url") }}</span>
                  </th>
                  <th v-on:click="sortTable(sortMr)" class="overview-row">
                      <span class="hide">{{sortMr}}</span>
                      <span :class="{ 'up': sortColumn === sortMr & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortMr & ascending === false}"></span><br>
                      <span  :class="{ 'active': sortColumn === sortMr }"> {{ $t("message.dashboard.machine_readability.own_headline") }}</span>
                      </th>
                  <th v-on:click="sortTable(sortDcatAp)" class="overview-row">
                      <span class="hide">{{sortDcatAp}}</span>
                      <span :class="{ 'up': sortColumn === sortDcatAp & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortDcatAp & ascending === false}"></span><br>
                      <span :class="{ 'active': sortColumn === sortDcatAp }"> {{ $t("message.dashboard.overview.table_title.dcat_ap") }}</span>
                  </th>
                  <th v-on:click="sortTable(sortKnownLicence)" class="overview-row">
                      <span class="hide">{{sortKnownLicence}}</span>
                      <span :class="{ 'up': sortColumn === sortKnownLicence & ascending === true}"></span>
                      <span :class="{ 'down': sortColumn === sortKnownLicence & ascending === false}"></span><br>
                      <span :class="{ 'active': sortColumn === sortKnownLicence }"> {{ $t("message.dashboard.overview.table_title.known_licences") }}</span>
                  </th> -->
                </tr>
              </thead>
              <tbody>
               <div v-if="this.loading === true" class="lds-ring" id="spinner-overview"><div></div><div></div><div></div><div></div></div>
                <tr v-for="row in portals.slice(0, this.rows)" :key="row.id">
                   <td class="spatial-row"  width="30px">
                      <div v-if="row.spatial === 'cz' "> <img src="../assets/img/flags/cz.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'ee' "> <img src="../assets/img/flags/ee.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'es' "> <img src="../assets/img/flags/es.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'hr' "> <img src="../assets/img/flags/hr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'pl' "> <img src="../assets/img/flags/pl.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'dk' "> <img src="../assets/img/flags/dk.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'gr' "> <img src="../assets/img/flags/gr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'ie' "> <img src="../assets/img/flags/ie.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'nl' "> <img src="../assets/img/flags/nl.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'fi' "> <img src="../assets/img/flags/fi.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'de' "> <img src="../assets/img/flags/de.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'hu' "> <img src="../assets/img/flags/hu.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'fr' "> <img src="../assets/img/flags/fr.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'se' "> <img src="../assets/img/flags/se.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'li' "> <img src="../assets/img/flags/li.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'no' "> <img src="../assets/img/flags/no.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'lt' "> <img src="../assets/img/flags/lt.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'lu' "> <img src="../assets/img/flags/lu.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'ro' "> <img src="../assets/img/flags/ro.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'md' "> <img src="../assets/img/flags/md.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'sk' "> <img src="../assets/img/flags/sk.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'si' "> <img src="../assets/img/flags/si.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'at' "> <img src="../assets/img/flags/at.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'lv' "> <img src="../assets/img/flags/lv.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'gb' "> <img src="../assets/img/flags/gb.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'mt' "> <img src="../assets/img/flags/mt.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'cy' "> <img src="../assets/img/flags/cy.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'bg' "> <img src="../assets/img/flags/bg.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'is' "> <img src="../assets/img/flags/is.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'rs' "> <img src="../assets/img/flags/rs.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'be' "> <img src="../assets/img/flags/be.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'ua' "> <img src="../assets/img/flags/ua.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'ch' "> <img src="../assets/img/flags/ch.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'it' "> <img src="../assets/img/flags/it.png" width="30px" class="flag-icon"></div>
                      <div v-else-if="row.spatial === 'pt' "> <img src="../assets/img/flags/pt.png" width="30px" class="flag-icon"></div>
                      <!--- all v-else-if flags here -->
                      <div v-else>  <img src="../assets/img/eu_flag.svg" width="30px" class="flag-icon"></div>
                    </td>
                  <td><router-link :to="{ name: 'Detail', params: {id: row.id, title: row.title, spatial: row.spatial, description: row.description, name: row.name, rating: row.rating} }">{{row.title}}</router-link></td>
                  <td width="115px">
                    <div v-if="row.sortAccessUrl == -1" class="overview-row"> <p id="nodata">-</p> </div>
                    <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortAccessUrl)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortAccessUrl +'%'"> </div>
                             </div>
                          </div>
                         </td>
                  <!-- <td width="115px">
                     <div v-if="row.sortAccessDlUrl == -1" class="overview-row"> <p id="nodata">-</p> </div>
                     <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortAccessDlUrl)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortAccessDlUrl +'%'"> </div>
                             </div>
                          </div>
                         </td>
                  <td width="115px">
                     <div v-if="row.sortMr == -1" class="overview-row"> <p id="nodata">-</p> </div>
                     <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortMr)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortMr +'%'"> </div>
                             </div>
                          </div>
                         </td>
                  <td width="115px">
                     <div v-if="row.sortDcatAp == -1" class="overview-row"> <p id="nodata">-</p> </div>
                     <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortDcatAp)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortDcatAp +'%'"> </div>
                             </div>
                          </div>
                         </td>
                  <td width="115px">
                        <div v-if="row.sortKnownLicence == -1" class="overview-row"> <p id="nodata">-</p> </div>
                       <div v-else class="overview-row">
                         <span id="access-overview">{{Math.round(row.sortKnownLicence)}} % </span>
                          <div class="progress" style="height: 4px;">
                             <div class="progress-bar" role="progressbar" :style="'width:'+row.sortKnownLicence +'%'"> </div>
                             </div>
                          </div>
                    </td> -->
                </tr>
              </tbody>
            </table>
          </div>
       </div>
</template>
<script>
import VueEvents from 'vue-events'
import Vue from 'vue'
import axios from 'axios'
import Sticky from 'vue-sticky-directive' // new Module > Build problem?
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
Vue.use(VueEvents)

export default {
  components: {
  },
  directives: {
    Sticky
  },
  data () {
    return {
      loading: true,
      isActive: false,
      isLoading: true,
      portals: [],
      ascending: true,
      sortColumn: '',
      spatial: 'spatial',
      rating: 'rating',
      sortAccessUrl: 'sortAccessUrl',
      sortAccessDlUrl: 'sortAccessDlUrl',
      sortMr: 'sortMr',
      sortDcatAp: 'sortDcatAp',
      sortKnownLicence: 'sortKnownLicence',
      title: 'title',
      id: 'id',
      rows: '12',
      name: 'name',
      msg: 'tet'
    }
  },
  mounted () {
    // this.addSortableAccessDlUrl(this.portals)
    // this.addSortableAccessUrl(this.portals)
    // this.addSortableMr(this.portals)
    // this.addSortableDcatAp(this.portals)
    // this.addSortableKnwonLicence(this.portals)
    this.sortTableStart(this.spatial) // Default Sorting Arrow
    // var username = 'odportal'
    // var password = 'odp0rt4l$12'
    // axios
    //   .get(this.$env.ROOT_API + '/info/catalogues', { auth: {
    //     username: username,
    //     password: password
    //   },
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   }
    //   })
    //   // eslint-disable-next-line
    //   .then(response => (
    //     // eslint-disable-next-line
    //     this.portals = response.data.result,
    //     // eslint-disable-next-line
    //     this.success = response.data.success,
    //     this.loading = false
    //   )
    //   )
    //   .catch(error => {
    //     console.log(error)
    //     this.errored = true
    //   })
    //   // eslint-disable-next-line
    //   .finally(() => this.loading = false)
  },
  methods: {
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
    sortTableStart: function (x) {
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
    activate: function (el) {
      this.active_el = el
    },
    init () {
      this.addSortableAccessDlUrl(this.portals)
      this.addSortableAccessUrl(this.portals)
      this.addSortableMr(this.portals)
      this.addSortableDcatAp(this.portals)
      this.addSortableKnwonLicence(this.portals)
      this.AddEU(this.portals)
      this.sortTableStart(this.spatial) // Change defualt Sorting
    },
    addSortableAccessUrl (arr) {
      for (var x = 0; x < arr.length; x++) {
        if (this.portals[x].distributions.render === true) {
          Vue.set(this.portals[x], 'sortAccessUrl', this.portals[x].distributions.accessibility_access_url.result.yes)
        } else {
          Vue.set(this.portals[x], 'sortAccessUrl', '-1')
        }
      }
      // console.log('ac')
      return arr
    },
    addSortableAccessDlUrl (arr) {
      for (var x = 0; x < arr.length; x++) {
        if (this.portals[x].distributions.render === true && this.portals[x].distributions.accessibility_download_url.success === true) {
          Vue.set(this.portals[x], 'sortAccessDlUrl', this.portals[x].distributions.accessibility_download_url.result.yes)
        } else {
          Vue.set(this.portals[x], 'sortAccessDlUrl', '-1')
        }
      }
      // console.log('accesDL')
      return arr
    },
    addSortableMr (arr) {
      for (var x = 0; x < arr.length; x++) {
        if (this.portals[x].distributions.render === true && this.portals[x].distributions.machine_readable.success === true) {
          Vue.set(this.portals[x], 'sortMr', this.portals[x].distributions.machine_readable.result.yes)
        } else {
          Vue.set(this.portals[x], 'sortMr', '-1')
        }
      }
      // console.log('mr')
      return arr
    },
    addSortableDcatAp (arr) {
      for (var x = 0; x < arr.length; x++) {
        if (this.portals[x].violations.render === true && this.portals[x].violations.compliance.success === true) {
          Vue.set(this.portals[x], 'sortDcatAp', this.portals[x].violations.compliance.result.yes)
        } else {
          Vue.set(this.portals[x], 'sortDcatAp', '-1')
        }
      }
      // console.log('dca')
      return arr
    },
    addSortableKnwonLicence (arr) {
      for (var x = 0; x < arr.length; x++) {
        if (this.portals[x].licences.render === true && this.portals[x].licences.known_licences.success === true) {
          Vue.set(this.portals[x], 'sortKnownLicence', this.portals[x].licences.known_licences.result.yes)
        } else {
          Vue.set(this.portals[x], 'sortKnownLicence', '-1')
        }
      }
      // console.log('known')
      return arr
    },
    AddEU (arr) {
      for (var x = 0; x < arr.length; x++) {
        if (this.portals[x].spatial === null) {
          Vue.set(this.portals[x], 'spatial', 'EU')
        } else {
        }
      }
      // console.log('known')
      return arr
    },
    isMobile () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    isExplorer () {
      if (navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1 || window.navigator.userAgent.indexOf('Edge') > -1) {
        //  alert ('It is InternetExplorer')
        return true
      } else {
        //  alert('It is NOT InternetExplorer')
        return false
      }
    },
    showMore (x) {
      this.rows = x
      return this.rows
    }
  },
  computed: {
  },
  created: function () {
    axios
      .get(this.$env.ROOT_API + '/info/catalogues', { auth: {
        username: this.$env.USERNAME_ENV,
        password: this.$env.PASSWORD_ENV
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
      })
      // eslint-disable-next-line
      .then(response => (
        // eslint-disable-next-line
        this.portals = response.data.result,
        // eslint-disable-next-line
        this.success = response.data.success,
        this.loading = false,
        this.init()
      )
      )
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      // eslint-disable-next-line
    .finally(() => this.loading = false)
  }
}
</script>

<style>

.hide{
  visibility: hidden;
  font-size: 0px;
}
.active-table-head{
  text-decoration:underline;
}
.is-red{
  background: red;
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
