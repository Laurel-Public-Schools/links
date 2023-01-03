// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LPS Links and Forms',
  tagline: 'All links and forms in one place',
  url: 'https://links.laurel.k12.mt.us',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/train.png',


  organizationName: 'Laurel Public Schools', 
  projectName: 'links', // 

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LPS Links and Forms',
        logo: {
          alt: 'LPS Logo',
          src: 'img/train.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Links and Forms',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Laurel Public Schools. Built by Ellie Kerns`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports =  config; 
// module.exports = {
//   ...
//     plugins: [require.resolve('docusaurus-lunr-search')],
// }

//   plugins: [
//  '@aldridged/docusaurus-plugin-lunr']
// [require.resolve('docusaurus-lunr-search')
// ]