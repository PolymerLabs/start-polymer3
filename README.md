# Start Polymer 3.0 

A simple template Polymer 3.0 App that displays a Hello World message.

[start-polymer3.firebaseapp.com](https://start-polymer3.firebaseapp.com)

Run the [quick start](#quickstart) commands if you've done this before, or follow the [installation instructions](#install).

* [Quick start](#quickstart)
* [Installation instructions](#install)
* [Clone and serve locally](#clone)
* [Enable the Service Worker](#serviceworker)

## Quick start <a name="quickstart"></a>

```
git clone https://github.com/katejeffreys/start-polymer3.git
cd start-polymer3
polymer serve --open --npm
```

## Install the Polymer CLI and its prerequisites <a name="install"></a>

Before you can serve or deploy this project, you will need to install the Polymer CLI
and its prerequisites.

**Prerequisites:**

* [Git](https://git-scm.com/download/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Yarn](https://yarnpkg.com/en/)

When you've installed the prerequisites, run the following command to install the Polymer CLI globally:

```
npm install -g polymer-cli
```

Full install instructions are available in the [Polymer 3.0 documentation](https://www.polymer-project.org/3.0/start/install-3-0).

## Clone this project and serve it locally <a name="clone"></a>

When you've installed the Polymer CLI and its dependencies, run the following commands to clone and serve the template app:

```
git clone https://github.com/katejeffreys/start-polymer3.git
cd start-polymer3
polymer serve --open --npm
```

## Enable the Service Worker <a name="serviceworker"></a>

The app has a [service worker](https://developers.google.com/web/fundamentals/primers/service-workers/), but the code that loads it is commented out. 

To enable the service worker, uncomment the loading code in index.html:

**index.html: Before**
```html
<!--script>
  // Load Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/src/serviceworker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // Registration failed
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
</script-->
```

**index.html: After**
```html
<script>
  // Load Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/src/serviceworker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // Registration failed
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
</script>
```