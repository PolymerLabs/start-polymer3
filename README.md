# Start Polymer 3.0 

A simple Polymer 3.0 demo app. See it deployed at [start-polymer3.firebaseapp.com](https://start-polymer3.firebaseapp.com).

Note: Please use the latest version of Chrome or Safari to view the app. It uses native [dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import).

To use the app:

  1. [Install the Polymer CLI and its prerequisites](#install)
  2. [Clone, install and serve locally](#clone)
  3. [Build](#build)
  4. [Deploy](#deploy)

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

To view the app, open the `applications` link in the latest version of Chrome or Safari. For example:

```
~/start-polymer3 > polymer serve
info:    Files in this directory are available under the following URLs
      applications: http://127.0.0.1:8081
      reusable components: http://127.0.0.1:8081/components/start-polymer3/
```

In the example above, you'd open http://127.0.0.1:8081.

## Build

TODO: Complete this section

_The Polymer CLI build tool is still in flux for Polymer 3.0 apps. Weird stuff might happen. Please keep an eye on [the Polymer project blog](https://www.polymer-project.org/blog/)-we'll make a post when the tools have been updated :)_

To build the app: 

```
yarn install --flat
polymer build
```

The build is output to `build/es6-unbundled`. 

## Deploy

TODO: Complete this section

This sample site is deployed on Firebase at [start-polymer3.firebaseapp.com](https://start-polymer3.firebaseapp.com). 

Take a look at `firebase.json` for example deployment config, and also see [the Firebase docs](https://firebase.google.com/docs/hosting/deploying).

To deploy your own app:

1.  [Install the firebase CLI tools](https://firebase.google.com/docs/cli/).

    ```
    npm install -g firebase-tools
    firebase login
    ```

2.  From the [firebase console](https://console.firebase.google.com/), create a firebase project.

3.  [Initialize firebase in your project folder](https://firebase.google.com/docs/cli/#initializing_a_project_directory). 

    ```
    firebase init
    ```

    When prompted for a `public` folder, you can enter `build/es6-unbundled` to deploy the build configuration supplied with this sample project.

4.  [Deploy your project](https://firebase.google.com/docs/cli/#deployment).

    ```
    firebase deploy
    ```
