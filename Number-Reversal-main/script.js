var num = +prompt("Enter numbner...: ");

var s = num.toString();

function reverseString(s) {
  return s.split("").reverse().join("");
}

alert(reverseString(s));
