const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => displayDog(data))
}

const displayDog = (dogList) => {
    const first10Dogs = dogList.slice(0, 30);
    const main = document.getElementById('main')
    for(const dog of first10Dogs){
        const div = document.createElement('div')
        div.className = "col-lg-4"
        console.log(dog);
        div.innerHTML = `
          <h3>${dog.name}</h3>
          <p>${dog.temperament}</p>
          <img width="400px" height="250px" src="${dog.image.url}">
        `
        main.appendChild(div)
        console.log(dog.name);
    }
}