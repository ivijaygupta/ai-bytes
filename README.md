# aiBytes redesign prototype

A static design exploration for aiBytes, built with HTML, CSS, and JavaScript. No framework, backend, or build step.

## Preview

Open `index.html` directly, or run:

```sh
python3 -m http.server 8080
```

Then visit http://localhost:8080/.

## Included

- List and grid layouts, ranked and grouped feeds
- Category, tag, and source filters
- Calendar navigation across 12 saved editions (October 8–19, 2026)
- Dark/light themes and sticky controls
- Source metrics and links to discuss items with AI tools

Content snapshots are bundled in `data.js`; no separate data folder is required. Content is from https://aibytes.io/. Data is static and does not automatically refresh. Fonts, project images, and favicons load from external services. Subscription and other external links point to the original services.

This is an independent redesign prototype, not the production aiBytes application.
