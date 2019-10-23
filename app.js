const addUser = document.getElementById('add-user')

addUser.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    console.log(event.target)

    fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: formData.get("username"),
            password: formData.get("password")
        })
    })
})