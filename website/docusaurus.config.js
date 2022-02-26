const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Reverse the sidebar items ordering (including nested category items)
function reverseSidebarItems(items) {
  // Reverse items in categories
  const result = items.map((item) => {
    if (item.type === 'category') {
      return {...item, items: reverseSidebarItems(item.items)};
    }
    return item;
  });
  // Reverse items at current level
  result.reverse();
  return result;
}

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'CS3216 Software Product Engineering for Digital Markets',
    tagline: 'Changing the world, one app at a time',
    url: 'https://cs3216.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    organizationName: 'cs3216', // Usually your GitHub org/user name.
    projectName: 'cs3216.github.io', // Usually your repo name.
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            breadcrumbs: false,
            path: 'coursework',
            sidebarPath: require.resolve('./sidebars.js'),
            routeBasePath: 'coursework',
            editUrl:
              'https://github.com/cs3216/cs3216.github.io/edit/master/website/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          googleAnalytics: {
            trackingID: 'UA-33503218-3',
          },
        }),
      ],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          logo: {
            alt: 'CS3216 Logo',
            src: 'img/cs3216-logo.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'coursework',
              label: 'Coursework',
              position: 'left',
            },
            {
              to: 'students',
              label: 'Students',
              position: 'left',
              activeBaseRegex: `/students/`,
            },
            {
              to: 'about',
              label: 'About',
              position: 'left',
            },
            {
              href: 'https://github.com/cs3216/cs3216.github.io',
              label: 'GitHub',
              position: 'right',
            },
            {
              href: 'https://www.facebook.com/groups/cs3216',
              label: 'Facebook',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'students',
          path: 'students',
          routeBasePath: 'students',
          sidebarPath: require.resolve('./sidebarsStudents.js'),
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return reverseSidebarItems(sidebarItems);
          },
        }),
      ],
    ],
    stylesheets: [
      'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,700',
    ],
  }
);
