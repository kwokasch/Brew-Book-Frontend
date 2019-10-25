const beerBody = document.body
const cardSection = document.getElementById('card-section')
const beerCards = document.getElementById('beer-cards')

function retrieveBeers (){
    fetch('http://localhost:3000/beers')
        .then(response => response.json())
        .then(createBeerCards)
}

function createBeerCards(beers){
    beers.forEach(beer => {
        const beerCard = document.createElement('div')
        const beerInfo = document.createElement('div')
        const beerNameLabel = document.createElement('h1')
        const beerName = document.createElement('h2')
        const beerVarietyLabel = document.createElement('h1')
        const beerVariety = document.createElement('h3')
        const beerRatingLabel = document.createElement('h1')
        const beerRating = document.createElement('h3')
        const beerCommentsLabel = document.createElement('h1')
        const beerComments = document.createElement('p')
        const favButton = document.createElement('img')

        beerInfo.id = beer.id
        beerCard.className = 'beer-card'
        beerVariety.className = 'beer-variety'
        beerRating.className = 'beer-rating'
        beerComments.className = 'beer-comments'
        beerInfo.className = 'beer-info'
        favButton.className = 'card-fav-button'
        favButton.src = "Heart.png"

        beerNameLabel.innerText = "Beer Name:"
        beerName.innerText = beer.name.toUpperCase()
        beerVarietyLabel.innerText = "Beer Style:"
        beerVariety.innerText = beer.variety
        beerRatingLabel.innerText = "Beer Rating:"
        beerRating.innerText = beer.rating
        beerCommentsLabel.innerText = "Comments:"
        beerComments.innerText = beer.comments

        beerInfo.append(favButton, beerNameLabel, beerName, beerVarietyLabel, beerVariety, beerRatingLabel, beerRating, beerCommentsLabel, beerComments)
        beerCard.append(beerInfo)
        beerCards.append(beerCard)
    })
    cardSection.append(beerCards)
}

const addBeer = document.getElementById('add-beer')

addBeer.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    console.log(event.target)

    fetch(`http://localhost:3000/beers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get("name"),
            variety: formData.get("variety"),
            rating: formData.get("rating"),
            comments: formData.get("comments"),
        })
    }).then(window.location.href="beer.html")
})

const beerSearch = document.getElementById('beer-search')

beerSearch.addEventListener("submit", (event) => {
    event.preventDefault()
    let input = document.getElementById('beer-input')
    const beerBody = {beer: {name: input.value}}

    fetch(`http://localhost:3000/searches`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(beerBody)
    }).then(response => response.json())
    .then(response => {
        input.value = response["message"]
    })
})

const logout = document.getElementById('logout-button')

logout.addEventListener("click", (event) => {
    event.preventDefault()
    localStorage.removeItem("token")
    localStorage.removeItem("user_id")
    window.location.href="index.html"
})

const allBeers = document.querySelector('#beer-cards')

allBeers.addEventListener("click", (event) =>{
    if (event.target.className = "card-fav-button"){

        fetch(`http://localhost:3000/favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: localStorage.getItem('user_id'),
                beer_id: event.target.parentElement.id
            })
        }).then(response => response.json())
    
    } 
})

const favorites = document.getElementById('favorites-button')

favorites.addEventListener("click", (event) => {
    event.preventDefault()

    window.location.href="favorites.html"
})

retrieveBeers()