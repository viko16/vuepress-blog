const path = require('path');

module.exports = {
  title: 'Unknown Me',
  description: 'Viko\'s Blog',
  dest: path.resolve(__dirname, '../../dist'),
  evergreen: true,
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.png' }],
    ['meta', { name: 'keywords', content: 'Unknow Me, viko16, vuepress-theme-simple, 博客, vue' }],
    ['meta', { name: 'author', content: 'viko16' }],
  ],
  ga: 'UA-50884174-3',
  theme: 'simple',
  themeConfig: {
    author: 'viko16',
  },
  plugins: [
    '@vuepress/google-analytics',
    'permalink-pinyin',
    ['sitemap', { hostname: 'https://ukn.me' }]
  ],
}
