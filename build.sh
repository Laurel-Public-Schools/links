#!/bin/bash

# Change to the directory containing the Git repository
cd /etc/links

# Check for updates
git fetch

# Compare local and remote branches to check for changes
if ! git diff --quiet HEAD @{u}; then
    # Pull changes if there are any
    git pull && \
		docker-compose build && \
		docker-compose down && \
		docker-compose up -d 


else
    echo "No changes. Exiting."
fi

