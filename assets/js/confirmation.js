//On récupère la réponse du serveur renvoyée par POST
const order = JSON.parse(localStorage.getItem('order'));
console.log('Réponse serveur :', order)

//On récupère les infos à intégrer dans la page confirmation
const id = order.orderId
console.log('orderId :', id)

const firstName = order.contact.firstName
console.log('firstName:', firstName)

const prixTotal = JSON.parse(localStorage.getItem('prixTotal'));
console.log('prixTotal :', prixTotal)

//On intègre le HTML
    document.getElementById("recap").innerHTML += 
        `<div class="card text-center">
            <h2 class="card-header bg-dark text-white fs-5">Merci ${firstName}</h2>
            <div class="card-body">
            <h3 class="card-title fs-5">Votre commande d'un montant de ${prixTotal}€ a été enregistrée !</h3>
            <p class="card-text">Elle porte le numéro : ${id}</p>
            <a href="../index.html" class="btn btn-warning">Revenir à l'accueil</a>
            </div>
        </div>`
    ;

//On vide le localStorage
localStorage.clear()
