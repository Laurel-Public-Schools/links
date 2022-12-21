docker run -d --name=docusaurus \
-p 3080:80 \
-v /mnt/file/linux/app-configs/lpsdocs:/docusaurus \
-e TARGET_UID=1000
-e TARGET_GID=1000 \
-e AUOT-UPDATE=true \
-e WEBSITE_NAME="lpsdocs" \
-e TEMPLATE=classic \
awesometic/docusaurus