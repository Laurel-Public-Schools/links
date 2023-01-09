# DocSearch v3 Webcrawler 

## Usage

This is the webcrawler we use specifically with Algolia DocSearch v3 for indexing our site for search purposes. the following script will the crawler in a docker container, which closes after the crawler finishes, and will be run regularly via a cron task. 

```
docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper
```
This specific script is run in linux, and requires jq to be installed. ```jq``` will parse the json file to plain text, ``-r tostring`` converts it to raw string data for the docker container.

If running this app in windows or any other environment, you will need to find another method to pass the json to an environment variable for the container.

Otherwise configure the config.json file to your site's specifications.


For mor information Algolia integration with Docusaurus, follow this [link](https://docusaurus.io/docs/search#using-algolia-docsearch)