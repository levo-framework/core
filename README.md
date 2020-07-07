# Levo

![](https://github.com/levo-framework/core/workflows/CI/badge.svg)

## Background story
This section is very long, you can skip to tutorial by clicking [here](https://github.com/levo-framework/core/#tutorial)

Why do I want to create another web framework?  

Here's my story.  

I've been using React for more than 3 years, and [my first React project](https://ttap.surge.sh/#/select) is written in Typescript using Redux, and I'm quite happy with that because of its success. Also, I use React for all the web projects in my current company, for example dashboard and the company's homepage.  

> So far so good, I felt like nothing is impossible with React.  

*Then, everything changed when the Fire Nation attacked*. 

Just joking. Recently, we found out that our homepage was not scrapped properly by Google Bot, and one of the solution is to render the page on server before returning to client. I thought that's going to be easy, turns out I'm very wrong, there's not much documentation about React SSR. Of course there are frameworks like [Next.js](https://nextjs.org/) or [After.js](https://github.com/jaredpalmer/after.js), but they are overkill. Then we leaped on to [React Static](https://github.com/react-static/react-static), but unfortunately it doesn't work well with dynamic pages (I should have known that from its name, it's not React Dynamic). In the end, we managed to deploy some very hacky magic to make it work, but to be honest the next maintainer of this project will definitely curse me, because it's just too freaking hacky, even me the author don't dare to peek at these foul babies.  


After that painful experience, I realized that it's actually not only React's problem, any frontend SPA frameworks will have this problem, they just cannot befriend SEO without you forcefully marry them.

Now when I look back in my old days, I started to miss the bliss of using PHP (and Ruby, although I never use it) in which you don't have to do anything to make SEO works, they are SEO-d by default!  
Moreover, I really miss how I can just create a script under a directory and it's ready to be deployed, forget about the ReactRouter-Webpack-S3 trinity. 

> Ok, so that's the first problem: SEO is damn hard in React.

---

The second major problem of SPA frameworks is that they tend to get heavier over-time, which means that the time-to-load increases when you add more pages to it. Of course you can use the [code splitting](https://webpack.js.org/guides/code-splitting/) magic to overcome this issue, but it's only effective if you always remember to use it. Obviously I shouldn't blame React for disciplinary issue, but then I ask myself, do I ever have to worry about PHP serving the whole freaking application to client? I almost forgot to talk about this, the compile time of my current dashboard project is heading towards infinity and beyond, the compile-debug-code loop is expanding faster than the universe.

> That's the 2nd problem: scaling naturally is hard in SPA frameworks.

---

Furthermore, most SPA frameworks don't have a fix style of coding, for example my React project can be very different from your React project, sometimes the difference is so big that I feel like I'm travelling to a different planet. 

Nonetheless there's one exception, Angular. It's coding style is pretty standardized, I guess most Angular developers will feel as if they are at home regardless of which Angular project. This is actually a pretty good advantage from the point of view of business, managers don't have to worry too much of being not able to hire the next developer that can truely swims in the pool of existing projects. That's probably why a lot of [corporates prefer Angular over other frameworks](https://www.techrepublic.com/article/angular-vs-react-who-wins-the-front-end-battle-in-the-enterprise/#:~:text=Angular%20is%20more%20popular%20than,React%20was%20mentioned%20in%2037%25.).

> That's the 3rd problem: coding style is non-standardized in most SPA frameworks; bad for big fat projects

---

Last but not least, most SPA frameworks like Vue, Svelte or React, even though they claimed to be functional, they are innately object-oriented. Why do I say so? Because they provide first class support for components with **private state**. Just when you think in React that a functional component is functional, no longer it is when you use hooks. But why is private state bad? Because of two reasons: firstly, it leads to inconsistent coding style, I might prefer child components to host their state themselves, but you might prefer to let parent components handle it. Second and most importantly, private state actually leads to problem of having to host the same state in both parent and child component. This always happen when you think that some state should be in child, then in the future you realized that the private state in child actually needs to be known or possibly manipulated by its parent and vice versa, eventually you end up with a bunch of parent and child components having a very disgusting incest party.

Certainly, this problem can be solved by using [Redux](https://redux.js.org/) (like I mentioned previously that I'm quite happy with it), but, it's very hard to integrate it with existing React projects and it does not prevent future developers from creating components with private state after all.

Just when I'm losing faith in frontend development, a messiah came and offered me salvation in the name of [Elm](https://elm-lang.org/). It is truly a haven for frontend sinners like me, the wonderful [Model-View-Update](https://guide.elm-lang.org/architecture/) architecture means you no longer have to deal with evil capitalism that promotes private ownership! May peace be upon those communistic Elm programmers. All jokes aside, I never truly became an Elm developer, because they have too many rules to be observed, the one that deters me the most is the rule of [No Promiximty with Javascript](https://www.reddit.com/r/elm/comments/5g3540/the_elm_alienation/), it means that you cannot interact freely with Javascript without using safety measures like ports or flags. 

> That's the last reason: no JS frameworks support The Elm Architecture (TEA) out of the box

All of these makes me wonder why frontend development has evovled into a gorgon instead of getting simpler. That being said, I still believe there's hope, therefore I decided to give myself a try, and that's how Levo was born.

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

## Why use Deno instead of Node?
Because Deno has first-class support for Typescript and it don't require a package manager. You can find out more about it at [10 Things I Regret About Node.js](https://www.youtube.com/watch?v=M3BM9TB-8yA).

## Features that are supported out of the box (a.k.a no setup required)
* Gzip/brotli compression
* Javascript minification
* Directory-based routing
* Wildcard directory-based routing (for handling path params) 
* Asset serving with MIME types
* Typechecking for HTML tags, attributes, events and style
* Page caching 
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
* Never rename files or folder that starts with `levo.`, for example `levo.client.ts`
* Never import server-specific code in `levo.client.ts`
* Never import browser-specific code in `levo.server.ts`
* Always create new pages using the CLI tool `levo`
* Always write CSS in `index.css` instead of `view.ts` whenever possible

## How to re-bundle Levo runtime?
```
deno bundle --config levo-runtime.tsconfig.json src/levo-runtime.ts > levo-runtime.bundle.js
```

# Tutorial
## Setup
First of all, make you sure you installed Deno by following the [instruction here](https://deno.land/#installation).  
Secondly, make sure you are using Deno `v1.1.3`. To do this, run the following command:
```
deno upgrade --version=1.1.3
```

## IDE
It's highly recommended that you use VSCode, and install the the official Deno extension at https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno.


## Installation
Run the following command to install `levo` CLI to get started.
```
deno install --allow-all --unstable --name levo https://raw.githubusercontent.com/levo-framework/core/master/cli/mod.ts
```

## Getting started
The first step to get start with Levo is to create a new project using the Levo CLI.
```
levo new-project my-levo-app
```
Then, to run the server:
```
cd my-levo-app
deno run --allow-all --unstable app.ts
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
levo.assets    
levo.server.ts
levo.client.ts 
model.ts       
action.ts      
update.ts
view.ts
init.ts        
```
- `levo.assets`
    - This folder host assets such as CSS stylesheets, images etc, which can be imported by `view.ts`

- `levo.server.ts` 
    - this file is the script that will be executed by the server when client requested a URL that correlates to the directory name (relative to root folder) of this page.
    - the purpose of this file is to query initial data that is required to render the page
    - this file can be also used to return a redirection or a customized response (e.g. json, txt etc)
- `levo.client.ts`
    - this file is the entry file that will be executed by the browser
    - this file shouldn't be modified by user unless necessary
- `model.ts`
    - this file is used to specify the `Model` type that will be used to render dynamic content on the page
- `action.ts`
    - this file is used to specify the actions that can be executed by client on the page
    - note that the action type must be a [discriminated union](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions) where the discriminated/tag must be named as `$`.
- `update.ts`
    - this file is used to specify how the model should be updated give an action 
- `view.ts`
    - this file is used to specify how the page should be rendered based on the model provided in `model.ts`
- `init.ts`
    - this file is used to run initial setup at browser
    - for example, setting up socket event listener, initializing auth library etc.


## Which file/folders should not be renamed?
You can rename every `.ts` file/folder in a Levo as long as it's not prefixed with `levo.`. 
For example, you shouldn't rename `levo.server.ts` and `levo.client.ts` etc.

## Do I need to restart the server when I add or modify some pages?
No, provided that you are running Levo server in development mode (which is the default settings).  This is because every page will be re-compiled on each request. However note that the server will die if there are compile errors.

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
If client requested a page at `/root/about/policy`, the the `levo.server.ts` under the `policy` directory will be executed.

## Wildcard path routing
This feature is useful when you want to design dynamic path.  
For example, if you want to setup a path like this `/[user]/profile`, then you should create a new page under the `_/profile` directory, as follows:
```
root/
    _/
        profile/
            levo.server.ts
```
When client request for `/john/profile` or `/bob/profile`, the `levo.server.ts` script under `_/profile` will be executed.  

### Exact path VS Wildcard path
Note that exact path routing has a higher precedence than wildcard path routing.  
For example, if you have the following directory structure:
```
root/
    admin/
        profile/
            levo.server.ts
    _/
        profile/
            levo.server.ts
```
If client request for `/admin/profile`, the `levo.server.ts` under `/admin/profile` will be executed.   
Otherwise if client request for `/X/profile` where `X` is any string other than `admin`, the `levo.server.ts` under `_/profile` will be executed.

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
The environment variables will be injected to `levo.client.ts` and `levo.server.ts` of each routes.


## How do I run in Levo in production mode?
Simply use the `--production` flag:
```
deno run --allow-all --unstable app.ts --production
```
When Levo server is started in production mode, the server will generate every bundle for every Levo pages under the root directory.

## How to log action at browser?
Run the server without the `--production` flag, or customise the `loggingOptions` object in `app.ts`.

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
