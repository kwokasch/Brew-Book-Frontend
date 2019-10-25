const beerBody = document.body
const favCardSection = document.getElementById('fav-card-section')
const favCards = document.getElementById('fav-cards')

function createFavCards(beers){
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
        const deleteButton = document.createElement('img')

        beerInfo.id = beer.id
        beerCard.className = 'beer-card'
        beerVariety.className = 'beer-variety'
        beerRating.className = 'beer-rating'
        beerComments.className = 'beer-comments'
        beerInfo.className = 'beer-info'
        deleteButton.className = 'delete-fav-button'
        deleteButton.src = 'Delete.png'
        

        beerNameLabel.innerText = "Beer Name:"
        beerName.innerText = beer.name.toUpperCase()
        beerVarietyLabel.innerText = "Beer Style:"
        beerVariety.innerText = beer.variety
        beerRatingLabel.innerText = "Beer Rating:"
        beerRating.innerText = beer.rating
        beerCommentsLabel.innerText = "Comments:"
        beerComments.innerText = beer.comments

        beerInfo.append(deleteButton, beerNameLabel, beerName, beerVarietyLabel, beerVariety, beerRatingLabel, beerRating, beerCommentsLabel, beerComments)
        beerCard.append(beerInfo)
        favCards.append(beerCard)
    })
    favCardSection.append(favCards)
}


const favorites = document.getElementById('favorites-button')

favorites.addEventListener("click", (event) => {
    event.preventDefault()

    window.location.href="favorites.html"
    
})
