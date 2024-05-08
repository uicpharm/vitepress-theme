import { defineConfig } from 'vitepress';

export default defineConfig({
   title: 'VitePress Theme',
   description: 'Theme for use on uicpharm documentation sites.',
   themeConfig: {
      logo: '/uic-logo.svg',
      socialLinks: [
         { icon: 'github', link: 'https://github.com/uicpharm/vitepress-theme' },
      ],
      sidebar: [
         { text: 'Getting Started', link: '/getting-started' },
         { text: 'Sample Content', link: '/sample' },
      ],
   },
});
