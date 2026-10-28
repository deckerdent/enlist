// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Enlist Documentation',
  tagline: 'Internal architecture and external product documentation.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Update these values if the documentation site is deployed elsewhere.
  baseUrl: '/',
  url: 'https://enlist.example.com',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          path: './docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/deckerdent/enlist/edit/main/docs/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'internalSidebar',
            position: 'left',
            label: 'Internal',
          },
          {
            type: 'docSidebar',
            sidebarId: 'externalSidebar',
            position: 'left',
            label: 'External',
          },
          {
            href: 'https://github.com/deckerdent/enlist',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Internal', to: '/docs/internal'},
              {label: 'External', to: '/docs/external'},
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/deckerdent/enlist',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Enlist.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
