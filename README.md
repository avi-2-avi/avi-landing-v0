# Landing Page - version 0
Version 0 of my own landing page.

## Table of Contents
+ [About](#about)
+ [Getting Started](#getting_started)
+ [What I've learnt so far](#learnt)
+ [What's comming next](#next)

## About <a name = "about"></a>
This project is the test version of my personal website, which is also my first complete website made with Svelte. This website is meant to be simple and for a long-scrolling experience. The main purpose of this project is to make this website easy to understand by the visitor and quick to modify if any information changes on the way (like, projects I've done, career experience, etc).

This project is also educational for me, so I'll be documenting what I've learnt so far during this journey.

## Getting Started <a name = "getting_started"></a>
Clone the repository and install the dependencies with `npm install` (or `pnpm install` or `yarn`). Run it like so:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## What I've learnt so far <a name = "learnt"></a>

- Vite: Tool that provides a faster and modern development experience. Useful for React and Vue. It's already integrated in Svelte. 
- Tailwind CSS: Generates and writes styles from HTML, JS and other templates into static CSS. We use the PostCSS to integrate Tailwind with building tools like Vite (which is being used). Installing Tailwind with Vite is easy, just follow the guide in the documentation and you'll be fine. The documentation is very helpful when working with Tailwind, making it comfortable to learn.
- Typescript: The so-called better Javascript. Has strong typing and has been crucial for not making silly mistakes.
- Svelte: Front-end framework for building ffast applications, which is way faster than React. I used is as an experiment and I've liked it so far. It already includes Vite so it was not necesarry to include it.
- Responsiveness: It's quite useful to understand it so that your website does not look weird in different devices. The device responsiveness the site will has is for phones, tables, laptop and monitor screens.


## What's comming next <a name = "next"></a>
1. Redesigning the website (my personal logo, my pic, choosing more personalized colours...)
2. Adding animations, so that the website doesn't seem too static.
3. Doing it in with another framework (probably Astro as it can also integrate Svelte and React components).