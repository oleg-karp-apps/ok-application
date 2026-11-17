# Development and releases

## Source baseline

Imported from `MyStillio_013_Beta_TEST(2).zip` on 2026-11-17.
This is version 0.1.3 Beta. Its match to the current Netlify production app has not been verified.
The original application files and IndexedDB identifiers are unchanged.

## Local development

Install Node.js 22 or later. No npm dependencies or installation step is required.

```sh
npm run dev
```

Open http://localhost:8080. Run `npm run build` to check JavaScript syntax and produce `dist/`.
Only the five public app assets are published; repository documentation and configuration are excluded.
The development server listens on the local computer only.

## Shared workflow

Create a feature branch, push changes, and open a pull request. CI must pass.
Test the Netlify preview and have the other maintainer review before merging into `main`.
Enforce this with GitHub branch rules if the account plan supports it; rules are not configured by these files.
Use separate accounts with 2FA; never commit credentials, real backups, or user records.

## Netlify setup

First connect this repository to a separate Netlify test site, using `main` and the included `netlify.toml`.
Enable pull-request Deploy Previews in Netlify. These account settings are not configured by this import.
Do not reconnect the existing live site until the imported baseline has been tested.

Before a production change, export a JSON backup from the current live app.
Test add/save/reload, backup export/import, offline reload, and data retention across an update.
Roll back a bad release using a previously successful Netlify deploy or a Git revert.
Code rollback does not roll back user data.

## Data and future Convex migration

Currently all records live in browser IndexedDB (`mystillio-db`, `records`, `state`).
No backend, accounts, cloud backup, or synchronization exists. Data belongs to the browser origin:
localhost, previews, and the live URL have separate stores. Export/import JSON explicitly to transfer data.
Do not use real user backups on public previews. Keep the production origin stable.

Convex is deferred. Before implementing it, define authentication, record ownership, server-side
authorization, separate development/production deployments, and a validated migration from exported JSON.
Keep current browser data until the cloud import and a recovery path are verified.
