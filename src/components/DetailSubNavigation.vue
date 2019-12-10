<template>
 <div class="detail-sub-nav">
     <div class="detail-sub-navigation">
        <router-link :to="'/' + this.name + ''" exact class="block">
        <span class="detail-sub-nav-inactive">{{ $t("message.catalogue_detail.title") }}</span>
        </router-link>
        <router-link :to="'/' + this.name + '/distributions'" v-bind:title="title" :access_badge="this.access_badge" class="block">
        <span class="detail-sub-nav-inactive">{{ $t("message.catalogue_detail.distributions.title") }}<span style="color:#9ba2a2"><span class="badge badge-warning" id="badge">{{this.access_badge}}</span></span></span>
        </router-link>
        <span v-if="violation_badge == 0">
        <div class="block">
          <span class="detail-sub-nav-deactivated">
            {{ $t("message.catalogue_detail.violations.own_headline") }}<span style="color:#9ba2a2"><span class="badge badge-secondary" id="badge">{{this.violation_badge}}</span></span></span>
        </div>
        </span>
        <span v-else>
        <router-link :to="'/' + this.name + '/violations'" class="block">
          <span class="detail-sub-nav-inactive">
          {{ $t("message.catalogue_detail.violations.own_headline") }}<span style="color:#9ba2a2"><span class="badge badge-warning" id="badge"><span>{{this.violation_badge}}</span></span></span></span>
        </router-link>
        </span>
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
      loaded: false,
      loading: true,
      id: this.$route.params.id,
      name: this.$route.params.name,
      access_badge: '',
      violation_badge: '',
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
      // eslint-disable-next-line
      .finally(() => this.loading = false)
    axios
      .get(this.$env.ROOT_API + '/info/catalogues/' + this.dist + '/compliance/size', { auth: {
        username: this.$env.USERNAME_ENV,
        password: this.$env.PASSWORD_ENV
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
      })
      .then(response => (this.violation_badge = response.data.result)
      )
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      // eslint-disable-next-line
      .finally(() => this.loading = false)
  },
  computed: {
  },
  methods: {
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

</style>
