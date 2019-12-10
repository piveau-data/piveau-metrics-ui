/**
 * Configuration template file to bind specific properties to environment variables.
 * All values must have the prefix $VUE_APP_.
 * Their corresponding environment variable key labels must be the values without the $ character.
 * This object should be structurally identical (name and path) to the standard configuration file.
 */
export default {
  ROOT_API: '$VUE_APP_ROOT_API',
  ROOT_URL: '$VUE_APP_ROOT_URL',
  MATOMO_URL: '$VUE_APP_MATOMO_URL'
  // Warning: everything here will be available client side.
  // Do not use runtime configurations for sensible information.
  // USERNAME_ENV: '$VUE_APP_USERNAME_ENV',
  // PASSWORD_ENV: '$VUE_APP_PASSWORD_ENV'
}
