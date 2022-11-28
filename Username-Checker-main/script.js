const currentUsers = [
  "aayasir217",
  "aayasir21",
  "nomann23",
  "hamza616",
  "saad242",
];

const newUsers = ["aayasir217", "aayasir21", "noman3", "hamza6162", "saad24w2"];

const sameUsernames = currentUsers.filter((element) =>
  newUsers.includes(element)
);
if (sameUsernames.length > 0) {
  sameUsernames.map(n=>{
    console.log(`${n} is not available!`);
  })
} else {
  console.log("Username is avaible!");
}

console.log(sameUsernames);
