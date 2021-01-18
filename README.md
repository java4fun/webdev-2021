# WebDev: Web Development Course

This is the source code and training content for the Web
Development course taught by [Ryan Morris][mrmorris].

It is based off mixed course content originally authored by by [Peter J. Jones][pjones], [Ryan Morris][mrmorris] and [Joshua McNeese][jmcneese].

Please do ensure you have the **Pre-reqs** nad have followed the **set up instructions** prior to the start of class.

## Do this before day 1 of the class:

1. Make sure you have [Node.js](https://nodejs.org/en/) `>=` 10

```
node --version
```

2. Have an IDE ready to roll. I'll be using [VS Code](https://code.visualstudio.com/) but you can use anything, even a simple text editor.

3. Follow the set up instructions below. Get it running!

## Set Up Instructions

> Preferably do this before class begins!

1. Download this repository
1. Install dependencies. You shouldn't see any errors - warnings are generally OK.

```bash
cd the-folder-you-cloned-or-unzipped-into
npm install
```

1. Run the web server

```bash
npm start
```

3. [Visit](http://localhost:3000/health.html) your new local server in your browser and make sure it is running! You should see a welcome page.

```bash
http://localhost:3000/health.html

# or the front page of the class:
http://localhost:3000/
```

**_That's it!_** -- you're ready for class.

If you have any problems, please open an issue in this project with details like: operating system, node version, steps you took, any error output you're seeing.

If needed, dit the `json-server.json` file to customzie the port setting.

---

## Websockets labs

> You don't need to do this before class...

The project includes a websockets server alongside the typical web server. You can run both simultaneously with stmux:

```bash
npm run start:all
```

To exit stmux (kill your servers), type `ctrl+a` then press `k`.

Or just run the websocket server standalone:

```bash
npm run chat
```

# Credits

- [jmcneese](https://github.com/jmcneese)
- [mrmorris](https://github.com/mrmorris)
- [pjones](http://www.devalot.com/about/pjones.html)
