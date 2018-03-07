module.exports = {
  entry: {
    main: './src/index.js',
  },
  html: { template: './src/index.ejs' },

  // 加载主题
  theme: './theme.config.js',
  browserslist: ['ie 9-11'],
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
