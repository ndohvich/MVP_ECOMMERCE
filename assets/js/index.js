const htmlCatalogue = document.getElementById('catalogue');

//On récupère les données de l'API
fetch(`${apiUrl}/api/cameras`)
    .then(function(res){
        if(res.ok){
            console.log('Connexion API :', res.ok)
            return res.json();
        }    
    })
    //On récupère les produits dans la réponse
    .then(function(res){
        console.log(`Nombre de produits récupérés de l'API :`, res.length)

        for(let produit of res){
            console.log(`Informations de chaque article :`, produit)

	    //Conversion du prix
		let entierPrice = produit.price /100

	    //On intègre le HTML
		htmlCatalogue.innerHTML += 
        `<article class="col card-group">
            <div class="card mb-4 mb-lg-0 shadow">
                <a href="./pages/produit.html?given_id=${produit._id}" class="stretched-link"></a>
                <img src=${produit.imageUrl} alt="${produit.name}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title fs-5">${produit.name}</h3>
                    <p class="card-text">${entierPrice} €</p>
                </div>
            </div>
        </article>`
        }
    })
    .catch(function() {
        window.location.href = 'pages/404.html';
    })
