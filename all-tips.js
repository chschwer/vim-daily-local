
document.addEventListener("DOMContentLoaded", function(event) {
  var ul = document.getElementById("tips");
  phraseArray.forEach(phrase => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(phrase));
    ul.appendChild(li);
  });
});

