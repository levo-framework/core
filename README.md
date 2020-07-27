# Levo

## ATTENTION
Please don't use Levo in production yet as it is still very experimental.

![](https://github.com/levo-framework/core/workflows/CI/badge.svg)

## Background
You can find the background of Levo [here](https://github.com/levo-framework/core/BACKGROUND.md)

## What is Levo?
Levo is a frontend framework that supports Server-Side Rendering (SSR) and The Elm Architecture (TEA) out of the box.

## What is Levo not good at?
* API server, Levo is purely for serving web pages only. 
* Serving single page application (SPA)

## Goals of Levo
* SEO friendly (based on [Google's Lighthouse](https://developers.google.com/web/tools/lighthouse) measurement)
    - don't serve pages that are blank initially
* Scales naturally
    - compile time don't increase when project size increase
* Promotes standardized coding style
    - All Levo projects should look similar
* Backward compatible
    - After releasing v1.0.0, newer versions of Levo shouldn't break previous APIs
* Strong type-safety
    - Prefer compile-time error over run-time error
* Promote usage of browser native APIs
    - don't include abstractions that can already be achieved easily with native APIs
    - for example, 
        - don't create abstraction over network request, just use `fetch`
        - don't abstract CSS into JS

## Features that are supported out of the box (a.k.a no setup required)
* Hot reload (~2 seconds)
* Type-safe JSX Template
* Gzip/brotli compression
* Security headers (based on [Helmet](https://helmetjs.github.io/))
* Javascript/CSS minification

* Directory-based routing
* Wildcard directory-based routing (for handling path params) 
* Asset serving (with MIME types)
* Typechecking for HTML tags, attributes, events and style
* Page memory caching 
* CLI tool for generating boilerplates
* Virtual DOM diffing
* Action logging at browser (inspired by [Redux Logger](https://github.com/LogRocket/redux-logger))
* Robots.txt

## Features that are NOT supported
* Authentication and authorization
* Database connection
* Component with private states
* Client-side routing

## Guidelines
It's important to keep the following rules in mind in order to for Levo to performs best.
* A lot of thin pages is better than a few fat pages
* Avoid storing all dependencies into one file (usually `deps.ts`)  
    * This is because firstly, Deno do not support tree-shaking yet, so unused dependencies will also be bundled
    * Secondly, a lot of compile time will be wasted by compiling unused dependencies
* Component should never have private state, all state should be stored in one true global source
* Routing is based on directory, so name them carefully
* Never rename files or folder that starts with `_`, for example `_client.ts`
* Never import server-specific code in `_client.ts`
* Never import browser-specific code in `_server.ts`
* Always create new pages using the CLI tool `levo`
* Always write CSS in `index.css` instead of `view.ts` whenever possible

# Tutorial
## Setup
First of all, make you sure you installed Deno by following the [instruction here](https://deno.land/#installation).  
Secondly, make sure you are using Deno `v1.2.0`. To do this, run the following command:
```
deno upgrade --version=1.2.0
```

## IDE
It's highly recommended that you use VSCode, and install the the official Deno extension at https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno.


## Installation
Run the following command to install `levo` CLI to get started.
```
deno install --allow-all --unstable --force --name levo https://raw.githubusercontent.com/levo-framework/core/master/cli/mod.ts
```

## Getting started
The first step to get start with Levo is to create a new project using the Levo CLI.
```
levo new-project my-levo-app
```
Then, to run the server:
```
cd my-levo-app
./tools/start-development.sh
```
Finally, visit `http://localhost:5000` to see your first Levo page!

## How to add a new Levo page?
You can add a new page by using `levo new-page <directory>` command.  
Note that this command must be ran at the project root. Also make sure you remember to specify the root directory (which is `root` by default).  
For example:
```
levo new-page root/about/terms-and-condition
```

## What does each Levo page consist of?
Each Levo page consists of the following files/folder:
```
_assets    
_server.ts
_client.ts 
types.ts
update.ts
view.tsx
```
- `_assets`
    - This folder host assets such as CSS stylesheets, images etc, which can be imported by `view.tsx`

- `_server.ts` 
    - this file is the script that will be executed by the server when client requested a URL that correlates to the directory name (relative to root folder) of this page.
    - the purpose of this file is to query initial data that is required to render the page
    - this file can be also used to return a redirection or a customized response (e.g. json, txt etc)
- `_client.ts`
    - this file is the entry file that will be executed by the browser
    - it is used to run initial setup at browser
    - for example, setting up socket event listener, initializing auth library etc.
    - this file is used to specify how the model should be updated give an action 
- `view.tsx`
    - this file is used to:
        - specify how the page should be rendered based on the model provided in `model.ts`
        - specify the `Model` type that will be used to render dynamic content on the page
        - specify the actions that can be executed by client on the page
        - note that the action type must be a [discriminated union](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions) where the discriminated/tag must be named as `$`.


## Which file/folders should not be renamed?
You can rename every file/folder in a Levo as long as it's not prefixed with `_`. 
For example, you shouldn't rename `_server.ts` and `_client.ts` etc.

## Do I need to restart the server when I add or modify some pages?
No, provided that you are running Levo server in development mode (which is the default settings). This is because every page will be re-compiled on upon file changes.

## Routing
Routing is purely based on directory structure, in other words you don't have to manually maintain a routing file.  
There are two types of routing in Levo:
- exact path routing
- wildcard path routing

### Exact path routing
For example, suppose you have the following directory structure where `root` is specified as the site root:
```
root/
    about/
        policy/
```
If client requested a page at `/root/about/policy`, the the `_server.ts` under the `policy` directory will be executed.

## Wildcard path routing
This feature is useful when you want to design dynamic path.  
For example, if you want to setup a path like this `/[user]/profile`, then you should create a new page under the `_/profile` directory, as follows:
```
root/
    _/
        profile/
            _server.ts
```
When client request for `/john/profile` or `/bob/profile`, the `_server.ts` script under `_/profile` will be executed.  

### Exact path VS Wildcard path
Note that exact path routing has a higher precedence than wildcard path routing.  
For example, if you have the following directory structure:
```
root/
    admin/
        profile/
            _server.ts
    _/
        profile/
            _server.ts
```
If client request for `/admin/profile`, the `_server.ts` under `/admin/profile` will be executed.   
Otherwise if client request for `/X/profile` where `X` is any string other than `admin`, the `_server.ts` under `_/profile` will be executed.

### How do I change the site root to other folder?
You can modified this at `app.ts` by chaging the `rootDir` value to the value you want.

---
## How to author a view in Levo?
Levo uses JSX for templating. Basically, its very similar to React except event handlers must be created using `dispatch`:
```tsx
<div id='my-div'>
    <button onclick={dispatch({$: 'hello'})}>
        Click me
    </button>
</div>
```

## Drawback of JSX
One of the biggest drawback of using JSX is that the type of children cannot be constrained properly at the time of writing.
```jsx
<div>
  {{x: 2}}
</div>
```

## How to set environment variables?
Unlike webpack etc, Levo don't magically replace specified names with environment variables value, instead, you have to do it explicitly at:
- `app.ts`
- `environment.ts`

In `environment.ts`, you need to declare the environment object type, for example:
```ts
export type Environment = {
    AUTH_SERVER_URL: string
}
```
Then, in `app.ts` you have to specify the value depending on the shell arguments:
```ts
const production = Deno.args.includes("--production");
LevoApp.start<Environment>({
  environment: {
    AUTH_SERVER_URL: 
      production 
        ? "https://wateracid/x/prod" 
        : "https://wateracid/x/dev",
  },
  // ...other options
})
```
The environment variables will be injected to `_server.ts` of each routes. Environment variables are not injected to client-side code for security reasons, thus to pass the values to browser, you can add a field in the `Model` type that should correspond to a property of the environment variable object.


## How do I run in Levo in production mode?
```
./tools/start-production.sh
```
When Levo server is started in production mode, the server will generate every bundle for every Levo pages under the root directory.


## How to log action at browser?
Run the server with the `./tools/start-development.sh` flag, or customise the `loggingOptions` object in `app.ts`.

---

## Advance topics
### How to create component with private state?
It's possible to emulate component with private state despite the fact that Levo only supports one true global state for each page. However, creating an component with private state require some boilerplates. Therefore, before you consider creating a component like this, maybe try to make it a separate page instead.

Basically, to create a private-state component, you have to define it's own:
- model
- action
- update
- view

Then, to use the private-state component, the top-level model should has a property that hold the model type of the private-state component.  
Also, to pass `dispatch` to the private-state component from the parent component, you need to use the utility function `Levo.mapDispatch`, basically this function convert the top-level dispatch to the dispatch that is usable by the private-state component.  

To fully understand how to make this work, you can look at `./demo/home/about/view.tsx` and `./demo/home/about/counter.tsx`. In this case, `view.tsx` is the parent component, while `counter.tsx` is the child component with private state.

## Development
### How to re-bundle Levo runtime?
```
deno bundle --config levo-runtime.tsconfig.json src/levo-runtime.ts > levo-runtime.bundle.js
```
