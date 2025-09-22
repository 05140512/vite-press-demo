import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/vitepress-demo/",
    title: "My Awesome Project",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: "local",
        },
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/markdown-examples" },
            { text: "api-examples", link: "/api-examples" },
            {
                text: "Dropdown Menu",
                items: [
                    { text: "Item A", link: "/item-1" },
                    { text: "Item B", link: "/item-2" },
                    { text: "Item C", link: "/item-3" },
                ],
            },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
            {
                text: "Guide",
                collapsed: true,
                items: [
                    { text: "Introduction", link: "/introduction" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    },
});
