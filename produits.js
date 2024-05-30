function ajouterAuPanier(produit, quantite) {
  // Récupérer le panier actuel depuis localStorage
  let panier = JSON.parse(localStorage.getItem("panier")) || [];

  // Vérifier si le produit est déjà dans le panier
  let produitExistant = panier.find(p => p.nom === produit.nom);

  if (produitExistant) {
    // Si le produit existe, ajouter la quantité
    produitExistant.quantite += quantite;
  } else {
    // Si le produit n'existe pas, l'ajouter au panier
    panier.push({
      nom: produit.nom,
      prix: produit.prix,
      quantite: quantite,
    });
  }

  // Stocker le panier mis à jour dans localStorage
  localStorage.setItem("panier", JSON.stringify(panier));
}


//************ FONCTION PANIER ************************* */
function panier(index) {
  const produit = produits[index];
  const quantite = parseInt(document.querySelectorAll("#quantite")[index].value);

  if (isNaN(quantite) || quantite <= 0) {
    alert("Veuillez entrer une quantité valide.");
    return;
  }

  ajouterAuPanier(produit, quantite);
  // Demander confirmation
  const confirmation = confirm("Produit ajouté au panier. Valider ?");
  
  if (confirmation) {
    // Si l'utilisateur confirme, l'ajout reste
    alert("Produit ajouté au panier.");
  } else {
    // Si l'utilisateur annule, retirer le produit du panier
    retirerDuPanier(produit, quantite);
  }
}


/********** FONCTION SUPPRIMER DU PANIER ********************* */
function retirerDuPanier(index) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];

  confirm('Êtes vous sûr de vouloir supprimer cet article?')
  // Supprimer le produit à l'index donné
  panier.splice(index, 1);

  // Mettre à jour le localStorage
  localStorage.setItem("panier", JSON.stringify(panier));

  // Recharger le panier
  afficherPanier();
}
