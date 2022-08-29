var input = document.querySelector(".search");
var btn1 = document.querySelector(".submitButton");
let container = document.querySelector(".container");
btn1.addEventListener("click", function (event) {
  fetch(`https://newsapi.org/v2/everything?q=${input.value}&from=2022-07-25&sortBy=publishedAt&apiKey=7f0bf7b97fdf4346b992decbdaa0c15b`)
 //fetching api data
    .then((response) => response.json()) //text --> json    
    .then((data) => {
      let res = data["articles"]; 
      console.log(data)
      // for (let i = 0; i < 10; i++) {
      //   let article = res[i];
      //   //  console.log(article)
        // let html = `<div>
        //             <img src=${article["urlToImage"]}>  
        //             <h1>${article["title"]} </h1>
        //             <p>${article["author"]}</p>
        //             <p>${article["description"]} <a href=${article["url"]}>Read more</a> </p>
        //           </div>`;

        //container.innerHTML += html;
  //}
    })
    .catch((err) => alert("Nothing found"));
});
