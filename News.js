var inputClass = document.querySelector('.search');
    var buttonClass = document.querySelector('.submitButton');
    var container = document.querySelector('.container'); 
    // inputClass.addEventListener("change", () => {


    // })
    buttonClass.addEventListener('click', function (event) {
        container.innerHTML = ""

        fetch(`https://newsapi.org/v2/everything?q=${inputClass.value}&from=2022-07-26&sortBy=publishedAt&apiKey=26e06a9990d74e95b4846cb6fe74bbf3`)
            .then(result => result.json())
            .then(data => {
                let articles = data["articles"] 
                console.log(data);
                for (let i = 0; i < 10; i++) {
                    let article = articles[i]
                    let html = `<div class="newsarea">
                    <h1>${article["title"]} </h1>
                    <img src=${article["urlToImage"]}>
                    <p class="author">Govind verma</p>
                    <p>${article["description"]} <a href=${article["url"]}>Read more</a> </p>
                  </div>`

                    container.innerHTML += html 


                }
            }).catch(err => alert("error"))
    })