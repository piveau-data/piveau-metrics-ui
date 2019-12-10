<template>
  <div class="information-modal">
    <p class="information"> <button
      type="button"
      class="btn-information" id="btn"
      @click="showModal"
    >i
    </button> </p>
    <modal id="#myModal"
      v-show="isModalVisible"
      @close="closeModal"
      v-bind:title="title"
      v-bind:desc="desc"
      v-bind:infoID="infoID"
      v-bind:inID="inID"
      v-bind:name="name"
    />
  </div>
</template>
<script>
// import axios from 'axios'
import modal from './modal.vue'
export default {
  name: 'app',
  components: {
    modal
  },
  data () {
    return {
      isModalVisible: false,
      desc: [],
      title: [],
      infoID: []
    }
  },
  props: ['inID', 'name'],
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
    // requestData () {
    //   axios.get(`https://my-json-server.typicode.com/rjsturm/json/Information`)
    //     .then(response => {
    //       // console.log(response.data)
    //       this.title = response.data.map(p => p.title)
    //       this.desc = response.data.map(p => p.desc)
    //       this.infoID = response.data.map(p => p.infoID)
    //       this.loaded = true
    //     })
    //     .catch(err => {
    //       this.errorMessage = err.response.data.error
    //       this.showError = true
    //     })
    // }
  },
  created: function () {
  }
}

</script>

<style>

  .modal {

/*     -webkit-box-shadow: 0px 0px 0px 0px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
/*     -moz-box-shadow:    0px 0px 0px 0px #ccc;  /* Firefox 3.5 - 3.6 */
/*      box-shadow:        1px 2px 1px 1px #ccc; */
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

</style>
