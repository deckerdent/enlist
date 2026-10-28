# Enlist

Enlist is a shell built as an SCS. It combines a frontend and a backend to provide a portal for trusted and untrusted third-party extensions.

The shell backend is a composition that can be deployed independently, either as a set of microservices or as a monolith, while still operating as an SCS.

## Extension model

Extensions can be delivered as SCSs and integrated into the portal in several ways:

| Type | Description |
| --- | --- |
| Applications | Route-activated extensions that provide user-facing experiences. |
| Widgets | Card-like extensions, for example dashboard elements. |
| Services | Backend-only extensions. |
| Plugins | Extensions loaded into outlets within applications. |

This repository provides the portal and shared tooling. Extension types and integrations can also be developed in other repositories.

## Workspace initialization

After cloning, open the repository root in VS Code and run `/initialize-workspace` from Copilot Chat. The workspace prompt downloads and verifies the local Codebase Memory executable when needed and initializes its ignored runtime settings under `.tools/codebase-memory`.

The MCP registration in [`.vscode/mcp.json`](./.vscode/mcp.json) is committed and workspace-scoped; the executable and cache are local and ignored by Git. The prompt does not modify user-level MCP configuration or index the repository. Start or restart the `codebase-memory` server after setup, then request indexing separately when ready.

## Repository contents

This is a monorepo for the portal and the tools used to build extensions for it. It brings together:

- The portal frontend and backend.
- Browser and Java backend SDKs for extension development.
- A component library of functional components: standard UI elements with built-in functionality for calling the portal backend.
- Standard applications for setup and getting started.
- A Yeoman generator for creating application projects and monorepos for extension SCSs.
- Project documentation.

## Documentation

The Docusaurus documentation site is in [`docs/`](./docs/). It separates internal architecture documentation from external documentation for end users and developers.

To run the documentation site locally, use Node.js 20 or later:

```bash
cd docs
npm install
npm start
```

To build the site:

```bash
npm run build
```
