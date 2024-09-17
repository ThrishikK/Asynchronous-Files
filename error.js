const errorText = document.querySelector(".error-text");

const url = "https://restcountries.com/v3.1/name/abcdef";

fetch(url)
  .then(function (response) {
    console.log("Fourth Request");
    if (!response.ok) {
      throw new Error(
        `Country Name do not Exist.Status code ${response.status}`
      );
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
    errorText.textContent = err.message;
  });
