function afficherPanier() {
  const panier = JSON.parse(localStorage.getItem("panier")) || []; // Obtenir les articles du panier
  const tableBody = document.getElementById("afficher"); // Cible le corps de la table via l'id

  // Effacer le contenu du tableau avant d'ajouter de nouvelles lignes
  tableBody.innerHTML = "";

  let totalGlobal = 0; // Total du panier

  panier.forEach((item, index) => {
    const totalProduit = item.prix * item.quantite; // Total par produit
    totalGlobal += totalProduit; // Ajouter au total global

    // Créer une ligne pour chaque article dans le panier
    const row = `
      <tr>
        <td>${item.nom}</td>
        <td>${item.quantite}</td>
        <td>${item.prix} €</td>
        <td>${totalProduit.toFixed(2)} €</td>
        <td>
          <input type="button" value="Supprimer" onclick="retirerDuPanier(${index})"> <!-- Passer l'index pour suppression -->
        </td>
      </tr>
    `;

    tableBody.insertAdjacentHTML("beforeend", row); // Ajouter la ligne à la fin du tableau
  });

  // Ajouter le total global dans le pied de la table
  const panierTotal = document.getElementById("panierTotal");
  panierTotal.textContent = `${totalGlobal.toFixed(2)} €`; // Afficher le total du panier
}

document.addEventListener("DOMContentLoaded", afficherPanier); // Appeler la fonction lorsque la page est chargée
