# Start Polymer 3.0 

A simple Polymer 3.0 demo app. See it deployed at [start-polymer3.firebaseapp.com](https://start-polymer3.firebaseapp.com).

Note: Please use the latest version of Chrome or Safari to view the app. It uses native [dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import).

To use the app:

  1.  [Set up a development environment for Polymer projects](#setup):
        * [Install Polymer CLI prerequisites](#installprerequisites).
        * [Install Polymer CLI](#installpolymercli).
  2.  [Clone, install and serve the `start-polymer3` project locally](#clone).
  3.  (Optional) [Build the `start-polymer3` project for production](#build).
  4.  (Optional) [Deploy the `start-polymer3` project](#deploy).

<a name="install"></a>

## Set up a development environment for Polymer projects

Before you can serve this project, you will need to install Polymer CLI
and its prerequisites.

If you've installed Polymer CLI before, please note that you will need the `@next` version to work with this project.

<a name="installprerequisites"></a>

### Install Polymer CLI Prerequisites

* [Git](https://git-scm.com/download/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

<a name="installcli"></a>

### Install Polymer CLI

When you've installed the prerequisites, run the following command to install the Polymer CLI globally:

```
npm install -g polymer-cli@next
```

<a name="clone"></a>

## Clone, install and serve the start-polymer3 project locally

To clone the project, install its dependencies, and serve locally:

```
git clone https://github.com/PolymerLabs/start-polymer3.git
cd start-polymer3
npm install
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

<a name="build"></a>

## Build the start-polymer3 project for production

TODO: Finish this section.

To build the `start-polymer3` app: 

```
npm install
polymer build
```

The build is output to `build/esm-unbundled`. 

<a name="deploy"></a>

## Deploy the start-polymer3 project

TODO: Finish this section.

You can deploy a built Polymer app to any web server. Suggestions are:

* [Deploy with Firebase](#firebase).
* TODO: Deploy with Google App Engine.

<a name="firebase"></a>

### Deploy with Firebase

To deploy the app to your own Firebase project:

1.  [Install the Firebase CLI tools](https://firebase.google.com/docs/cli/).

    ```
    npm install -g firebase-tools
    firebase login
    ```

2.  From the [Firebase console](https://console.firebase.google.com/), create a Firebase project.

3.  [Initialize Firebase in your project folder](https://firebase.google.com/docs/cli/#initializing_a_project_directory). 

    ```
    firebase init
    ```

    Complete the Firebase initialization process to set up your project for hosting. 

        * At the prompt to select Firebase CLI features, select Hosting.

        * At the prompt to select a default Firebase project, select the project you created from the Firebase console.

        * At the prompt to specify a `public` folder, you can enter `build/esm-unbundled` to deploy the build configuration supplied with this sample project.

        * At the prompt to configure as a single-page app, enter `Y`. 

4.  In a text editor, open `firebase.json` from your root project folder.

    `hosting.ignore` is a list of files that Firebase will not deploy. Remove `"**/node_modules/**" from this list and save the file.

    **firebase.json: Before**

    ```
    {
        "hosting": {
            "public": "build/esm-unbundled",
            "ignore": [
            "firebase.json",
            "**/.*",
            "**/node_modules/**"
            ],
            "rewrites": [
            {
                "source": "**",
                "destination": "/index.html"
            }
            ]
        }
    }
    ```

    **firebase.json: After**

    ```
    {
        "hosting": {
            "public": "build/esm-unbundled",
            "ignore": [
            "firebase.json",
            "**/.*"
            ],
            "rewrites": [
            {
                "source": "**",
                "destination": "/index.html"
            }
            ]
        }
    }
    ```

4.  [Deploy your project](https://firebase.google.com/docs/cli/#deployment) with Firebase.

    ```
    firebase deploy
    ```
