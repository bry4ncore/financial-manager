#!/bin/bash

echo "================================"
echo "   Health Check Tool"
echo "================================"
echo ""

# Get the parent directory
PARENT_DIR="$(dirname "$(pwd)")"

# Create zip filename with timestamp
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ZIP_FILE="health_check_${TIMESTAMP}.zip"

echo "Collecting files from: $PARENT_DIR"
echo "Creating archive: $ZIP_FILE"
echo ""

# Zip all files from parent directory
cd "$PARENT_DIR" && zip -r "/tmp/$ZIP_FILE" . -x "*.git*" "node_modules/*" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✓ Archive created successfully: /tmp/$ZIP_FILE"
    echo "✓ Health check complete"
else
    echo "✗ Error creating archive"
    exit 1
fi
