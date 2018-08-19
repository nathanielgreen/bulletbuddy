# Bullet Buddy

Bullet Buddy is a PWA (Progressive Web App) based on the analog organization system 
[Bullet Journal](http://bulletjournal.com/). The 
app aims to take the systems combination of calender, to-do list and notebook,
and emulate it's ease of use and handy method of 'Rapid Logging' in to a digital
format, that doesn't adversely affect the speed of using Bullet Journal, and
preserves the framework and it's modular system while still being customisable.

A live WIP version is available at: https://bulletbuddy.app

<div id="contents" />

# Contents

- [1.0 Tech Stack](#1.0)
- [2.0 System Design](#2.0)
  - [2.1 Page Types](#2.1)
  - [2.2 Styling Guidelines](#2.2)
- [3.0 Github Project Info](#3.0)
  - [3.1 Branching Strategy](#3.1)
  - [3.2 Install & Run](#3.2)
- [4.0 Trello Board](#4.0)
  - [4.1 Trello Process](#4.1)

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

<div id="2.0" />

# 2.0 System Design

<div id="2.1" />

## 2.1 Pages Types

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

<div id="2.2" />

## 2.2 Styling Guidelines

- Components are styled using the 
  [BEM Methodoloy](http://getbem.com/introduction/) and SCSS. 
- SCSS inside a `.vue` component should only effect elements within 
  that component.
- SCSS inside a `layout` component can affect global css element (e.g. `html`,
  `body`).

[<-- Back to Contents](#contents)

---

<div id="3.0" />

# 3.0 Github Project Info

<div id="3.1" />

## 3.1 Branching Strategy

### Branches

`master`: The main branch that features, bug fixes and documentation updates
will be merged into.

### Creating a branch

Branches should be named by their type, following they're Trello ticket number,
and a few words describing that ticket.

Example: `feature/BB-92-example-branch-name`

### Branch Types

- `feature`: Code that contains new features or functionality to project code base.
- `task`: Changes to already existing components or functionality.
- `fix`: Fixes a broken feature or piece of functionality.

### Committing Code

Commits should be named with their Trello ticket number, as well as a short
description of what was achieved in this commit.

If a ticket is small enough of a task (like editing some docs/fixing typos etc)
one can commit straight to dev instead of opening a pull request.

e.g. `BB-94: Example git commit`

If the commit is small enough that it isn't worth a Trello Card and Pull Request
(fixing a README typo, removing old info/files), label it a PATCH and commit 
directly to dev.

e.g. `PATCH: Removing incorrect README info`

### Merging Code

To merge your branch, open a pull request on Github and change the title of the
pull request to match that of the Trello ticket, with square brackets around the
ticket number, and regular brackets around the type of card (feature/task/fix).

e.g. `[BB-92] (Feature) Example Pull Request Name`

When code has been reviewed (if necessary) select the option 'Squash and Merge'

[<-- Back to Contents](#contents)

---

<div id="3.2" />

# 3.2 Install & Run

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

<div id="4.0" />

# 4.0 Trello Board

Link to Bullet Buddy Trello Board: https://trello.com/b/DnCjHNmi

<div id="4.1" />

## 4.1 Trello Process

In our Trello we currently have 5 columns: Backlog Refinement, ToDo, In
Progress, PR/QA, Done, Cancelled.

**Backlog Refinement**: New cards are created here. When creating a new card, you must label it with the
project initials, the card number, and a short description of what the card is
for.

e.g. BB-18: Update README with Trello Process

A full description must be added to the card as well as a label before it can be
moved to the ToDo column for a team member to pick up and complete.

**To Do**: Card is ready to be picked up but has not yet been.

**In Progress**: Branch has been opened (if required) and a member is working on that ticket.

**Review**: Requires a peer code review, and is currently in a  pull request from feature
branch to dev. (Not always a necessary step)

**Done**: Card has been completed and merged into `master` branch.

**Cancelled**: Card has been cancelled and is no longer a ToDo. A comment must
be left on the card detailing reasons for its cancellation.


[<-- Back to Contents](#contents)

---
