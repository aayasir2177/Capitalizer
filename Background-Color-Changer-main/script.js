const colorGenerator = () => {
  let hex = "0123456789abcdef".split("");

  let random1 = Math.floor(Math.random() * 16);
  let random2 = Math.floor(Math.random() * 16);
  let random3 = Math.floor(Math.random() * 16);
  let random4 = Math.floor(Math.random() * 16);
  let random5 = Math.floor(Math.random() * 16);
  let random6 = Math.floor(Math.random() * 16);

  let colorCode = `#${hex[random1]}${hex[random2]}${hex[random3]}${hex[random4]}${hex[random5]}${hex[random6]}`;

  document.body.style.background = colorCode;
  console.log(colorCode);
};
