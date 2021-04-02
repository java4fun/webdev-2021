/**
 * Exercise: A chat room
 *
 * Leverage the existing HTML & WebSockets to create a chat experience.
 * If you're feeling bold, try using the FormData API.
 *
 * How you design your module is up to you!
 *
 * ---
 *
 * The chat server is all set up, you'll open a WS connection to:
 *  wss://happy-family-chat-time.herokuapp.com/?token=woops
 *
 * The server will respond with an initial "welcome" message (as a JSON string):
 *
 * {
 *   user: "Happy Server",
 *   message: "Welcome!"
 * }
 *
 * After that you can submit a message in the same format and it will echo it out to you and
 * everyone else who is connected. Don't forget to stringify!
 *
 * .send(JSON.stringify({
 *   user: "Ryan",
 *   message: "Hi!"
 * }));
 *
 *
 * Special considerations:
 *
 * My websocket server will time out after 60 seconds of inactivity, therefore it is set
 * up to send a "ping" message to you every 30 seconds. This will be received as an empty
 * message. You can safely ignore these. IF I had full control over my server environment
 * I would increase the timeout and we would not have to do this...
 * websockets *do* have their own ping/pong action.
 *
 * if (event.data.length <= 0) {
 *   console.log("This is likely just the server PING");
 * } else {
 *   const message = JSON.parse(event.data);
 * }
 *
 *
 * Need help getting started?
 * Make a checklist:
 * [] Open a connection to the web socket server
 * [] When a user submits the form, you'll send a message to the chat server
 *  - listen to the submit event
 *  - get data from the form (FormData?)
 *  - Send the message to the Web Socket server
 *  - empty out the form data
 * [] When the chat server responds with a message, you'll render it in the list of messages on the page
 *  - listen to message event
 *  - render a new message <div> in the page when you get one
 * [] Extra: Prevent a user from submitting the form empty
 * [] extra: Consider how to handle templating the messages you want to render
 */
