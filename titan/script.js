function qs(obj, sel) {
  if (sel) {
    if (sel == -1) {
      return document.querySelectorAll(obj);
    } else {
      return document.querySelectorAll(obj)[sel];
    }
  } else {
    return document.querySelector(obj);
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage["titanCord_id"]) {
    qs(".titanEmbed").src = "https://titanembeds.com/embed/" + localStorage["titanCord_id"];
  }
})

function titan(func) {
  let inputId = qs(".header input#titanId");
  let titanEmbed = qs(".titanEmbed");
  switch (func) {
    case "changeId":
      titanEmbed.src = "https://titanembeds.com/embed/" + inputId.value;
      localStorage["titanCord_id"] = inputId.value;
      break;
    case "reset":
      localStorage["titanCord_id"] = "";
      break;
  }
}

function titanIcon(visible) {
  qs(".header img.titanIcon").style.opacity = visible.toString();
}
