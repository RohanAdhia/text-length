window.onload = function() {
  document.body.style.visibility = 'visible';
  var input = document.getElementById("text-area").focus();
}

var textbox = document.getElementById("text-area");
var count = document.getElementById("count");

textbox.oninput = function() {
  var text = textbox.value;
  var length = text.length;
  if (length === 0) {
    count.style.display = "none";
  } else {
    if (length === 1) {
      count.style.display = "table";
      count.innerHTML = length + " character";
    } else {
      count.style.display = "table";
      count.innerText = length + " characters";
    }
  }
}
