<template>
  <div class="content">
    <div class="container">
         <div class="row">
             <div class="col-sm" id="harv-repo">
                 <h6>Repository / Harvester</h6><hr>
                 <table class="table table-sm table-hover">
                <thead>
                </thead>
                <tbody>
                    <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.type") }}</th>
                    <td>jsonld_dump</td>
                    </tr>
                    <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.incremental") }}</th>
                    <td>Nein</td>
                    </tr>
                    <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.frequency") }}</th>
                    <td colspan="2">daily</td>
                    </tr>
                     <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.next_schedule") }}</th>
                    <td colspan="2">Mar 20, 2019 11:10:00 PM</td>
                    </tr>
                     <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.publisher") }}</th>
                    <td colspan="2">Avaandmete</td>
                    </tr>
                     <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.email_address") }}</th>
                    <td colspan="2"><a href="mailto:opendatasupport@mkm.ee">opendatasupport@mkm.ee</a></td>
                    </tr>
                     <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.homepage") }}</th>
                    <td colspan="2"><a href="https://opendata.riik.ee">https://opendata.riik.ee</a></td>
                    </tr>
                     <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.default_language") }}</th>
                    <td colspan="2">es</td>
                    </tr>
                </tbody>
                </table><div class="harv-btn">
                <button class="btn btn-light" style="position: absolute; bottom: 0; margin-bottom: 12px;" @click="showModal = true">
                <i class="fas fa-exchange-alt" style="opacity: 0.8; padding-right: 5px;"></i> {{ $t("message.catalogue_detail.harvesting.show_script") }}
                </button> </div>
                </div>
                <div class="col-sm" id="harv-repo">
                <h6>{{ $t("message.catalogue_detail.harvesting.last_run") }}</h6><hr>
                 <table class="table table-sm table-hover">
                <thead>
                </thead>
                <tbody>
                    <tr>
                    <th>Status</th>
                    <td><span class="badge badge-success">finished</span></td>
                    </tr>
                    <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.run.start") }}</th>
                    <td>Mar 25, 2019 12:10:00 AM</td>
                    </tr>
                    <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.run.end") }}</th>
                    <td colspan="2">Mar 25, 2019 12:11:53 AM</td>
                    </tr>
                     <tr>
                    <th> <span v-html="$t(duration)"></span></th>
                    <td colspan="2">00 00:01:53 </td>
                    </tr>
                     <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.run.added") }}</th>
                      <td><span class="badge badge-light">0</span></td>
                    </tr>
                     <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.run.updated") }}</th>
                     <td><span class="badge badge-light">0</span></td>
                    </tr>
                     <tr>
                     <th>{{ $t("message.catalogue_detail.harvesting.run.skipped") }}</th>
                     <td><span class="badge badge-light">192</span></td>
                    </tr>
                     <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.run.rejected") }}</th>
                      <td><span class="badge badge-light">0</span></td>
                    </tr>
                    <tr>
                    <th>{{ $t("message.catalogue_detail.harvesting.run.deleted") }}</th>
                    <td><span class="badge badge-light">0</span></td>
                    </tr>
                </tbody>
                </table>
                <button class="btn btn-light" @click="showModal2 = true"> <i class="fas fa-file-alt" style="opacity: 0.8; padding-right: 5px;">
                  </i> {{ $t("message.catalogue_detail.harvesting.run.show_log") }}</button>
             </div>
         </div>
      </div>
      <div v-if="showModal">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title">{{ $t("message.catalogue_detail.harvesting.show_script") }}</h5>
                    <button type="button" class="close" @click="showModal=false">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                     <ace-editor editor-id="editorA" :content="contentA"></ace-editor>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
       <div v-if="showModal2">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title">{{ $t("message.catalogue_detail.harvesting.run.show_log") }}</h5>
                    <button type="button" class="close" @click="showModal2=false">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                      LOGS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {
  },
  props: ['id', '{msg: String}'],
  data () {
    return {
      loaded: false,
      data: [],
      showError: false,
      errorMessage: 'No Data availale',
      duration: 'message.catalogue_detail.harvesting.run.duration',
      showModal: false,
      showModal2: false,
      ContentA: 'Testing my new editor'
    }
  },
  mounted () {
    if (this.$route.params.package) {
      this.package = this.$route.params.package
      // this.requestData()
    }
  },
  methods: {
    requestData () {
      axios.get(this.$env.ROOT_API + '/metric/catalogues/' + this.id + '/distributions/accessibility/download_url', {
        auth: {
          username: this.$env.USERNAME_ENV,
          password: this.$env.PASSWORD_ENV
        },
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
        .then(response => {
          // console.log(response.data)
          this.data = response.data
          this.loaded = true
          this.$emit('changeLoading', this.loading)
        })
        .catch(err => {
          this.errorMessage = err.response.data.error
          this.showError = true
        })
    }
  },
  created: function () {
    this.requestData()
  }
}
</script>

<style scoped>

.table th, .table td {
    padding: 0.40rem;
    /* vertical-align: top; */
    border-top: 1px solid #fff;
}

.table th, .table td {
    padding: 0.40rem;
    border-bottom: 1px solid #fafafa;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

</style>
