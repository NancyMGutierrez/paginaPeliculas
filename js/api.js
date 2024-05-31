function getCharacters(done) {
  const results = fetch("https://rickandmortyapi.com/api/character");
  results
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

getCharacters((data) => {
  data.results.forEach((personaje) => {
    const article = document.createRange().createContextualFragment(`
    

        <article>

            <div class="image_container">
                <img class= "cards_api" src="${personaje.image}" alt="Personaje">
            </div>

            <h2 class="data_personaje" >${personaje.name}</h2>
            <h4 class="status">${personaje.status}</h4>

        </article>
`);
    const main = document.querySelector("main");
    main.append(article);
  });
});
