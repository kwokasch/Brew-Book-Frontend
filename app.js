document.addEventListener('DOMContentLoaded', () => {
    const addUser = document.querySelector('#add-user')
    
    addUser.addEventListener("submit", (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.target)

        if (event.target.className = "signup-submit") {

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
                if (!response.error){
                    logInUser()
                } else {
                    console.log(response.error)
                }
            })
        }

        if (event.target.className = "login-submit") {
            logInUser()
        }

        function logInUser () {
            fetch(`http://localhost:3000/auth/login`, {
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
                localStorage.setItem("token", response.token)
                localStorage.setItem("user_id", response.id)
                window.location.href="beer.html"
            })
        }

    })
})