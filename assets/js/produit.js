//On récupère l'ID dans l'URL
const parametresUrl = new URLSearchParams(window.location.search) 
const produitId = parametresUrl.get("given_id") 
console.log(`Id du produit :`, produitId)

const htmlProduit = document.getElementById("produit");

//On récupère le produit
fetch(`${apiUrl}/api/cameras/${produitId}`)
    .then(function(res){
        if(res.ok){
        console.log('Connexion API :', res.ok)
        return res.json()
        }
    })

    //On récupère le produit
    .then(function(article){
        console.log(`Produit récupéré :`, article)

	    //Conversion du prix
		let entierPrice = article.price /100

	    //On intègre le HTML
        htmlProduit.innerHTML += 
        `<form class="card shadow border-light">
            <img src=${article.imageUrl} class="card-img-top" alt="${article.name}">
            <div class="card-body">
                <h2 class="card-title fs-5">${article.name}</h2>
                <p class="card-text">${article.description}</p>
                <p>
                    <label for="lentilles">Objectif : </label>
                    <select name="lentilles" id="lentilles"></select>
                </p>    
                <p>
                    <label for="quantite">Quantité : </label>
                    <input type="number" name="quantité" id="quantite" min="1" max="10" value="1"></input>
                </p>    
                <p>${entierPrice} €</p>
                <button type="submit" id="ajoutPanier" class="btn btn-dark">Ajouter au panier</button>
            </div>
        </form>`


        //PERSONNALISATION
        //On intègre chaque option de lentilles (=data lenses) dans le HTML
        const htmlOptions = document.getElementById("lentilles");

        article.lenses.forEach(function(option){
            console.log(`Option :`, option)
            htmlOptions.innerHTML += 
            `<option value="${option}">${option}</option>`
        }) 
        

        //RECUPERATION DES CHOIX UTILISATEUR AU CLIC SUR AJOUTER AU PANIER

        document
            .querySelector('form')
            .addEventListener("submit", function(e){
                e.preventDefault()
                let optionLentille = e.target.lentilles.value
                console.log(`Option sélectionnée :`, optionLentille)
                let choixQuantite = e.target.quantite.value
                console.log(`Quantité choisie :`, choixQuantite)

            //Récupération des valeurs du formulaire dans un objet
            let panierObjet = {
                id : article._id,
                imageUrl : article.imageUrl,
                name : article.name,
                price : entierPrice,
                lentilles : optionLentille,
                quantite : choixQuantite,
                prixArticleTotal : entierPrice * choixQuantite,
            }
            console.log(`Produit ajouté au panier :`, panierObjet);


            //LOCALSTORAGE

            //Stocker dans une variable, les clés/valeurs du localStorage + conversion JSON->Objet JS
            let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produits"));
            console.log('null si localStorage vide :', produitEnregistreDansLocalStorage)

            //fonction pop up
            const popupConfirmation = function(){
                if(window.confirm(`L'appareil photo ${article.name} avec l'option: ${optionLentille} a bien été ajouté au panier.
                Consulter le panier : OK
                Revenir à l'accueil : ANNULER`)){
                    window.location.href = "panier.html";
                }else{
                    window.location.href = "../index.html";
                }
            }

            //Ajouter produit dans localStorage
            const ajoutProduitLocalStorage = function(){
                //on push les valeurs de l'objet panierObjet dans le tableau déjà créé ligne 116
                produitEnregistreDansLocalStorage.push(panierObjet); 
                //on stocke le tableau des valeurs dans le localStorage (au format JSON) pour garder contenu du panier
                localStorage.setItem("produits", JSON.stringify(produitEnregistreDansLocalStorage));
            }

            //S'il y A déjà des produits dans le localStorage, condition sera true
            if(produitEnregistreDansLocalStorage){
                console.log(`Le localStorage n'est pas vide`)
                ajoutProduitLocalStorage();
                popupConfirmation();

            // S'il n'y a PAS de produits enregistrés dans le localStorage, condition sera false   
            }else{
                //on créé un tableau vide
                produitEnregistreDansLocalStorage = [];
                console.log('Le localStorage est vide :', produitEnregistreDansLocalStorage)
                ajoutProduitLocalStorage();
                popupConfirmation();
            }
        })
    })
    .catch(function() {
        window.location.href = '404.html';
    })

