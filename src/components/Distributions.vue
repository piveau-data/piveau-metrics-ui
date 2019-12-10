<template>
 <div class="distributions">
    <div class="container" id="overview-intro" >
      <div class="row">
       <div class="col-sm">
          <div class="catalogue_intro-section-text">
           <h3>{{ $t("message.catalogue_detail.distributions.title") }}</h3>
            <p>{{ $t("message.catalogue_detail.distributions.introduction") }} </p>
             <!-- <br> <span :v-if="DEBUG_DEV = true" class="db">Total: {{access_badge}}, Pages:{{totalpages}}, Offset:{{(currentPage-1)*10}},  Limit: 10, current Page: {{currentPage}}</span> -->
             <div>
               <!-- <span v-if="totalDistributions > 5"> -->
               <div class="pag">
                <ul class="pagination pagination-sm">
                  <li class="page-item" v-for="(n, index) in totalpages" v-if="Math.abs(n - currentPage)  < 3 || n === totalpages || n === 1" :key="n" :class="{ 'active': index === currentPage-1, 'last': n === totalpages && Math.abs(n - currentPage)  > 3, 'first': n === 1 && Math.abs(n - currentPage) > 3 }">
                    <!-- Current Page: {{this.currentPage}} -->
                    <a href="" @click.prevent="fetchdata(n)" class="page-link" >{{n}}</a>
                  </li>
                </ul>
              </div>
              </div>
               <h6>{{ $t("message.catalogue_detail.distributions.desc") }}</h6>
              </div>
                 <div v-if="this.loading === true" class="spinner-space"><div class="lds-ring" id="spinner-distributions"><div></div><div></div><div></div><div></div></div></div>
                    <div v-for="value in accessData" class="distribution-detail" :key="value.id">
                         <div class="distribution-headline" >{{value.name}} <!--[{{ value.id }}] --></div><hr>
                          <div v-for="item in value.distributions" :key="item.name">
                           <div class="distribution-subheadline">{{ $t("message.catalogue_detail.distributions.access_url") }}</div>
                           <div class="distribution-info"><a :href="item.accessUrl" target="_blank">{{item.accessUrl}}</a></div>
                           <span v-if="item.statusAccessUrl === 0" class="distribution-no-dl-url">{{ $t("message.catalogue_detail.distributions.not_available_access") }}</span>
                           <div v-else class="distribution-subheadline2">{{ $t("message.common.status") }}:
                           <span class="distribution-status-code">{{item.statusAccessUrl}}</span></div>
                           <!-- <div v-if="item.format === null"> -->
                           <div class="distribution-subheadline2">{{ $t("message.catalogue_detail.distributions.format.name") }}:
                           <span class="distribution-info">{{item.format}} </span></div>
                           <!-- </div> -->
                           <br>
                           <div class="distribution-subheadline">{{ $t("message.catalogue_detail.distributions.download_url") }}</div>
                           <div class="distribution-info">
                               <div v-if="item.downloadUrl === null"><span class="distribution-no-dl-url">{{ $t("message.catalogue_detail.distributions.not_available_dl") }}</span><br>
                                </div>
                              <div v-else>
                              <a :href="item.downloadUrl" target="_blank">{{item.downloadUrl}}</a><br>
                              <span class="distribution-subheadline2">{{ $t("message.common.status") }}: </span>
                              <span class="distribution-status-code">{{item.statusDownloadUrl}}</span>
                              </div>
                           </div>
                           <hr>
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
      access_badge: '',
      totalpage: '',
      violation_result: '',
      licence_result: '',
      filterValue: '',
      showError: false
    }
  },
  mounted () {
    axios
      .get(this.$env.ROOT_API + '/info/catalogues/' + this.dist + '/accessibility/size', { auth: {
        username: this.$env.USERNAME_ENV,
        password: this.$env.PASSWORD_ENV
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
      })
      .then(response => (this.access_badge = response.data.result)
      )
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      // eslint-disable-next-line)
    axios
      .get(this.$env.ROOT_API + '/info/catalogues/' + this.dist + '/accessibility', {
        params: {
          limit: 10,
          offset: (this.currentPage - 1) * 10
        },
        auth: {
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
    totalpages () {
      if (this.access_badge > 20) {
        return Math.ceil(this.access_badge / 10)
      }
    }
  },
  methods: {
    fetchdata (n) {
      this.loading = true
      this.accessData = []
      this.currentPage = n
      return axios.get(this.$env.ROOT_API + '/info/catalogues/' + this.dist + '/accessibility', {
        params: {
          limit: 10,
          offset: (this.currentPage - 1) * 10
        },
        auth: {
          username: this.$env.USERNAME_ENV,
          password: this.$env.PASSWORD_ENV
        }
      })
        .then((response) => {
          this.accessData = response.data.result
          // console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
        // eslint-disable-next-line
        .finally(() => this.loading = false)
    }
  },
  filters: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-link {
}

.last {
  padding-left: 10px;
}

.last:after {
}

.first{
  padding-right: 10px;
}

.first:before{
  padding-right: 2px;
}

#demo-spacer{
  margin-top:300px;
}

.db{
  font-size: 10px;
  color: gray;
}

.well{
  background-color: rgb(234, 234, 234);
  margin-top: 30px;
  padding: 10px;
}
</style>
