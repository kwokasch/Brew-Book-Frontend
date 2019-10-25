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
