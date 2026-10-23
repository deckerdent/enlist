# Enlist Documentation

This Docusaurus site keeps internal architecture documentation separate from user-facing documentation. Markdown content lives in `docs/`; site configuration and assets live at this directory's root.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

The development server opens the site locally and reloads as files change.

## Build

```bash
npm run build
```

This generates the static site in `build/`.

## Content structure

- `docs/internal/` contains arc42 documentation, architecture decisions, and diagrams.
- `docs/external/end-users/` contains end-user guidance.
- `docs/external/developers/` contains developer documentation.
