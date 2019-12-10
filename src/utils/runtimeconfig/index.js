/**
 * Vue.js plugin to consume configurations using environment variables
 */

import merge from 'merge-anything'
// The configuration object that contains symbols for overwriting during runtime
import config from './runtime-config-template'

const RuntimeConfiguration = {
  install (Vue, options = {}) {
    const defaultOptions = {
      debug: false
    }
    const opts = Object.assign({}, defaultOptions, options)

    // Custom merge rule to ignore values that start with $VUE_APP_
    // i.e., use this.$env property when environment variable is not set
    const ignoreUnusedVariables = (originVal, newVal) => {
      let result = newVal
      if (typeof originVal === 'string' && typeof newVal === 'string') {
        if (newVal.startsWith('$VUE_APP_')) {
          return originVal
        }
      }
      return result
    }

    const mergeOptions = {
      extensions: [ignoreUnusedVariables]
    }

    let merged = merge(mergeOptions, process.env, config)
    if (opts.debug) console.log(`Runtime configuration = ${JSON.stringify(merged)}`)

    Vue.prototype.$env = merged
  }
}

export default RuntimeConfiguration
