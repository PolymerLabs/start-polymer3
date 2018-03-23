# Start Polymer 3.0 

A Polymer 3.0 Hello World app. See it deployed at [start-polymer3.firebaseapp.com](https://start-polymer3.firebaseapp.com).

Note: Please use the latest version of Chrome or Safari to view the app. It uses native [dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import).

* [Install the Polymer CLI and its prerequisites](#install)
* [Clone this project and serve it locally](#clone)

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

## Clone this project and serve it locally 

When you've installed the Polymer CLI and its prerequisites, run the following commands to clone and serve the app:

```
npm install -g polymer-cli@next
git clone https://github.com/katejeffreys/start-polymer3.git
cd start-polymer3
yarn install --flat
polymer serve --open --npm --module-resolution=node
```
