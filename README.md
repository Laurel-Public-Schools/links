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
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

We are using the official Node.js Docker container, edit the volume section of the docker compose file to match your repository root location, then cd from your cli into your repository root and run ``docker-compose up`` . Your command line will be attached to the new node container and you can move on to the build step, if you are just setting up the container but aren't building yet, run ``docker-compose up -d`` to run it detached from your cli. You can reattach at any point by running ``docker attach <container ID>``
#### Build and serve the site from the container
```
cd app \
npm install 
&& npm install docusaurus 
&& npm run build 
&& npm run serve
```
You will be able to open the static web content at http://localhost:3000


Built by [@biohackerellie](https://www.github.com/biohackerellie)