// Exercise: A live chatroom!
//
// Utilize the premade template and websockets to build a basic chat page
//
//
class MessageSystem {
  emptyMessages() {
    this.messagesUl.innerHTML = "";
  }

  storeMessage(message) {
    let messageStorage = JSON.parse(localStorage.getItem("messages"));
    if (messageStorage && Array.isArray(messageStorage)) {
      messageStorage.push(message);
    } else {
      messageStorage = [];
      messageStorage.push(message);
    }
    localStorage.setItem("messages", JSON.stringify(messageStorage));
  }

  renderFromStore() {
    let messageStorage = JSON.parse(localStorage.getItem("messages")) || [];

    messageStorage.forEach((message) => {
      //this.addMessage(message, false);
    });
  }

  addMessage(message, cache = true) {
    if (cache) {
      this.storeMessage(message);
    }
    const newMessageLi = document.createElement("li");
    newMessageLi.innerHTML = `${message.user} says: ${message.message}`;
    this.messagesUl.append(newMessageLi);
  }

  constructor(host) {
    const connection = new WebSocket("wss://" + host);

    // form
    this.form = document.querySelector("form");

    // input
    this.input = this.form.querySelector("input[name=message]");
    this.nameInput = this.form.querySelector("input[name=name]");

    // message list
    this.messagesUl = document.querySelector("#messages ul");
    this.messagesUl.innerHTML = "";

    connection.addEventListener("open", () => {
      console.log("connected");

      this.emptyMessages();
      this.renderFromStore();
    });

    connection.addEventListener("message", (e) => {
      const data = JSON.parse(e.data);
      this.addMessage(data);
    });

    connection.addEventListener("close", (e) => {
      console.log("Connection lost", closed, e.code, e.reason);
    });

    connection.addEventListener("error", (e) => {
      console.log("Error", e);
    });

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const message = {
        user: this.nameInput.value,
        message: this.input.value,
      };

      const messageString = JSON.stringify(message);

      connection.send(messageString);

      //this.addMessage(message);

      this.input.value = "";
    });
  }
}

export default MessageSystem;
