document.getElementById('send-btn').addEventListener('click', function () {
    var country = document.getElementById('fav-country-inp').value;
    document.getElementById('resultOne').innerText = 'Your favorite country is: ' + country;
});

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('resultTwo').innerHTML = `
                <img src="${data[0].flags.svg}" class="flag-img" alt="Flag of ${data[0].name.common}">
                <h2>${data[0].name.common}</h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital:</h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continent:</h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population:</h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Currency:</h4>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)[0]].name} - ${Object.keys(data[0].currencies)[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Common Languages:</h4>
                        <span>${Object.values(data[0].languages).join(", ")}</span>
                    </div>
                </div>
            `;
        })
        .catch(() => {
            if (countryName.length == 0) {
                document.getElementById('resultTwo').innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                document.getElementById('resultTwo').innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
        });
});
