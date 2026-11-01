# Lunaris website

Landing page (`src/pages/index.astro`) and docs (`src/content/docs/docs/`), built with
[Astro Starlight](https://starlight.astro.build). Static output in `dist/`.

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # writes dist/
```

`src/content/docs/docs/writing-extensions.md` is a copy of the SDK repo's README;
update it when that changes.
