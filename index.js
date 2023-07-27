fetch('https://api.github.com/users/Angaye/repos')
.then((response) =>response.json())
.then(repos =>console.log(repos))