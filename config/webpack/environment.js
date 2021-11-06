const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.prepend('Provider', 
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)
module.exports = environment
