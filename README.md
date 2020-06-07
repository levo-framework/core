# Levo

![](https://github.com/levo-framework/core/workflows/CI/badge.svg)

## Background story
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
* SEO friendly
* Scales naturally
* Promotes standardized coding style
* Should follow [Google's Lighthouse](https://developers.google.com/web/tools/lighthouse) guideline
* Backward compatible
* Type-safe, don't serve pages with bombs

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
* Action logging at browser
* Robots.txt

## Features that are NOT supported
* Authentication and authorization
* Database connection
* Component with private states
* Client-side routing

## Guidelines
It's important to keep the following rules in mind in order to for Levo to performs best.
* A lot of thin pages is better than a few fat pages
* Component should never have private state, all state should be stored in one true global source
* Routing is based on directory, so name them carefully
* Never rename files or folder that starts with `levo.`, for example `levo.client.ts`
* Never import server-specific code in `levo.client.ts`
* Never import browser-specific code in `levo.server.ts`
* Always create new pages using the CLI tool `levo`
* Always write CSS in `index.css` instead of `view.ts` whenever possible

## How to re-bundle Levo runtime?
```
deno bundle --config tsconfig.json src/levo-runtime.ts > levo-runtime.bundle.js
```