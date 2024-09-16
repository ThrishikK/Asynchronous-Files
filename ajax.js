const ajaxText = document.querySelector(".ajax-text");

// GETTING COUNTRY DATA
const request = new XMLHttpRequest();
request.open("GET", `https://restcountries.com/v3.1/name/Bhārat`);
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  const resultText = data.altSpellings.join("  <<<=>>>  ");
  ajaxText.textContent = resultText;
});
