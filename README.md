# Website

Built using Node.js with [Docusaurus 2](https://docusaurus.io/) presets themes.

### Installation

```
$ yarn
```

### Local Development for testing

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

Easy build and update to GH pages.
