# DocSearch v3 Webcrawler 

## Usage

This is the webcrawler we use specifically with Algolia DocSearch v3 for indexing our site for search purposes. the following script will the crawler in a docker container, which closes after the crawler finishes, and will be run regularly via a cron task. 

```
docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper
```

For mor information Algolia integration with Docusaurus, follow this [link](https://docusaurus.io/docs/search#using-algolia-docsearch)