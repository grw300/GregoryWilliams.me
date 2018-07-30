---
title: "Starting GregoryWilliams.me"
cover: "https://unsplash.it/400/300/?random?BoldMage"
summary: "Re-igniting side projects as a way of life."
date: "28-7-2018"
category: "process"
tags:
    - create
    - content
    - motivate
---
# Getting back to coding at home

Ideas for new projects are constantly popping into my head, but for the past 8 months, I have don't next to nothing with them. This blog is an attempt to get back to coding at home.

## Done with school

When I was in school for my graduate degree, I was almost constantly coding. The Cockrell School's Engineering Executive Education offers a [master's in software engineering](http://executive.engr.utexas.edu/pme/swe.php) that I found extremely valuable in developing my skill set and learning more sophisticated patterns and practices.

But perhaps the best thing is did was force my to code almost every day. The consistency increased my productivity and code quality by leaps and bounds.

Since graduating, however, I've lapse into old habits after hours. Hours on Reddit, hours on Netflix, hours on YouTube.

## Getting back to it

Recently however, I had a discussion with a colleague about a new ASP.NET Core project called [Blazor](https://github.com/aspnet/Blazor). He talked about playing around with the new Razor pages, writing dynamic web content in C#, seeing [WebAssembly](https://webassembly.org) in action, and his excitement was palpable. I realized that the last time I'd actually done some coding just for fun was January. So I've decided it's time to get back on the wagon - starting with this blog.

# Oldest idea in the ol' noggin

One of the oldest ideas in my head is a personal blog created in code without using a "builder." There's nothing wrong with using a website builder (I've read that [Ghost](https://ghost.org) - which is what [Troy Hunt](https://www.troyhunt.com/its-a-new-blog/) uses - is really good), but I have no professional web development experience, so doing it as "raw" as I could would introduce me to new ideas.

## False starts

At first I tried to use [Vue.js](https://vuejs.org) in an ASP.NET Core [Single Page Application (SPA)](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/?view=aspnetcore-2.1) project, but ran into to many configuration errors and [decided to try again](https://github.com/grw300/GregoryWilliams.me/commit/7a10ddd4fd01da63d981ae1ed5319b5986ddaf1b).

After reading around I decided to give [React](https://reactjs.org) a try, still within an ASP.NET Core SPA. I really liked the React paradigm, but was wholly unprepared for the complexities in setting up a SPA from scratch. Even using [create-react-app](https://github.com/facebook/create-react-app) still left too much to do.

## Fundamental problem

The fundamental issue I kept running into was that I wanted my content to live in a separate service than my blog. For both the Vue.js and React implementations, I was using a [JSON API .Net Core](https://json-api-dotnet.github.io/#/) API to post and store my content. But this lead my down the dark road of Authentication/Authorization on the site - I wanted to restrict who could write posts and moderate content. I've done auth on multiple projects, but extending a blog into this space seemed like overkill.

## Enter Gatsby

So I thought about using a builder instead. After all, if the goal was learning, I'd done a lot of that in my two failed attempts. But then I stumbled upon [this](https://jiahao.codes/blog/why-i-upgraded-my-website/) blog post by Jia Hao describing the thought process behind selecting [Gatsby](https://www.gatsbyjs.org) as his personal blog framework.

## Let's go!

The content is stored as loose markdown within the repository. My big problem, content management and auth, is taken care of by a system I am very familiar with - a GitHub repository. So this is the blog! I hope to use it to keep my nose to the grindstone, creating new projects, and posting my thoughts and accomplishments here.

Let's go!