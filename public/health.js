fetch("/artists")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    if (data.length > 0) {
      const messageEl = document.querySelector(".message.warning.fetch");
      messageEl.classList.remove("warning");
      messageEl.classList.add("success");
      messageEl.innerHTML =
        '<h2><i class="ui icon check"></i> Making a fetch request</h2>';
    }
  });

const messageEl = document.querySelector(".message.warning.modules");
messageEl.classList.remove("warning");
messageEl.classList.add("success");
messageEl.innerHTML =
  '<h2><i class="ui icon check"></i> ES Modules Supported</h2>';

console.log("Hello from the module!");
