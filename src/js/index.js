const cardsContainer = document.querySelector('.cards-container')

async function getData() {
    const file = ('./tarot_pt_json.json')
    const response = await fetch(file);
    const data = await response.json();
    return data;
}



getData().then(data => {
    const cards = data.cartas;
    console.log(cards[0]);

    const arcanosMaiores = cards.slice(0, 22);

    cardsContainer.innerHTML = arcanosMaiores.map((card) => {
        return `
        <div class="card">
            <img src="./src${card.imagem}" alt="Carta do Tartot: ${card.nome}">
            <h2>${card.nome}</h2>
            <p>${card.descricaoCurta}</p>
        </div>
        `
    }).join('');
})