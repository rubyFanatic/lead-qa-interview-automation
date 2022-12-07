const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: process.env.CODECEPT_URL || 'http://localhost:3000',
      show: true,
      windowSize: '1200x900',
      browser: 'chrome',
      restart: false
    },
    REST: {
      endpoint: 'http://localhost:4000/shipping_data'
    },
    JSONResponse: {}

  },
  include: {
    I: './steps_file.js'
  },
  name: 'lead-qa-interview-automation'
}
