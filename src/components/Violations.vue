<template>
 <div class="violations">
    <div class="container" id="overview-intro" >
      <div class="row">
       <div class="col-sm">
          <div class="catalogue_intro-section-text">
           <h3>{{ $t("message.catalogue_detail.violations.own_headline") }}</h3>
            <p>{{ $t("message.catalogue_detail.violations.introduction") }} </p>
            <br>
            <!-- <span v-if="DEBUG_DEV = true" class="db">Total: {{viol_badge}}, Pages:{{totalpages}}, Offset:{{(currentPage-1)*10}},  Limit: 10, current Page: {{currentPage}}</span> -->
            <br>
            <div class="pag">
                <ul class="pagination pagination-sm">
                  <li class="page-item" v-for="(n, index) in totalpages" v-if="Math.abs(n - currentPage)  < 3 || n === totalpages || n === 1" :key="n" :class="{ 'active': index === currentPage-1, 'last': n === totalpages && Math.abs(n - currentPage)  > 3, 'first': n === 1 && Math.abs(n - currentPage) > 3 }">
                    <!-- Current Page: {{this.currentPage}} -->
                    <a href="" @click.prevent="fetchdata(n)" class="page-link" >{{n}}</a>
                  </li>
                </ul>
              </div>

            <span v-if="viol_badge === 0"> <div class="alert alert-success" role="alert"><strong>0</strong> DCAT-AP Schema Violations</div></span>
            <span v-else>
            <h6>{{ $t("message.catalogue_detail.violations.subheadline") }}</h6>
            <div v-if="this.loading === true" class="spinner-space"><div class="lds-ring" id="spinner-distributions"><div></div><div></div><div></div><div></div></div></div>
             </span><div>
                   <div v-for="value in compData" class="distribution-detail" :key="value.id">
                   <div class="distribution-headline" >{{value.name}} <!--[{{ value.id }}] --></div>
                   <div class="table-responsive">
                        <table class="table" v-for="item in value.violations" :key="item.name">
                          <tr>
                            <td class="violations-name">{{item.name}}</td>
                            <td class="violations-message">{{item.message}}</td>
                          </tr>
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
      loaded: false,
      loading: true,
      id: this.$route.params.id,
      name: this.$route.params.name,
      compData: [],
      viol_badge: '',
      totalpage: '',
      violation_result: '',
      licence_result: '',
      filterValue: '',
      showError: false
    }
  },
  mounted () {
    axios
      .get(this.$env.ROOT_API + '/info/catalogues/' + this.dist + '/compliance/size', { auth: {
        username: this.$env.USERNAME_ENV,
        password: this.$env.PASSWORD_ENV
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
      })
      .then(response => (this.viol_badge = response.data.result)
      )
      .catch(error => {
        console.log(error)
        this.errored = true
      })
    axios
      .get(this.$env.ROOT_API + '/info/catalogues/' + this.dist + '/compliance', {
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
      .then(response => (this.compData = response.data.result)
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
      if (this.viol_badge > 20) {
        return Math.ceil(this.viol_badge / 10)
      }
    }
  },
  methods: {
    fetchdata (n) {
      this.loading = true
      this.compData = []
      this.currentPage = n
      return axios.get(this.$env.ROOT_API + '/info/catalogues/' + this.dist + '/compliance', {
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
          this.compData = response.data.result
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
        // eslint-disable-next-line
        .finally(() => this.loading = false)
    }
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
#demo-spacer{
  margin-top:300px;
}
</style>
