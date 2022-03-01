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
    }
    else if(inputValue<0){
        error.innerText = 'Please input a positive number'
        input.value = '';
    }
    else if( inputValue> 52){
        error.innerText = 'Number have to be greater than 52'
        input.value = '';
    }
    else {
        const loadDeck = () =>{
            fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count= ${inputValue}`)
            .then(res => res.json())
            .then(data => displayDeck(data.cards))
        }
        loadDeck();
        
        const displayDeck =(cards) => {
            console.log(cards);
            for (const card of cards){
                console.log(card);
            }
        }
        
        input.value = '';
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

