#!/bin/sh
# One-command publish: commit everything, push to GitHub, deploy to Vercel.
# Usage:  npm run ship            (auto commit message)
#         npm run ship -- "message here"
#
# Note: once the Vercel⇄GitHub integration is connected (Vercel account →
# Settings → Authentication → GitHub, then `npx vercel git connect`), pushes
# deploy automatically and the vercel step below can be removed.
set -e
cd "$(dirname "$0")/.."

MSG="${1:-Update $(date '+%Y-%m-%d %H:%M')}"

if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "$MSG"
else
  echo "Working tree clean — pushing/deploying current commit."
fi

git push
npx vercel --prod --yes
echo ""
echo "✅ Live at https://basharat-ahmed.vercel.app"
