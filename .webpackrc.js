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
  // 按需加载
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', style: true, libraryDirectory: 'es' }],
  ],
}
