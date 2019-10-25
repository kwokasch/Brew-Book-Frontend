const id = parseInt(localStorage.getItem("user_id"))

fetch(`http://localhost:3000/users/${id}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")    
    }
}).then(response => response.json())
.then(response => response.beers)
.then(response => {
    createFavCards(response)
})