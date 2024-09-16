const main = document.querySelector(".main");

setTimeout(function () {
  console.log(`Seconds passed = ${5}`);
  main.style.backgroundColor = "steelblue";
  console.log("Back Ground color changed");
}, 5000);
