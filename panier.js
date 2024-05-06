function afficherPanier() {
  const panier = JSON.parse(localStorage.getItem("panier")) || []; // Obtenir les articles du panier
  const table = document.querySelector("table");
  let totalGlobal = 0; // Total du panier

  panier.forEach((item) => {
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
          <input type="submit" value="supprimer" onclick="retirerDuPanier()">
        </td>
       
      </tr>
    `;

    table.insertAdjacentHTML("beforeend", row);
  });

  // Ajouter le total global dans le pied de la table
  const panierTotal = document.getElementById("panierTotal");
  panierTotal.textContent = `${totalGlobal.toFixed(2)} €`;
}

document.addEventListener("DOMContentLoaded", afficherPanier);
