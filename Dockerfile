
FROM node:lts as base

ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

WORKDIR /home/node/app

COPY --chown=node:node . /home/node/app/

## Development #################################################################
# Define a development target that installs devDeps and runs in dev mode
FROM base as development
WORKDIR /home/node/app
# Install (not ci) with dependencies, and for Linux vs. Linux Musl (which we use for -alpine)
RUN npm install
# Switch to the node user vs. root
USER node
# Expose port 3000
EXPOSE 3000
# Start the app in debug mode so we can attach the debugger
CMD ["npm", "start"]

## Production ##################################################################
# Also define a production target which doesn't use devDeps
FROM base as production
WORKDIR /home/node/app
COPY --chown=node:node --from=development /home/node/app/node_modules /home/node/app/node_modules
# Build the Docusaurus app
RUN npm run build

## Deploy ######################################################################
# Use a stable nginx image
FROM nginx:stable-alpine as deploy
WORKDIR /home/node/app
# Copy what we've installed/built from production
COPY --chown=node:node --from=production /home/node/app/build /usr/share/nginx/html/
