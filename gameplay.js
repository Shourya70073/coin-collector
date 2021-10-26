function gameplay() {
    let root = document.createElement("div");
    root.setAttribute("class", "roottt");
    document.body.appendChild(root);

    let score = document.createElement("h1");
    let svalue = 0;
    score.setAttribute("id", "score");
    score.setAttribute("class", "neon-button");
    score.innerHTML = "Score: 0";
    root.appendChild(score);

    setInterval(function () {
      let avail = true;
      let coin = document.createElement("img");
      coin.setAttribute("src", "coin.png");
      coin.setAttribute("class", "coin");

      let left = parseInt(Math.random() * window.innerWidth);
      let top = parseInt(Math.random() * window.innerHeight);
      coin.style.setProperty("top", top + "px");
      coin.style.setProperty("left", left + "px");
      root.appendChild(coin);

      coin.onmouseover = function () {
        root.removeChild(coin);
        svalue += 10;
        score.innerHTML = "Score: " + svalue;
        avail = false;
        let audio = new Audio("coin.wav");
        audio.play();
      };

      setTimeout(function () {
        if (avail) {
          root.removeChild(coin);
        }
      }, 2000);
    }, 1000);

    setInterval(function () {
      let avail = true;
      let bomb = document.createElement("img");
      bomb.setAttribute("src", "bomb.png");
      bomb.setAttribute("class", "bomb");

      let left = parseInt(Math.random() * window.innerWidth);
      let top = parseInt(Math.random() * window.innerHeight);
      bomb.style.setProperty("top", top + "px");
      bomb.style.setProperty("left", left + "px");
      root.appendChild(bomb);
     

      bomb.onmouseover = function () {
        root.removeChild(bomb);
        svalue = 0;
        score.innerHTML = "Score: " + svalue;
        avail = false;
        let audio = new Audio("bomb.wav");
        audio.play();
        document.body.removeChild(root);
        endpage();
      };

      setTimeout(function () {
        if (avail) {
          root.removeChild(bomb);
        }
      }, 2000);
    }, 1000);
  }
  setInterval(function () {
      let avail = true;
      let bomb = document.createElement("img");
      bomb.setAttribute("src", "bomb.png");
      bomb.setAttribute("class", "bomb");

      let left = parseInt(Math.random() * window.innerWidth);
      let top = parseInt(Math.random() * window.innerHeight);
      bomb.style.setProperty("top", top + "px");
      bomb.style.setProperty("left", left + "px");
      root.appendChild(bomb);
    //   q();
     

      bomb.onmouseover = function () {
        root.removeChild(bomb);
        svalue = 0;
        score.innerHTML = "Score: " + svalue;
        avail = false;
        let audio = new Audio("bomb.wav");
        audio.play();
        document.body.removeChild(root);
        endpage();
      };

      setTimeout(function () {
        if (avail) {
          root.removeChild(bomb);
        }
      }, 2000);
    }, 1000);
  function q(){
    setInterval(function () {
        let avail = true;
        let bomb = document.createElement("img");
        bomb.setAttribute("src", "bomb.png");
        bomb.setAttribute("class", "bomb");
  
        let left = parseInt(Math.random() * window.innerWidth);
        let top = parseInt(Math.random() * window.innerHeight);
        bomb.style.setProperty("top", top + "px");
        bomb.style.setProperty("left", left + "px");
        root.appendChild(bomb);
       
  
        bomb.onmouseover = function () {
          root.removeChild(bomb);
          svalue = 0;
          score.innerHTML = "Score: " + svalue;
          avail = false;
          let audio = new Audio("bomb.wav");
          audio.play();
          document.body.removeChild(root);
          endpage();
        };
  
        setTimeout(function () {
          if (avail) {
            root.removeChild(bomb);
          }
        }, 2000);
      }, 1000);
  }
  function startscreen() {
    let root = document.createElement("div");
    root.setAttribute("class", "startdiv");
    document.body.appendChild(root);

    let button = document.createElement("a");
    button.setAttribute("class", "neon-button");
    button.setAttribute("href", "#");
    button.innerHTML = "Start";
    root.appendChild(button);
    button.onclick = function () {
      document.body.removeChild(root);
      gameplay();
    };
  }
  function endpage(){
    let root = document.createElement("div");
    root.setAttribute("class", "startdiv");
    document.body.appendChild(root);

    let button = document.createElement("a");
    button.setAttribute("class", "neon-button");
    button.setAttribute("id", "#end");
    button.setAttribute("href", "#");
    button.innerHTML = "Game Over";
    root.appendChild(button);
  }
  
  startscreen();