const cardsContainer = document.querySelector('.cardsContainer')
const majorArcanaContainer = document.querySelector('.majorArcanaContainer')
const minorArcanaContainer = document.querySelector('.minorArcanaContainer')
const majorArcanaTitle = document.querySelector('.majorArcana__title')
const minorArcanaTitle = document.querySelector('.minorArcana__title')
const drawCardSectionTitle = document.querySelector('.drawCardSection__title')
const drawCardCategoryContainer = document.querySelector('.drawCardCategoryContainer')

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
            
            <div class="card__info">
                <h3 class="card__title">${card.nome}</h3>
                <p class="card__keyWords">${String(card.keywordsPositivas).split(',').join(', ')}</p>
                <p class="card__description">${card.descricaoLonga}</p>
            </div>
            
        </div>
        `
    }).join('');



    minorArcanaContainer.innerHTML = arcanosMenores.map((card) => {
        return `
        <div class="card">
            <img src="./src${card.imagem}" alt="Carta do Tartot: ${card.nome}">

            <div class="card__info">
                <h3 class="card__title">${card.nome}</h3>
                <p class="card__keyWords">${String(card.keywordsPositivas).split(',').join(', ')}</p>
                <p class="card__description">${card.descricaoLonga}</p>
            </div>

        </div>
        `
    }).join('');


})


majorArcanaTitle.addEventListener('click', () => {
    if (majorArcanaContainer.classList.contains('hidden')) {
        majorArcanaContainer.classList.remove('hidden');
    } else {
        majorArcanaContainer.classList.add('hidden');

    }
})

minorArcanaTitle.addEventListener('click', () => {
    if (minorArcanaContainer.classList.contains('hidden')) {
        minorArcanaContainer.classList.remove('hidden');
    } else {
        minorArcanaContainer.classList.add('hidden');
    }

})

drawCardSectionTitle.addEventListener('click', () => {
    if (drawCardCategoryContainer.classList.contains('hidden')) {
        drawCardCategoryContainer.classList.remove('hidden');
    } else {
        drawCardCategoryContainer.classList.add('hidden');

    }
})