# MyStillio 0.1.3 Beta

- Existing IndexedDB database `mystillio-db`, store `records`, key `state` retained. No schema migration.
- Network-first Service Worker with offline cache `mystillio-v013`.
- Snapshot-based rollback of in-memory changes if a save or action fails.
- JSON import validation for IDs, volumes, ABV, material balances and barrel capacity.
- This is a beta. Users must regularly export JSON; browser data deletion can erase records.

## Deployment safety

Do not deploy directly to the existing production site until testing on a separate Netlify test site. Export a JSON backup from production first. Test offline reload, backup import, and data retention across update.
