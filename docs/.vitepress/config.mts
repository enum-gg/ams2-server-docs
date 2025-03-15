import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/docs/',
    title: "Unofficial AMS2 Server Docs",
    description: "Unofficial AMS2 Server Docs",
    cleanUrls: true,
    outDir: '.vitepress/dist/docs',
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/enum-gg/ams2-server-docs/edit/main/docs/:path'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            //{ text: 'Home', link: '/' },
            {text: 'Docs', link: '/'},
            //{ text: 'Reference', link: '/latest/api/etc' },
            //{ text: 'Tools', link: '/tools' }
        ],
        sidebar: [
            /*{
              text: 'Server Operator',
              items: [
                { text: 'Overview', link: '/overview' }
              ]
            },*/
            /*
            {
              text: 'Setup Guides',
              items: [
                { text: 'Windows', link: '/running-windows' },
                { text: 'Linux', link: '/running-linux' },
                { text: 'Docker', link: '/running-windows' },
                { text: 'P2P (In Game)', base: 'self-hosted', link: '/egg' },
                { text: 'Paid Providers', base: 'self-hosted', link: '/' },
              ]
            },*/
            /*{
              text: 'Components',
              items: [
                { text: 'HTTP API', link: '/markdown-examples' },
                { text: 'Lua API', link: '/api-examples' }
              ]
            },*/
            //{
            //text: 'Server Configuration',
            //items: [
            //{ text: 'Overview', link: '/cfg/overview' },
            //{ text: 'Generator', link: '/cfg/generator' },
            //{ text: 'Reference', link: '/cfg/overview' },
            // { text: 'Practice', link: '/api-examples' },
            //{ text: 'Qualifying', link: '/api-examples' },
            //{ text: 'Race', link: '/api-examples' },
            //{ text: 'Syntax', link: '/cfg/syntax' }
            //]
            //},
            {
                text: 'Identifiers',
                base: 'id',
                items: [
                    {
                        text: 'API', base: 'api', items: [
                            {text: 'Endpoints', link: '/endpoints'}
                        ]
                    },
                    {
                        text: 'Enumerables', base: 'enums', collapsed: false, items: [
                            {text: 'Camera View', link: '/camera-view'},
                            {text: 'Damage', link: '/damage'},
                            {text: 'Fuel Usage', link: '/fuel-usage'},
                            {text: 'Game Mode', link: '/game-mode'},
                            {text: 'Grid Position', link: '/grid-position'},
                            {text: 'Random Failures', link: '/random-failures'},
                            {text: 'Penalties', link: '/penalties'},
                            {text: 'Pit Control', link: '/pit-control'},
                            {text: 'Reputation', link: '/reputation'},
                            {text: 'Tire Wear', link: '/tire-wear'},
                            {text: 'Weather', link: '/weather'}
                        ]
                    },
                    {
                        text: 'Flags', base: 'flags', collapsed: false, items: [
                            {text: 'Player', link: '/player'},
                            {text: 'Session', link: '/session'}
                        ]
                    },
                    {text: 'Tracks', link: '/tracks'},
                    {
                        text: 'Vehicle', base: 'id', items: [
                            {text: 'Vehicle ID', link: '/vehicle'},
                            {text: 'Vehicle Classes', link: '/vehicle-classes'},
                            {text: 'Liveries', link: '/liveries'},
                        ]
                    },
                ],
            },

            /*{
              text: 'Changelogs',
              base: 'changelogs',
              items: [
                { text: '2024', items: [
                  { text: 'Build ID 13079898', link: '/build-13079898' },
                ]}
              ]
            },*/
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/enum-gg/ams2-server-docs'}
        ]
    },
    head: [['script', {
        src: 'https://plausible.io/js/script.outbound-links.js',
        'data-domain': 'ams2.enum.gg',
        defer: ''
    }]]
})
