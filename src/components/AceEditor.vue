<template>
  <div class="content">
      <div :id="editorId" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script>
export default {
/* eslint-disable */
  components: {
  },
  props: ['editorId', 'content', 'lang', 'theme'],
  data () {
    return {
      editor: {},
      beforeContent: ''
    }
  },
  watch: {
    'content' (value) {
    	if (this.beforeContent !== value) {
      	this.editor.setValue(value, 1)
      }
    }
  },
  mounted () {
  	const lang = this.lang || 'xml'
    const theme = this.theme || 'Eclipse'
	this.editor = window.ace.edit(this.editorId)
    this.editor.setValue(this.content, 1)
    // mode-xxx.js or theme-xxx.jsがある場合のみ有効
    this.editor.getSession().setMode(`ace/mode/${lang}`)
    this.editor.setTheme(`ace/theme/${theme}`)
  }
}
</script>

<style>
</style>
