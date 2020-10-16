document.addEventListener("DOMContentLoaded", function(event) {
  var phrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
  document.getElementById("tip").appendChild(document.createTextNode(phrase));
});

