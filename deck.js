const main = document.getElementById('main')
const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error')
    // console.log(error);
    const inputValue = parseInt(input.value);

    // funtioning to input a number in searchBar and show error

    if(isNaN(inputValue) || inputValue == ''){
        // alert('Please input a number')
        error.innerText = 'Please input a number';
        input.value = '';
        main.innerHTML = '';
    }
    else if(inputValue<0){
        error.innerText = 'Please input a positive number'
        input.value = '';
        main.innerHTML = '';
    }
    else if( inputValue> 52){
        error.innerText = 'Number have to be greater than 52'
        input.value = '';
        main.innerHTML = '';
    }
    else {
        const loadDeck = () =>{
            fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count= ${inputValue}`)
            .then(res => res.json())
            .then(data => displayDeck(data.cards))
            main.innerHTML = '';
        }
        loadDeck();
        
        const displayDeck =(cards) => {
            // console.log(cards);
            for (const card of cards){
                // console.log(card.image);
                const div = document.createElement('div')
                div.classList.add('col-lg-4')
                div.classList.add('mb-5')
                div.innerHTML = `
                <div class="card" style="width: 18rem;">
                <img src="${card.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${card.suit}</h5>
                  <h5 class="card-title">Value: ${card.value}</h5>
                  <h5 class="card-title">Code: ${card.code}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button href="#" class="btn btn-primary">See Details</button>
                </div>
                </div>
                `
                main.appendChild(div)
                console.log(card);
            }
        }
        
        main.innerHTML = '';
        input.value = '';
        error.innerHTML = '';
    }
}

// const loadDeck = () =>{
//     fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
//     .then(res => res.json())
//     .then(data => displayDeck(data))
// }
// loadDeck();

// const displayDeck =(decks) => {
//     console.log(decks);
// }

