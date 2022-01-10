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
