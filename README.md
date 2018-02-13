# Start Polymer 3.0 

A simple Polymer 3.0 App that displays a Hello World message. See it deployed at [start-polymer3.firebaseapp.com](https://start-polymer3.firebaseapp.com).

Run the [quick start](#quickstart) commands if you've done this before, or follow the [installation instructions](#install).

* [Quick start](#quickstart)
* [Install the Polymer CLI and its prerequisites](#install)
* [Clone this project and serve it locally](#clone)
* [Enable the Service Worker](#serviceworker)
* [Fix Lighthouse audits](#lighthouse)

<a name="quickstart"></a>

## Quick start

```
git clone https://github.com/katejeffreys/start-polymer3.git
cd start-polymer3
polymer serve --open --npm
```

<a name="install"></a>

## Install the Polymer CLI and its prerequisites 

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

<a name="clone"></a>

## Clone this project and serve it locally 

When you've installed the Polymer CLI and its dependencies, run the following commands to clone and serve the template app:

```
git clone https://github.com/katejeffreys/start-polymer3.git
cd start-polymer3
polymer serve --open --npm
```

<a name="serviceworker"></a>

## Enable the Service Worker 

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

## Fix Lighthouse audits

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) is Chrome's developer toolset for improving the quality of your website. In Chrome, enable the Developer Tools and click on the Audits tab to run the Lighthouse audits.

When served locally out-of-the-box, this app will have the following Lighthouse audit failures:

* **PWA**: All audits that depend on a Service Worker will fail. 
  
  To resolve these audit failures, [enable the service worker](#serviceworker).

* **Best Practices**: Does not use HTTP/2. 
  
  To resolve this audit failure, deploy the app to a server that uses HTTP/2 - for example, [Firebase](https://firebase.google.com/).

* **SEO**: Does not have a valid `rel=canonical`. 
  
  To resolve this audit failure, in `index.html`, update the following line of code:
  
  ```html
  <link rel="canonical" href="https://start-polymer3.firebaseapp.com/" />
  ```
  
  Replace the URL with your app URL before deploying.

After enabling the service worker, the app should have excellent results on all Lighthouse audits. Visit [start-polymer3.firebaseapp.com](https://start-polymer3.firebaseapp.com) to see a deployed version of this app.