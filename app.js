var x = true;

let main = (divId) => {
  let currentDiv = document.getElementById(divId);
  fetch("https://api.countapi.xyz/update/Super_Stranka/ZULUL/?amount=1");

  switch (x) {
    case true:
      currentDiv.innerHTML = '<i class="fas fa-times"></i>';
      x = false;
      break;
    default:
      currentDiv.innerHTML = '<i class="far fa-circle"></i>';
      x = true;
      break;
  }
};
