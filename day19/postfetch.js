fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: 'POST', //POST HTTP METHOD TO POST THE DATA 
    headers : {
        "Content-Type" : "application/json", //content type
    },
    body: JSON.stringify({title: "New Post", body: "this is new post", userId: 1})

})
.then(response => {
    return response.json()
})

.then(data => console.log("Post Reponse", data))
.catch(error => console.log("Error posting the data", error.message));