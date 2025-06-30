// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            plugins: [catppuccin()],
            customCss: ["./src/styles/global.css"],
            title: 'UniR API',
            social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/Traam0'}],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        {label: "Overview", slug: "guides/overview"}, // Each item here is one entry in the navigation menu.
                        {label: 'Authentication.mdx', slug: 'guides/authentication'},
                    ],
                },
                {
                    label: "API",
                    items: [
                        {
                            label: "Academics",
                            items: [
                                {label: "Academic Programs", slug: "api/academics/programs",},
                                {label: "Branches", slug: "api/academics/branches",}
                            ]
                        },
                        {
                            label: "Authentication", slug: "api/auth/authentication",
                        },
                        {
                            label: "Security",
                            items: [
                                {label: "Security Overview", slug: "api/security/overview"},
                            ]
                        }
                    ]
                },
                {
                    label: 'Reference', autogenerate: {directory: 'reference'},
                },
            ],
        }),
    ],
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    vite: {
        plugins: [tailwindcss()],
    },
});