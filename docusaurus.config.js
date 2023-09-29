// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const jQuery = require('http://code.jquery.com/jquery-latest.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'LPS Links and Forms',
	tagline: 'All links and forms in one place',
	url: 'https://links.laurel.k12.mt.us',
	baseUrl: '/',
	onBrokenLinks: 'ignore',
	onBrokenMarkdownLinks: 'ignore',
	favicon: 'img/train.png',

	organizationName: 'Laurel Public Schools',
	projectName: 'links', //

	// i18n: {
	//   defaultLocale: 'en',
	//   locales: ['en'],
	// },

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/Laurel-Public-Schools/links/tree/main/',
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
					{
						href: 'https://laurel.k12.mt.us',
						position: 'right',
						label: 'Return to District Website',
					},
				],
			},
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: false,
			},
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			plugins: [['@gracefullight/docusaurus-plugin-vercel-analytics']],
			algolia: {
				// The application ID provided by Algolia
				appId: '58DY084X0I',

				// Public API key: it is safe to commit it
				apiKey: '637ab5f091c3d0b1305b1c70cf048b84',

				indexName: 'docsearch',
			},

			footer: {
				style: 'light',
				copyright: `Copyright © ${new Date().getFullYear()} Laurel Public Schools.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
