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
        // const beerImage = document.createElement('div')
        // const breweryImage = document.createElement('div')

        beerCard.className = 'beer-card'
        beerVariety.className = 'beer-variety'
        beerRating.className = 'beer-rating'
        beerComments.className = 'beer-comments'
        beerInfo.className = 'beer-info'
        // beerImage.className = 'beer-image-box'
        // breweryImage.className = 'brewery-image-box'

        beerNameLabel.innerText = "Beer Name:"
        beerName.innerText = beer.name.toUpperCase()
        beerVarietyLabel.innerText = "Beer Style:"
        beerVariety.innerText = beer.variety
        beerRatingLabel.innerText = "Beer Rating:"
        beerRating.innerText = beer.rating
        beerCommentsLabel.innerText = "Comments:"
        beerComments.innerText = beer.comments

        beerInfo.append(beerNameLabel, beerName, beerVarietyLabel, beerVariety, beerRatingLabel, beerRating, beerCommentsLabel, beerComments)
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
    })
})

const beerSearch = document.getElementById('beer-search')
beerSearch.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = document.getElementById('beer-input').value
    const beerBody = {beer: {name: input}}

    fetch(`http://localhost:3000/searches`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(beerBody)
    })
})
retrieveBeers()