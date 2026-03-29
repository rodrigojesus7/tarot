const cardsContainer = document.querySelector('.cards-container')
const majorArcanaContainer = document.querySelector('.majorArcanaContainer')
const minorArcanaContainer = document.querySelector('.minorArcanaContainer')

async function getData() {
    const file = './tarot_pt_json.json';
    const response = await fetch(file);
    const data = await response.json();
    return data;
}



getData().then(data => {
    const cards = data.cartas;
    console.log(cards[0]);

    const arcanosMaiores = cards.slice(0, 22);
    const arcanosMenores = cards.slice(22);

    majorArcanaContainer.innerHTML = arcanosMaiores.map((card) => {
        return `
        <div class="card">
            <img src="./src${card.imagem}" alt="Carta do Tartot: ${card.nome}">
            
            <div class="cardInfo">
                <h2>${card.nome}</h2>
                <p>${card.keywordsPositivas}</p>
                <p>${card.descricaoLonga}</p>
            </div>
            
        </div>
        `
    }).join('');



    minorArcanaContainer.innerHTML = arcanosMenores.map((card) => {
        return `
        <div class="card">
            <img src="./src${card.imagem}" alt="Carta do Tartot: ${card.nome}">

            <div class="cardInfo">
                <h2 class="cardTitle">${card.nome}</h2>
                <p class="keyWords">${card.keywordsPositivas}</p>
                <p class="description">${card.descricaoLonga}</p>
            </div>

        </div>
        `
    }).join('');




})