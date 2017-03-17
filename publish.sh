#! /bin/bash
echo "Publishing..."
git add *
git add -u
git commit -m "sync"
git push
