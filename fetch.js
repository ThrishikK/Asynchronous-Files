//
const fetchText = document.querySelector(".fetch-text");
//
const url = "https://restcountries.com/v3.1/name/";
fetch(`${url}china`)
  .then(function (response) {
    console.log("Third Request");

    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const [one] = data;
    let text = `${one.name.official} `;
    text += `Population :- ${one.population}`;
    fetchText.textContent = text;
  });
