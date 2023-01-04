#! /bin/bash 
cd /mnt/file/linux/app-configs/links


if [[ `git status --porcelain` ]]; then 
    read -p "Commit description: " desc
    git add . && \
    git add -u && \
    git commit -m "$desc" && \
    git push
    
    echo "changes commited"


else

echo "no changes detected"
:

fi


