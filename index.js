// const url = await fetch('https://api.github.com/users/Angaye/repos')
// const response = await url.json()
// console.log(response[4].html_url)


function afficherSites(repos){
    const siteBooki =document.getElementById('Projet-Booki');
    siteBooki.innerText =repos

   
   
}


fetch('https://api.github.com/users/Angaye/repos')
.then((response) =>response.json())
.then(repos =>console.log(repos[4].html_url))

// fetch('https://api.github/repos/Angaye/Projet-Booki/topics')
// .then((reponse) =>reponse.json())
// .then(data =>console.log(data))