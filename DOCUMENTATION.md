# Bullet Buddy: Documentation

Bullet Buddy is a PWA (Progressive Web App) based on the analog organization system 
[Bullet Journal](http://bulletjournal.com/). The 
app aims to take the systems combination of calender, to-do list and notebook,
and emulate it's ease of use and handy method of 'Rapid Logging' in to a digital
format, that doesn't adversely affect the speed of using Bullet Journal, and
preserves the framework and it's modular system while still being customisable.

A live WIP version is available at: https://bulletbuddy.app

# Contents

- [1.0 Tech Stack](#10-tech-stack)
- [2.0 Install and Run](#20-install-and-run)
- [3.0 System Design](#30-system-design)
  - [3.1 Page Types](#31-page-types)
  - [3.2 Styling Guidelines](#32-styling-guidelines)

---

<div id="1.0" />

# 1.0 Tech Stack

**Front-end:**

- [Nuxt.js (Vue.js Framework)](https://nuxtjs.org/guide)
  - [Nuxt PWA Module](https://github.com/nuxt-community/pwa-module)
- [Vue.js (Javascript SPA Framework)](https://vuejs.org/)
  - [Vue Touch Events](https://www.npmjs.com/package/vue2-touch-events)
- [Vuex (Vue.js state management)](https://vuex.vuejs.org/en/)
  - [Vuex Persisted State](https://github.com/robinvdvleuten/vuex-persistedstate)
- [SASS (Compiled CSS Language)](http://sass-lang.com/)
- [ESLint (Airbnb Javascript Style Guide)](https://github.com/airbnb/javascript)

**Assets:**

- [Feather Icons](https://feathericons.com/)

**Hosting:**

- [Netlify (Static Site Hosting)](https://www.netlify.com/)


[<-- Back to Contents](#contents)

---

# 2.0 Install and Run

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

[<-- Back to Contents](#contents)

---

# 3.0 System Design

## 3.1 Pages Types

The code has been designed in a way that page types such as Daily Log, Monthly
Log, Habit Tracker, are completely modular, only accessing their own Vuex
module, and only interacting with other parts of the code through their Vuex actions.

Here are some existing page types and any components associated:

- Daily Log:
  - `~/components/LogTypeDaily.vue` (Daily Log Parent Component)
  - `~/components/LogInput.vue`
  - `~/components/LogList.vue`
  - `~/store/modules/logTypeDaily.js` (Vuex Module)
- Monthly Log:
  - `~/components/LogTypeMonthly.vue` (Monthly Log Parent Component)
  - `~/components/LogInput.vue`
  - `~/components/LogList.vue`
  - `~/store/modules/logTypeMonthly.js` (Vuex Module)

The components will interact with their on Vuex state, which will be synced with
the `viewedPageContent`, and in turn, synced with the respective space in the
root `pages` array, containing all pages in the app.

[<-- Back to Contents](#contents)

---

## 3.2 Styling Guidelines

- Components are styled using the 
  [BEM Methodoloy](http://getbem.com/introduction/) and SCSS. 
- SCSS inside a `.vue` component should only effect elements within 
  that component.
- SCSS inside a `layout` component can affect global css element (e.g. `html`,
  `body`).

[<-- Back to Contents](#contents)

---
