# DOCUMENTATION

## Bullet Buddy: Documentation

Bullet Buddy is a PWA \(Progressive Web App\) based on the analog organization system [Bullet Journal](http://bulletjournal.com/). The app aims to take the systems combination of calender, to-do list and notebook, and emulate it's ease of use and handy method of 'Rapid Logging' in to a digital format, that doesn't adversely affect the speed of using Bullet Journal, and preserves the framework and it's modular system while still being customisable.

A live WIP version is available at: [https://bulletbuddy.app](https://bulletbuddy.app)

## Contents

* [1.0 Tech Stack](documentation.md#10-tech-stack)
* [2.0 Install and Run](documentation.md#20-install-and-run)
  * [2.1 Local Development](documentation.md#21-local-development)
  * [2.2 Local Docker](documentation.md#22-local-docker)
  * [2.3 Docker on a Remote Host](documentation.md#23-docker-on-a-remote-host)
  * [2.4 Docker on a Remote Host \(with LetsEncrypt HTTPS\)](documentation.md#24-docker-on-a-remote-host-with-letsencrypt-https)
* [3.0 System Design](documentation.md#30-system-design)
  * [3.1 Page Types](documentation.md#31-page-types)
  * [3.2 Styling Guidelines](documentation.md#32-styling-guidelines)

## 1.0 Tech Stack

**Front-end:**

* [Vue.js \(Javascript SPA Framework\)](https://vuejs.org/)
* [Vuex \(Vue.js state management\)](https://vuex.vuejs.org/en/)
* [SASS \(Compiled CSS Language\)](http://sass-lang.com/)
* [ESLint \(Airbnb Javascript Style Guide\)](https://github.com/airbnb/javascript)
* [PouchDB \(Javascript Client Database\)](https://pouchdb.com/)
* [DayJs \(Date Library\)](https://github.com/iamkun/dayjs)

**Assets:**

* [Feather Icons](https://feathericons.com/)

[&lt;-- Back to Contents](documentation.md#contents)

## 2.0 Install and Run

### 2.1 Local Development

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run serve

# build for production into /dist
$ npm run build
```

### 2.2 Local Docker

```bash
# Build container
$ docker build -t bulletbuddy/bb-client .

# Run the container
$ docker run -d --rm -p 8080:80 --name bb-client bulletbuddy/bb-client
```

### 2.3 Docker on a Remote Host

These instructions will deploy a BulletBuddy Container on a remote host and automatically set up a NGINX reverse proxy.

```bash
# Set Docker ENVs to your remote host
$ eval $(docker-machine env <your-remote-host>)

# Start the Auto NGINX Reverse Proxy container
$ docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy

# Build container
$ docker build -t bulletbuddy/bb-client .

# Run the container
$ docker run -d --rm -p 8080:80 -e VIRTUAL_HOST=yourdomainhere.com --name bb-client bulletbuddy/bb-client
```

### 2.4 Docker on a Remote Host \(with Lets Encrypt HTTPS\)

These instructions will deploy a BulletBuddy Container on a remote host and automatically set up a NGINX reverse proxy, as well as issuing and automatically renewing [Lets Encrypt](https://letsencrypt.org/) certificates.

```bash
# Set Docker ENVs to your remote host
$ eval $(docker-machine env <your-remote-host>)

# Start the Auto NGINX Reverse Proxy container
$ docker run -d -p 80:80 -p 443:443 \
    --name nginx-proxy \
    -v /path/to/certs:/etc/nginx/certs:ro \
    -v /etc/nginx/vhost.d \
    -v /usr/share/nginx/html \
    -v /var/run/docker.sock:/tmp/docker.sock:ro \
    --label com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy \
    jwilder/nginx-proxy

# Start Lets Encrypt NGINX Proxy Companion Container
$ docker run -d \
    -v /path/to/certs:/etc/nginx/certs:rw \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    --volumes-from nginx-proxy \
    jrcs/letsencrypt-nginx-proxy-companion

# Build container
$ docker build -t bulletbuddy/bb-client .

# Run the container (FILL IN YOUR CORRECT DETAILS HERE)
$ docker run -d --rm -p 8080:80 \
  -e VIRTUAL_HOST=example.com \
  -e LETSENCRYPT_HOST=example.com \
  -e LETSENCRYPT_EMAIL=your@email.com \
  --name bb-client bulletbuddy/bb-client
```

**OPTIONAL: Stop 404s on refresh**

* `$ docker cp bb-client:/etc/nginx/conf.d/default.conf .`
* Add the following code below line 10 of `default.conf`
  * `try_files $uri $uri/ /index.html;`
* `$ docker cp default.conf bb-client:/etc/nginx/conf.d/default.conf`
* `$ rm default.conf`

[&lt;-- Back to Contents](documentation.md#contents)

## 3.0 System Design

### 3.1 Pages Types

The code has been designed in a way that page types such as Daily Log, Monthly Log, Habit Tracker, are completely modular, only accessing their own Vuex module, and only interacting with other parts of the code through their Vuex actions.

Here are some existing page types and any components associated:

* Daily Log:
  * `~/components/DailyLog.vue` \(Daily Log Parent Component\)
  * `~/store/modules/dailyLog.js` \(Vuex Module\)
* Monthly Log:
  * `~/components/MonthlyLog.vue` \(Monthly Log Parent Component\)
  * `~/components/MonthlyLogCalender.vue`
  * `~/components/MonthlyLogList.vue`
  * `~/store/modules/monthlyLog.js` \(Vuex Module\)
* Future Log:
  * `~/components/FutureLog.vue` \(Future Log Parent Component\)
  * `~/store/modules/futureLog.js` \(Vuex Module\)

The components will interact with their own local state, which will be synced with the `activePageContent`, and in turn, synced with the respective space in the root `pages` array, containing all pages in the app.

[&lt;-- Back to Contents](documentation.md#contents)

### 3.2 Styling Guidelines

* Components are styled using the 

  [BEM Methodoloy](http://getbem.com/introduction/) and SCSS. 

* SCSS inside a `.vue` component should only effect elements within 

  that component.

* SCSS inside a `layout` component can affect global css element \(e.g. `html`,

  `body`\).

[&lt;-- Back to Contents](documentation.md#contents)

## Other Documents

* [README](./)
* [Contributing](contributing.md)

