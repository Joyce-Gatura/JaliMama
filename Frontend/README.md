# Jali Mama frontend

The React/Vite application is organized into:

- `src/routes` for application routes.
- `src/features` for dashboard feature pages.
- `src/components` for reusable UI.
- `src/services` for backend communication.
- `src/config` for static display content.
- `src/utils` for pure calculations and formatters.
- `src/layout` for shared navigation and page layout.
- `src/styles` for page-scoped styles.

The dashboard remains a preview: authentication and private health-data
storage are not implemented. See the [project README](../README.md) for
setup, API details, validation commands, and known limitations.

Run `pnpm dev` to start the local Vite server, `pnpm lint` to lint,
`pnpm test` to test pregnancy-date calculations, and `pnpm build` to create
a production bundle.
