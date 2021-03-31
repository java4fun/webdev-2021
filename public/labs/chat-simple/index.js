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
 */
