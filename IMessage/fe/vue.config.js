module.exports = {
  publicPath: '/message/',
  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [require('postcss-px2rem')({
          remUnit: 37.5 //设计稿的尺寸是750px 就需要除2，这里是375px
        })]
      }
    }
  },
  devServer: {
    proxy: {
      '/socket': {
        target: 'http://localhost:3000', // target host
        changeOrigin: true, // needed for virtual hosted sites
        // pathRewrite: {
        //   '/': '/'
        // }
      }
    }
  }
}