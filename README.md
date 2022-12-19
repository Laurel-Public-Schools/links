# Website

Built using Node.js with [Docusaurus 2](https://docusaurus.io/) react elements.

## Local Installation for development

 Start by cloning the repo in the file directory you want to work from

*works with PS, Bash, gitbash, etc*
```
$ cd /your/working/directory
$ git clone https://github.com/Laurel-Public-Schools/links.git
```
Install node modules
```
$ npm install
```
### Start the app
*the site will automatically spin up and only be accessible via your working machine at http://localhost:3000/*

```
$ npm run start
```

This command opens up a browser window. Most changes are reflected live without having to restart the server.

### Build the package for deployment

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm deploy
```

Easy build and update to GH pages.

Built by [@biohackerellie](https://www.github.com/biohackerellie)