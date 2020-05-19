const path = require('path')

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, on Mac: sudo npm run / sudo yarn
const devServerPort = 9527 // TODO: get this variable from setting.ts
const mockServerPort = 9528 // TODO: get this variable from setting.ts
const name = 'zzcx' // TODO: get this variable from setting.ts

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    // port: devServerPort,
    open: true,
    // host: '0.0.0.0',
    // useLocalIp: true,
    overlay: {
      warnings: false,
      errors: true
    },
      // proxy: {
      //     '/api': {
      //         target: 'http://localhost:8081',
      //         ws: true,
      //         changeOrigin: true,
      //         pathRewrite: {
      //             '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
      //         }
      //     }
      // }

    // proxy: {
    //   // change xxx-api/login => /mock-api/v1/login
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: process.env.VUE_APP_BASE_API,
    //     changeOrigin: true, // needed for virtual hosted sites
    //     ws: false, // proxy websockets
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  }
}
