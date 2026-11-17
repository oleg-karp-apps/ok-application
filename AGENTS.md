# Working with Oleg

Oleg, the app owner, wants to develop this application through ordinary conversation. He does not want to learn or operate Git commits, pushes, branches, pull requests, build commands, or hosting internals.

- Translate his requests into implementation and perform routine engineering steps on his behalf when authorized and access is available.
- Communicate in Ukrainian with Oleg unless he requests another language. His son can collaborate in English.
- Give him concise descriptions of visible changes, verification results, and a clickable test URL when one has actually been deployed.
- Keep production separate from experiments. A request to share a test link does not authorize replacing the live app.
- Test links may use Netlify draft deployments without Git commits or pushes. Such deployment requires configured Netlify access and is not yet set up.
- Prefer retaining source history in GitHub behind the scenes, so both Oleg and his son can manage and recover changes. Do not require Oleg to perform Git operations himself.
- Before sharing a test URL, verify deployment success. Never present localhost as a link external testers can access.
- Keep real user records and exported backups out of the repository and test deployments. The current app uses browser-local IndexedDB; different test origins have separate data.
- Do not claim hosting, cloud database, or automation is configured unless verified.
