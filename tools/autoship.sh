#!/bin/sh
# Auto-publish watcher: checks every 3 minutes; if files changed AND the
# build passes, commits + pushes (Vercel then deploys automatically).
# The build gate means a half-finished edit never reaches the live site.
# Usage:  npm run autoship        (leave running in a terminal, Ctrl+C to stop)
cd "$(dirname "$0")/.."

echo "👀 Auto-ship watching for changes… (Ctrl+C to stop)"
while true; do
  if [ -n "$(git status --porcelain)" ]; then
    echo "[$(date '+%H:%M')] Changes detected — verifying build…"
    if npm run build >/dev/null 2>&1; then
      git add -A
      git commit -q -m "Auto-update $(date '+%Y-%m-%d %H:%M')"
      if git push -q 2>/dev/null; then
        echo "[$(date '+%H:%M')] ✅ Shipped — Vercel is deploying"
      else
        echo "[$(date '+%H:%M')] ⚠️  Push failed — check network/auth"
      fi
    else
      echo "[$(date '+%H:%M')] ⚠️  Build failing — holding changes until it passes"
    fi
  fi
  sleep 180
done
