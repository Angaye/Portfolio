


const projet_list = document.getElementById('projet_list');


fetch('https://api.github.com/users/Angaye/repos')
.then((response) =>response.json())
.then(repos=>
   repos.forEach(repo => {
    const li = document.createElement('li');
    const lien = document.createElement('a');

    lien.href = repo.html_url;
    lien.innerText = "Projet : "+repo.name;


    li.append(lien);
    projet_list.append(li);
   })
    
    
    
    
    )

// fetch('https://api.github/repos/Angaye/Projet-Booki/topics')
// .then((reponse) =>reponse.json())
// .then(data =>console.log(data))