# Start Polymer 3.0 

A simple Polymer 3.0 demo app. See it deployed at [start-polymer3.firebaseapp.com](https://start-polymer3.firebaseapp.com).

Notes: 
* Please use the latest version of Chrome or Safari to view the app. It uses native [dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import).
* The `polymer build` command is still in progress, and won't handle dynamic imports.

To use the app:

  1. [Install the Polymer CLI and its prerequisites](#install)
  2. [Clone, install and serve locally](#clone)

<a name="install"></a>

## Install the Polymer CLI and its prerequisites

Before you can serve this project, you will need to install the Polymer CLI
and its prerequisites.

**Prerequisites:**

* [Git](https://git-scm.com/download/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Yarn](https://yarnpkg.com/en/)

When you've installed the prerequisites, run the following command to install the Polymer CLI globally:

```
npm install -g polymer-cli@next
```

<a name="clone"></a>

## Clone, install and serve locally 

To clone the project, install its dependencies, and serve locally:

```
git clone https://github.com/PolymerLabs/start-polymer3.git
cd start-polymer3
yarn install --flat
polymer serve
```
