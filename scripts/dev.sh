#!/usr/bin/env bash
# Ensures the dev server runs under a Node version new enough for Vite/rolldown,
# regardless of whatever "node" happens to be first on PATH in the invoking shell.
export PATH="/Users/siddhiapraj/.nvm/versions/node/v20.20.2/bin:$PATH"
exec npm run dev
