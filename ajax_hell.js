// GETTING COUNTRY DATA AND ITS BORDER COUNTRY DATA

const request_1 = new XMLHttpRequest();
request_1.open("GET", `https://restcountries.com/v3.1/name/Bhārat`);
request_1.send();

request_1.addEventListener("load", function () {
  const [data_1] = JSON.parse(this.responseText);
  console.log(data_1);
  const borderCode = data_1.borders[4];
  // NEIGHBOR
  const request_2 = new XMLHttpRequest();
  request_2.open("GET", `https://restcountries.com/v3.1/alpha/${borderCode}`);
  request_2.send();

  request_2.addEventListener("load", function () {
    const [data_2] = JSON.parse(this.responseText);
    console.log(data_2);
  });
});
