#!/bin/sh
# One-command publish: commit everything and push — Vercel's GitHub
# integration deploys automatically on every push to main.
# Usage:  npm run ship            (auto commit message)
#         npm run ship -- "message here"
set -e
cd "$(dirname "$0")/.."

MSG="${1:-Update $(date '+%Y-%m-%d %H:%M')}"

if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "$MSG"
else
  echo "Working tree clean — pushing current commit."
fi

git push
echo ""
echo "✅ Pushed — Vercel is deploying → https://basharat-ahmed.vercel.app (live in ~1 min)"
