var s = prompt("Enter sentence...: ");

function capatalizer(s) {
  let sentence = s.toLowerCase().split(" ");
  for (i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(" ");
}

alert(capatalizer(s));
