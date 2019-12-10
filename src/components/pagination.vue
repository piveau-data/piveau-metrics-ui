<template>
  <div>
    <p>Current page: {{ currentPage }}</p>
    <v-pagination v-model="currentPage" :page-count="30"></v-pagination>
  </div>
</template>

<script>
import vPagination from 'vue-plain-pagination'

export default {
  components: { vPagination },
  data () {
    return {
      currentPage: 1
    }
  }
}
</script>
