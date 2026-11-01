// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Lunaris",
      logo: { src: "./src/assets/icon.png" },
      favicon: "/icon.png",
      customCss: ["./src/styles/theme.css"],
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/lunaris-app/release" },
      ],
      sidebar: [
        {
          label: "Using Lunaris",
          items: ["docs", "docs/install", "docs/sources", "docs/backup"],
        },
        {
          label: "Extensions",
          items: ["docs/writing-extensions"],
        },
      ],
    }),
  ],
});
