document.addEventListener('DOMContentLoaded', () => {
    const addUser = document.querySelector('#add-user')

    addUser.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.get("username"),
                password: formData.get("password")
            })
        }).then(response => response.json())
        .then(response => {
            console.log(response)
            localStorage.setItem("user_id", response.id)
            console.log(localStorage.getItem("user_id", response.id))
            window.location.href="beer.html"
        })
    })
})