const singleVote = dataJson => {

    const singleSearch = document.getElementById("single__search");
    const singleSearchResponse = document.getElementById("single__search__response");

    const congresPersonNames = dataJson.map(item => item.Congresista);
    const alfaveticOrder = congresPersonNames.sort();
    const selectByName = alfaveticOrder.map(item => {
        return (`
                  <option value="${item}">${item}</option>
               `);
    });

    singleSearch.innerHTML = selectByName.join("");

    const showVote = () => {
        const singleSearchVoto = dataJson.filter(item => item.Congresista === singleSearch.value)[0].Vacancia;
        singleSearchResponse.innerHTML = singleSearchVoto;
    }

    showVote()

    singleSearch.addEventListener("change", () => {
        showVote()
    })

}