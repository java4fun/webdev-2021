import $ from "../../../lib/jquery";

$(function () {
  async function load() {
    let response = await fetch("/artists");
    let json = await response.json();
    let template = require("./template.html");
    $("#view").html(template({ artists: json }));
  }

  $("#load").click(load);
});
