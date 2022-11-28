let holder = document.getElementById("holder");
let count = 1;

const imageChanger = (e) => {
  if (e.keyCode === 39) {
    if (count >= 5) {
      count = 1;
    } else {
      count += 1;
    }
    holder.src = `${count}.jpg`;
    console.log(count);
  } else if (e.keyCode === 37) {
    if (count <= 1) {
      count = 5;
    } else {
      count -= 1;
    }
    holder.src = `${count}.jpg`;
    console.log(count);
  }
};

document.addEventListener("keydown", imageChanger);
