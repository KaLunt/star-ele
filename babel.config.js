module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //babel-plugin-import 按需引入插件
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
