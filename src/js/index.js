const cardsContainer = document.querySelector('.cardsContainer')
const majorArcanaContainer = document.querySelector('.majorArcanaContainer')
const minorArcanaContainer = document.querySelector('.minorArcanaContainer')
const majorArcanaTitle = document.querySelector('.majorArcana__title')
const minorArcanaTitle = document.querySelector('.minorArcana__title')

const drawCardSection = document.querySelector('.drawCardSection')
const drawCardSectionTitle = document.querySelector('.drawCardSection__title')
const drawCardCategoryContainer = document.querySelector('.drawCardCategoryContainer')
const drawCardCategoryButtons = document.querySelectorAll('.drawCardCategory__button')

const spreadsSection = document.querySelector('.spreads')
const spreadsContainer = document.querySelector('.spreadsContainer')
const spreadsReturnButton = document.querySelector('.spreads__returnButton')
let selectedSpread = null
let allCards = []


async function getData() {
    const file = './tarot_pt_json.json';
    const response = await fetch(file);
    const data = await response.json();
    return data;
}



getData().then(data => {
    allCards = data.cartas;

    const arcanosMaiores = allCards.slice(0, 22);
    const arcanosMenores = allCards.slice(22);

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




drawCardCategoryButtons.forEach((button, index) => {


    button.addEventListener('click', function () {

        cardsContainer.classList.add('hidden');
        drawCardSection.classList.add('hidden');

        spreadsReturnButton.classList.remove('hidden');
        spreadsSection.classList.remove('hidden')


        let selectedSpread = index

        drawRandomCard(selectedSpread)


    })


})


spreadsReturnButton.addEventListener('click', function () {

    spreadsReturnButton.classList.add('hidden');
    spreadsSection.classList.add('hidden')

    cardsContainer.classList.remove('hidden');
    drawCardSection.classList.remove('hidden');
})





function drawRandomCard(selectedSpread) {




    if (selectedSpread === 0) {

        let cardIndex = Math.floor(Math.random() * allCards.length)
        let chosenCard = allCards[cardIndex]

        spreadsContainer.innerHTML = `
        <div class="chosenCard">
            <img src="./src${chosenCard.imagem}" alt="Carta do Tartot: ${chosenCard.nome}">

            <div class="card__info">
                <h3 class="card__title">${chosenCard.nome}</h3>
                <p class="card__keyWords">${String(chosenCard.keywordsPositivas).split(',').join(', ')}</p>
                <p class="card__description">${chosenCard.descricaoLonga}</p>
            </div>

        </div>
        `
    }

    if (selectedSpread === 1) {

        let cardIndex1 = Math.floor(Math.random() * allCards.length)
        let cardIndex2 = Math.floor(Math.random() * allCards.length)

        if (cardIndex2 === cardIndex1) {
            cardIndex2 = Math.floor(Math.random() * allCards.length)
        }

        let chosenCard1 = allCards[cardIndex1]
        let chosenCard2 = allCards[cardIndex2]



        spreadsContainer.innerHTML = `

        <div>
            <p class="chosenCardIndex">Escolha 1</p>
            <div class="chosenCard">
                <img src="./src${chosenCard1.imagem}" alt="Carta do Tartot: ${chosenCard1.nome}">

                <div class="card__info">
                    <h3 class="card__title">${chosenCard1.nome}</h3>
                    <p class="card__keyWords">${String(chosenCard1.keywordsPositivas).split(',').join(', ')}</p>
                    <p class="card__description">${chosenCard1.descricaoLonga}</p>
                </div>
            </div>
        </div>

        <div>
            <p class="chosenCardIndex">Escolha 2</p>
            <div class="chosenCard">
                <img src="./src${chosenCard2.imagem}" alt="Carta do Tartot: ${chosenCard2.nome}">

                <div class="card__info">
                    <h3 class="card__title">${chosenCard2.nome}</h3>
                    <p class="card__keyWords">${String(chosenCard2.keywordsPositivas).split(',').join(', ')}</p>
                    <p class="card__description">${chosenCard2.descricaoLonga}</p>
                </div>

            </div>
        </div>

        `
    }


}


