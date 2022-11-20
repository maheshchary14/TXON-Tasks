var expmsg = "";
var resmsg = "";
function btnclick(ele) {
  var snd = new Audio("apple.ogg");
  snd.play();
  if (ele.value == "AC") {
    expmsg = "";
    resmsg = "";
  } else if (ele.value == "C") {
    expmsg = expmsg.slice(0, -1);
  } else if (ele.value == "=") {
    resmsg = eval(expmsg);
  } else {
    expmsg += ele.value;
  }
  document.getElementById("exp").innerHTML = expmsg;
  document.getElementById("res").innerHTML = resmsg;
}
