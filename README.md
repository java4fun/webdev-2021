# WebDev: Web Development Course

This is the source code and training content for the Web
Development course taught by [Ryan Morris][mrmorris].

It is based off mixed course content originally authored by by [Peter J. Jones][pjones], [Ryan Morris][mrmorris] and [Joshua McNeese][jmcneese].

## Pre-reqs before set up

1. Make sure you have [Node.js](https://nodejs.org/en/) `>=` 8

```
node --version
```

2. You should have an IDE ready to roll. I'll be using [VS Code](https://code.visualstudio.com/) but you can use anything, even a simple text editor.

3. Download this project follow the set up instructions below.

If you have issues, reach out to the event organizor for help!

## Set Up Instructions

> Preferably try this out before class begins!

1. Download this repository
1. Install dependencies. You shouldn't see any errors - warnings are generally OK.

```
cd the-folder-you-cloned-into
npm install
```

1. Run the web server

```
npm start
```

3. Visit your new local server and make sure it is running! You should see a welcome page.

```
http://localhost:3000/
```

## Websockets labs

The project includes a websockets server alongside the typical web server. You can run both simultaneously with stmux:

```
npm run start:all
```

To exit stmux (kill your servers), type `ctrl+a` then press `k`.

Or just run the websocket server standalone:

```
npm run chat
```

# Credits

- [jmcneese](https://github.com/jmcneese)
- [mrmorris](https://github.com/mrmorris)
- [pjones](http://www.devalot.com/about/pjones.html)
