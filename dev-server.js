const webpack = require('webpack')
const DevServer = require('webpack-dev-server')
const hot = require('webpack-hot-middleware')

const webpackConfig = require('./webpack.config')


const compiler = webpack(webpackConfig)

const server = new DevServer(compiler, {
  host: 'localhost',
  port: 3000,
  historyApiFallback: true,
  open: true,
  openPage: `http://localhost:3000`,
  overlay: true,
  quiet: false,
  clientLogLevel: 'none',
  noInfo: true,
  after: (app) => {
    app.use(
      hot(compiler, {
        log: hot.logger,
      })
    )
  },
})

server.listen(3000, "localhost", () => {
  console.log(`Server listening  http://localhost:3000 `)
})