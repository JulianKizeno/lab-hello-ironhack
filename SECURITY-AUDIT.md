# Security review — 2026-11-14

This is a partial remediation, not a certification that the repository is free of vulnerabilities. Changes remain in a draft pull request pending review.

## .

npm findings before: {"info": 0, "low": 9, "moderate": 129, "high": 69, "critical": 19, "total": 226}. After remediation: {"info": 0, "low": 8, "moderate": 129, "high": 43, "critical": 0, "total": 180}.
Counts refer to dependency findings in this project, including development dependencies. Projects without a committed lockfile were first resolved to create an auditable baseline. Production builds were checked on Node.js 24 with CI=true, npm ci --ignore-scripts --legacy-peer-deps and NODE_OPTIONS=--openssl-legacy-provider for legacy Webpack compatibility; these builds are not browser end-to-end tests.

Production build/test result: `{   "project": "lab-hello-ironhack",   "install_exit": 0,   "build_exit": 0 }`.

### Remaining advisories

- `@testing-library/jest-dom`: high; requires dependency migration. 
- `react-scripts`: high; requires dependency migration. 

Do not treat compatible lockfile updates as completion of the framework migrations above.

## Vendored dependencies

Remove committed dependency trees: `node_modules`. Install from the lockfiles using npm ci (legacy projects currently require --legacy-peer-deps).
