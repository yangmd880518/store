module.exports = {
  configureWebpack: {
    resolve: {
      // alias别名
      alias: {
        // '@' : 'src',
        'assets' : '@/assets',
        'common' : '@/common',
        'components' : '@/components',
        'network' : '@/network',
        'views' : '@/views',


      }
    }
  }
}
