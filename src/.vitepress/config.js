import sidebar from "./sidebar";

const baseURL = "/docs/34891f4a48e57f74f40d76f9bad4675a711d2929/";

const nav = [
    { text: "Work", link: "/docs/work/introduction" },
    { text: "Resources", link: "/docs/resources/apps" },
    {
        text: "Guides",
        items: [
            { text: "General", link: "/docs/guides/general/" },
            { text: "Javascript", link: "/docs/guides/javascript/" },
            { text: "Node JS", link: "/docs/guides/nodejs/" }
        ]
    },
    { text: "Our Team", link: "/docs/team/" },
];

export default {
    lang: "en-US",

    title: "Gamers Lounge",

    description: "Basic archive for Gamers Lounge.",

    lastUpdated: true,

    outDir: "../dist/34891f4a48e57f74f40d76f9bad4675a711d2929",

    base: baseURL,

    head: [
        ["link", {
            rel: "icon", type: "image/svg+xml", href: "data:image/svg+xml,<svg" +
                " xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100" +
                " 100%22><text y=%22.9em%22 font-size=%2290%22>🔨</text></svg>"
        }],
        // ["link", { rel: "icon", type: "imageg/png", href: "/icons/gl-hero.png" }]
    ],

    markdown: {
        theme: { light: "github-dark", dark: "github-dark" },
        anchor: {
            level: [2, 3]
        }
    },

    themeConfig: {
        logo: "/icons/gl-logo.svg",

        siteTitle: "Gamers Lounge",

        nav: nav,

        sidebar: sidebar,

        socialLinks: [
            { icon: "github", link: "https://github.com/GamersLounge" }
        ],

        outline: [1, 2],

        outlineTitle: "Page Content"
    }
}
