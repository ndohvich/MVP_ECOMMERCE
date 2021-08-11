![logo Orinoco](https://github.com/CarolineSenes/SENESCaroline_5_17042021/blob/master/assets/images/logo_orinoco.png)
# Construire un site e-commerce

## Mission
Créer la partie frontend d'un premier MVP (Produit Minimum Viable) pour démontrer le fonctionnement de l'application.

## Instructions
L’application web sera composée de 4 pages : 
- une page de vue sous forme de liste, montrant **tous les articles disponibles** à la vente ; 
- une **page “produit”**, qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permet de personnaliser le produit et de l'ajouter à son panier ; 
- une **page “panier”** contenant **un résumé des produits** dans le panier, **le prix total** et **un formulaire permettant de passer une commande**. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de texte dans les champs date ; 
- **une page de "confirmation"** de commande, remerciant l'utilisateur pour sa commande, et indiquant **le prix total** et **l'identifiant de commande** envoyé par le serveur.




## Planification de tests unitaires
Planifiez une suite de tests unitaires pour **couvrir au minimum 80 %** de la base de code pour le front-end. Vous devrez formaliser un plan pour atteindre ce résultat, sans obligation d’écrire ces tests. Expliquez quelles lignes seront testées, et quels “test cases” seront envisagés. Format de présentation au choix.


## Contraintes

 - Le code source devra être **indenté** et utiliser des **commentaires**. 
 - Il devra également utiliser des **fonctions globales**. 
 - Concernant l’API, des **promesses** devront être utilisées pour éviter les rappels. 
 - Les **inputs des utilisateurs doivent être validés** avant l’envoi à l’API.


## Technologies utilisées
HTML, CSS, JavaScript.

## Documentation
[Spécifications fonctionnelles et techniques complètes](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/P5_Spe%CC%81cifications%20fonctionnelles%20Orinoco%20%282%29.pdf)

## Lancement de l'application en ligne
Le backend étant hébérgé sur Heroku, il est possible de [tester l'application directement en ligne](https://carolinesenes.github.io/SENESCaroline_5_17042021/).

## Lancement de l'application en local
### Prérequis ###

Vous devez avoir Node et `npm` installer sur votre machine en local.

### Installation ###

Cloner ce repo et celui du backend (lien disponible dans la documentation). A partir du dossier Backend, lancer `npm install`. Vous pouvez lancer le serveur avec `node server`. 
Le serveur démarrera sur `localhost` avec par défaut le port `3000`.

## Travail réalisé
### Visuels responsive page Accueil
![accueil](https://github.com/CarolineSenes/SENESCaroline_5_17042021/blob/master/assets/images/page1.jpg)
### Visuels responsive page Produit
![produit](https://github.com/CarolineSenes/SENESCaroline_5_17042021/blob/master/assets/images/page2.jpg)
### Visuels responsive page Panier
![panier](https://github.com/CarolineSenes/SENESCaroline_5_17042021/blob/master/assets/images/page3.jpg)
### Visuels responsive page Confirmation
![confirmation](https://github.com/CarolineSenes/SENESCaroline_5_17042021/blob/master/assets/images/page4.jpg)
### Visuels responsive page 404
![404](https://github.com/CarolineSenes/SENESCaroline_5_17042021/blob/master/assets/images/page5.jpg)
