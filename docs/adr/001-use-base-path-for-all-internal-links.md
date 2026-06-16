# Use BASE_PATH for all internal links

## Status

Accepted

## Context

- Deployed to GitHub Pages at `/yab/`. Root-relative links break in production.
- Links have been broken multiple times because contributors forget to prefix with `BASE_PATH`.

## Decision

All internal links must use `BASE_PATH` from `src/config.ts`. No exceptions for HTML components, pages, or templates. RSS/API routes that require absolute URLs should use `context.site` + `BASE_PATH`.

## Consequences

- Every new link needs the prefix
- Forgetting it = broken links in production
- RSS and API routes may need `context.site` + `BASE_PATH` for absolute URLs
