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
                    label: 'Start Here',
                    items: [
                        {label: "Getting Started", slug: "getting-started"}, // Each item here is one entry in the navigation menu.
                        {label: "API Versioning", slug: "api-versioning"}, // Each item here is one entry in the navigation menu.
                        {label: "Tools and Environment Setup", slug: "tools-and-environment-setup"}, // Each item here is one entry in the navigation menu.
                    ],
                },
                {
                    label: "Guides",
                    items: [
                        {label: "Security", slug: "guides/security"},
                    ]
                },
                {
                    label: "Endpoints Reference",
                    items: [

                    ]
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