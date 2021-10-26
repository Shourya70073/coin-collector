function startscreen() {
    let root = document.createElement("div");
    root.setAttribute("class", "startdiv");
    document.body.appendChild(root);

    let button = document.createElement("button");
    button.setAttribute("class", "startbutton");
    button.innerHTML = "Start Playing";
    root.appendChild(button);
    button.onclick = function () {
      document.body.removeChild(root);
      gameplay();
    };
  }