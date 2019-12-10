<template>
  <div>
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          {{ $t(completeKeyTitle) }}
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
          x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <span v-html="$t(completeKeyDesc)"></span>
        </slot>
       </section>
    </div>

  </div>
</template>
<script>
export default {
  name: 'modal',
  props: ['title', 'desc', 'infoID', 'inID', 'name'],
  data () {
    return {
      langKeyStart: 'message.help.',
      langKeyTitle: '.title',
      langKeyDesc: '.desc',
      completeKeyTitle: '',
      completeKeyDesc: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  mounted () {
    this.completeKeyTitle = this.langKeyStart + this.name + this.langKeyTitle
    this.completeKeyDesc = this.langKeyStart + this.name + this.langKeyDesc
  }
}
</script>

<style>

</style>
