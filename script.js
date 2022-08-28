var input = document.querySelector(".search");
var btn1 = document.querySelector(".submitButton");
let container = document.querySelector(".container");
btn1.addEventListener("click", function (event) {
  fetch(`https://newsapi.org/v2/everything?q=${input.value}&from=2022-07-27&sortBy=publishedAt&apiKey=846fd227de084ee2ae29d9474c3e1a43`) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      let res = data["articles"];
      //console.log(res)
      for (let i = 0; i < 10; i++) { 
        let article = res[i];
        // console.log(article)
        let html = `<div>
                    <img src=${article["urlToImage"]}>  
                    <h1>${article["title"]} </h1>
                    <p>${article["author"]}</p>
                    <p>${article["description"]} <a href=${article["url"]}>Read more</a> </p>
                  </div>`;

        container.innerHTML += html;
      }
    })
    .catch((err) => alert("Nothing found"));
});
