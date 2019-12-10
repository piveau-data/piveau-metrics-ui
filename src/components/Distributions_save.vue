<template>
 <div class="distributions">
    <div class="container" id="overview-intro" >
      <div class="row">
       <div class="col-sm">
          <div class="catalogue_intro-section-text">
           <h3>{{ $t("message.catalogue_detail.distributions.title") }}</h3>
            <p>{{ $t("message.catalogue_detail.distributions.introduction") }} ({{this.dist}}) </p>
            <br>
             <div>
               <div class="pag">
                <ul class="pagination pagination-sm">
                  <li class="page-item" v-for="(n, index) in numOfPages" :key="n" :class="{ 'active': index === currentPage-1 }">
                    <!-- Current Page: {{this.currentPage}} -->
                    <a href="" @click.prevent="setPage(n)" class="page-link" >{{n}}</a>
                  </li>
                </ul>
              </div>
                <h6>{{ $t("message.catalogue_detail.distributions.desc") }}</h6>
                <!-- <label for="">Per Page:</label>
                <select v-model="perPage">
                  <option v-for="n in perPageOptions" :value="n">{{n}}</option>
                </select> -->
              </div>
                 <div v-if="this.loading === true" class="spinner-space"><div class="lds-ring" id="spinner-distributions"><div></div><div></div><div></div><div></div></div></div>
                    <div v-for="value in computedData" class="distribution-detail" :key="value.id">
                         <div class="distribution-headline" >{{value.name | capitalize}} <!--[{{ value.id }}] --></div><hr>
                          <div v-for="item in value.distributions" :key="item">
                           <div class="distribution-subheadline">{{ $t("message.catalogue_detail.distributions.access_url") }}</div>
                           <div class="distribution-info"><a :href="item.accessUrl">{{item.accessUrl}}</a></div>
                           <div class="distribution-subheadline2">{{ $t("message.common.status") }}:
                           <span class="distribution-status-code">{{item.statusAccessUrl}}</span></div><br>
                           <div class="distribution-subheadline">{{ $t("message.catalogue_detail.distributions.download_url") }}</div>
                           <div class="distribution-info">
                               <div v-if="item.downloadUrl === null">{{ $t("message.catalogue_detail.distributions.not_available_dl") }}<br></div>
                              <div v-else>
                              <a :href="item.downloadUrl">{{item.downloadUrl}}</a>
                              </div>
                           </div>
                          <div class="distribution-subheadline2">{{ $t("message.common.status") }}:
                          <span class="distribution-status-code">{{item.statusDownloadUrl}}</span>
                          <div class="distribution-subheadline2">{{ $t("message.catalogue_detail.distributions.format.name") }}:
                           <span class="distribution-info">{{item.format}} </span></div> <hr>
                           <!-- {{value.distributions[0].id}} <br> -->
                           <!-- <div class="distribution-subheadline2">Checked Media Type:
                              <span class="distribution-info">
                              <span v-if="value.distributions[0].downloadUrl === null">No Data available</span>
                              <span v-else>
                              {{value.distributions[0].checkedMediaType}}</span></span></div> -->
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
      currentPage: 1,
      perPage: 2,
      perPageOptions: [5, 10, 20],
      loaded: false,
      loading: true,
      isActive: false,
      id: this.$route.params.id,
      name: this.$route.params.name,
      accessData: [],
      violation_result: '',
      licence_result: '',
      filterValue: '',
      showError: false
    }
  },
  mounted () {
    axios
      .get(this.$env.ROOT_API + '/info/catalogues/' + this.dist + '/accessibility', { auth: {
        username: this.$env.USERNAME_ENV,
        password: this.$env.PASSWORD_ENV
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
      })
      .then(response => (this.accessData = response.data.result)
      )
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      // eslint-disable-next-line
      .finally(() => this.loading = false)
  },
  computed: {
    offset () {
      return ((this.currentPage - 1) * this.perPage)
    },
    limit () {
      return (this.offset + this.perPage)
    },
    numOfPages () {
      return Math.ceil(this.accessData.length / this.perPage)
    },
    computedData () {
      if (this.offset > this.accessData.length) {
        // eslint-disable-next-line
        this.currentPage = this.numOfPages
      }
      return this.accessData.slice(this.offset, this.limit)
    }
  },
  methods: {
    setPage (n) {
      this.currentPage = n
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#demo-spacer{
  margin-top:300px;
}

.well{
  background-color: rgb(234, 234, 234);
  margin-top: 30px;
  padding: 10px;
}
</style>
