var x = true;

let main = (divId) => {
  fetch("https://api.countapi.xyz/update/Super_Stranka/ZULUL/?amount=1");

  let currentDiv = document.getElementById(divId);
  let currentDivClassList = currentDiv.classList;
  console.log(currentDivClassList);

  if (currentDivClassList[1] == "checked") {
    console.log("you can't rewrite");
  } else {
    switch (x) {
      case true:
        currentDiv.innerHTML = '<i class="fas fa-times"></i>';
        currentDiv.classList += " checked";
        x = false;
        break;
      default:
        currentDiv.innerHTML = '<i class="far fa-circle"></i>';
        currentDiv.classList += " checked";
        x = true;
        break;
    }
  }
};

let reset = () => {
  let divs = [
    "div1",
    "div2",
    "div3",
    "div4",
    "div5",
    "div6",
    "div7",
    "div8",
    "div9",
  ];

  let clear = (x, y) => {
    console.log(x);
  };

  divs.forEach(clear());
};
