// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const jQuery = require('http://code.jquery.com/jquery-latest.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Laurel Public Schools',
  tagline: 'Dedicated to the individual development of each student, every day, without exception',
  url: 'https://links.laurel.k12.mt.us',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/train.png',


  organizationName: 'Laurel Public Schools', 
  projectName: 'links', // 

  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  scripts:[
      'https://laurelschools.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/1jmxwi/b/8/b0105d975e9e59f24a3230a22972a71a/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=9cb68c49',

    
  ],

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
        title: 'Laurel Public Schools',
        logo: {
          alt: 'LPS Logo',
          src: 'img/train.png',
        },
        
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'District',
            items: [
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Departments',
            items: [
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Schools',
            items: [
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Parent',
            items: [
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Student',
            items: [
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Employment',
            items: [
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Staff',
            items: [
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
              {
                label: 'School Board',
                href: 'https://www.laurel.k12.mt.us/district/school-board',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Links and Forms',
          },
          {
            href: 'https://laurel.k12.mt.us',
            position: 'right',
            label: 'Return to District Website'
          }
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '58DY084X0I',
  
        // Public API key: it is safe to commit it
        apiKey: '637ab5f091c3d0b1305b1c70cf048b84',
  
        indexName: 'docsearch',
      },

      footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Laurel Public Schools. Built by <a href=\"https://github.com/boihackerellie\">Ellie Kerns</a>` ,       
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

