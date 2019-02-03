const path = require('path');

module.exports = {
  title: 'Unknown Me',
  description: 'Viko\'s Blog',
  dest: path.resolve(__dirname, '../../dist'),
  evergreen: true,
  locales: {
    '/': { lang: 'zh-CN' },
  },
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.png' }],
    ['meta', { name: 'keywords', content: 'Unknow Me, viko16, vuepress-theme-simple, 博客, vue' }],
    ['meta', { name: 'author', content: 'viko16' }],
  ],
  theme: 'simple',
  plugins: ['permalink-pinyin']
}
