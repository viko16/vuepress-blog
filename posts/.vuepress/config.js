const path = require('path');

module.exports = {
  title: 'Unknown Me',
  description: 'Viko\'s Blog',
  dest: path.resolve(__dirname, '../../dist'),
  evergreen: true,
  locales: {
    '/': { lang: 'zh-CN' },
  },
  theme: 'simple',
  plugins: ['permalink-pinyin']
}
