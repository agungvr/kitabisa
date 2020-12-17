const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: './report.html',
      openAnalyzer: false,
      defaultSizes: 'gzip',
      generateStatsFile: true,
    }),
  ],
}
