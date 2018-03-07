module.exports = {
  entry: {
    main: './src/index.js',
  },
  html: { template: './src/index.ejs' },

  // 热加载
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
}
