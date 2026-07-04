#!/bin/sh
# One-command publish: commit everything, push to GitHub → Vercel auto-deploys.
# Usage:  npm run ship            (auto commit message)
#         npm run ship -- "message here"
set -e
cd "$(dirname "$0")/.."

MSG="${1:-Update $(date '+%Y-%m-%d %H:%M')}"

if git diff --quiet && git diff --cached --quiet && [ -z "$(git status --porcelain)" ]; then
  echo "Nothing to ship — working tree is clean."
  exit 0
fi

git add -A
git commit -m "$MSG"
git push
echo ""
echo "✅ Pushed. Vercel is deploying → https://basharat-ahmed.vercel.app (live in ~1 min)"
