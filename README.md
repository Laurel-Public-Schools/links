# Website

Built using Node.js with [Docusaurus 2](https://docusaurus.io/) react elements.

Use the [Reference Guides](./Reference%20Guides/) folder for helpful guides on Markdown, as well as specifics for editing this site.

## Local Installation for development

**You must have Node.JS installed on the machine you are working from. [Installers](https://nodejs.org/en/download/)**

 Start by cloning the repo in the file directory you want to work from

*works with PS, Bash, gitbash, etc*
```
 cd /your/working/directory
 git clone https://github.com/Laurel-Public-Schools/links.git
```
Install node modules
```
cd /links
npm install
```
### Start the app
*the site will automatically spin up and only be accessible via your working machine at http://localhost:3000/*

```
npm run start
```

This command opens up a browser window. Most changes are reflected live without having to restart the server.

### Shutdown the app
```
# windows,linux 
ctrl+c

# apple
cmd+c
```

### Build the package for deployment

```
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

We are using the official Node.js Docker container which can be found on [Dockerhub](https://hub.docker.com/_/node) 

### To build this repo, attach command line to the running container, then run the following:
```
git clone https://github.com/Laurel-Public-Schools/links.git \ 
cd links \
npm install \
&& npm install docusaurus \
&& npm run build \
&& npm run serve
```
You will be able to open the static web content at http://localhost:3000


Built by [@biohackerellie](https://www.github.com/biohackerellie)