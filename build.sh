#!/bin/bash

# Change to the directory containing the Git repository
cd /srv/git/links

# Check for updates
git fetch 

if ! git diff --quiet HEAD @{u}; then
    # Pull changes if there are any
    echo "$(date) - Changes detected. Pulling changes and rebuilding." 
    git pull && \
		docker build -t localhost:5000/links . && \
		docker push localhost:5000/links && \
		docker stack deploy -c docker-compose.yml links 
else
    echo "$(date) - No changes. Exiting." 
fi
