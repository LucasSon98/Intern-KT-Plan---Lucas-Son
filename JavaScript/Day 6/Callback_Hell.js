// Callback Hell is refered to the phenomenon wwhere multiple callbacks are nested within a funcion.
// This makes it difficult to understand and keep track of what the code is doing.

// Example:

getArticles(20, (user) => {
    console.log("Fetch articles", user);
    getUserData(user.username, (name) => {
      console.log(name);
      getAddress(name, (item) => {
        console.log(item);
        // this goes on and on...
      }
  })
