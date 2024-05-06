function rendezVous() {
  const lettre = /^[a-zA-ZàâäæçéèêëîïôœùûüÿÀÂÄÆÇÉÈÊËÎÏÔŒÙÛÜŸ-]+$/;
  const phonevalide = /^(06|07)\d{8}$/; // Commence par "06" et a 8 chiffres après
  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let nom = "";
  let prenom = "";
  let telephone = "";
  let email = "";

  function annuler(val) {
    return val === null || val === undefined || val.trim() === "";
  }

  // Validation pour le prénom
  do {
    prenom = prompt("Renseignez votre prénom:");
    if (annuler(prenom)) return; // Si annulé
  } while (!lettre.test(prenom)); // Tant que ça ne correspond pas à des lettres uniquement
  
  // Validation pour le nom
  do {
    nom = prompt("Renseignez votre nom:");
    if (annuler(nom)) return; // Si annulé
  } while (!lettre.test(nom)); // Tant que ça ne correspond pas à des lettres uniquement
  
  // Validation pour le téléphone
  do {
    telephone = prompt("Votre numéro de téléphone mobile (06 ou 07):");
    if (annuler(telephone)) return; // Si annulé
  } while (!phonevalide.test(telephone)); // Tant que ça ne commence pas par "06" et n'a pas 10 chiffres

  // Validation pour l'adresse e-mail
  do {
    email = prompt("Renseignez votre adresse e-mail:");
    if (annuler(email)) return; // Si annulé
  } while (!emailValide.test(email)); // Tant que ça ne correspond pas à une adresse e-mail valide

  // Demander confirmation des données saisies
  const question = `Vous êtes bien M.${nom} ${prenom}?\nVotre numéro de téléphone est ${telephone} ?\nVotre adresse e-mail est ${email}?`;
  
  const confirmation = confirm(question);
  
  if (!confirmation) return; // Quitter si la confirmation est annulée
  
  console.log("Confirmation réussie.");

  // Choix d'un jour de rendez-vous
  const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  
  let rdv = prompt("Quel jour souhaitez-vous prendre rendez-vous ?");
  if (annuler(rdv)) return; // Arrêter si annulé
  
  while (!jours.includes(rdv)) { // Redemander si le jour n'est pas valide
    rdv = prompt("Veuillez choisir un jour de la semaine (lundi à samedi):");
    if (annuler(rdv)) return; // Arrêter si annulé
  }

  const confirmationJour = confirm(`Vous avez choisi ${rdv}, est-ce correct ?`);
  
  if (!confirmationJour) return; // Quitter si le jour n'est pas confirmé
  
  // Choix d'un horaire de rendez-vous
  const horaires = [
    "09H00 à 10H00",
    "10H00 à 11H00",
    "11H00 à 12H00",
    "12H00 à 13H00",
    "13H00 à 14H00",
    "14H00 à 15H00",
    "15H00 à 16H00",
    "16H00 à 17H00",
    "17H00 à 18H00",
    "18H00 à 19H00"
  ];
  
  let horaireRdv = prompt(
    "Tapez le chiffre correspondant à l'horaire désiré:\n" +
    horaires.map((h, i) => `${i + 1} = ${h}`).join("\n")
  );
  
  if (annuler(horaireRdv)) return; // Si annulé
  
  while (!["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(horaireRdv)) {
    horaireRdv = prompt(
      "Veuillez choisir un chiffre entre 1 et 10 correspondant à l'horaire désiré:\n" +
      horaires.map((h, i) => `${i + 1} = ${h}`).join("\n"))
    if (annuler(horaireRdv)) return; // Si annulé
  }
  
  const horaireChoisi = horaires[parseInt(horaireRdv) - 1];
  
  const validation = confirm(
    `M. ${prenom} ${nom}\nVous désirez une consultation le ${rdv} de ${horaireChoisi}?`
  );
  
  if (!validation) {
    alert("Rendez-vous annulé.");
    return; // Quitter si le rendez-vous n'est pas validé
  }
  
  alert(`Vous allez recevoir dans les 24 heures un e-mail de confirmation à :\n ${email}.`);
}




function imc(taille, poids) {
    const imcFinal = poids / ((taille / 100) ** 2);
    
    if (imcFinal < 18.5) {
        return {
            description: "Insuffisance pondérale (maigreur)",
            bg: "#FFFFCC", // Jaune clair
            fontWeight : "bold",
            couleur: "#000"
        };
    } else if (imcFinal < 25) {
        return {
            description: "Corpulence normale",
            bg: "#CCFFCC", // Vert clair
            fontWeight : "bold",
            couleur: "#000"
        };
    } else if (imcFinal < 29.9) {
        return {
            description: "Surpoids",
            bg: "#FFDDCC", // Orange clair
            fontWeight : "bold",
            couleur: "#000"
        };
    } else if (imcFinal < 34.9) {
        return {
            description: "Obésité modérée",
            bg: "#FFCC99", // Orange foncé
            fontWeight : "bold",
            couleur: "#000"
        };
    } else if (imcFinal < 39.9) {
        return {
            description: "Obésité sévère",
            bg: "#E47c23", // Rouge 
            fontWeight : "bold",
            couleur: "#fff"
        };
    } else {
        return {
            description: "Obésité morbide",
            bg: "#D90934", // Rouge foncé
            fontWeight : "bold",
            couleur: "#fff"
        };
    }
}

function calculerIMC() {
    const taille = parseFloat(document.getElementById("taille").value);
    const poids = parseFloat(document.getElementById("poids").value);

    if (isNaN(taille) || isNaN(poids)) {
        alert("Veuillez entrer des valeurs valides pour la taille et le poids.");
        return;
    }

    const imcFinal = (poids / ((taille / 100) ** 2)).toFixed(2); // Valeur de l'IMC
    const imcResult = imc(taille, poids); // Obtenir l'IMC et la bg associée

    document.getElementById("resultat").value = imcFinal; // Afficher l'IMC
    document.getElementById("imcDescription").textContent = `Votre IMC indique : ${imcResult.description}`; // Afficher la description

    // Appliquer les paramètres en fonction du résultat
    document.getElementById("imcDescription").style.backgroundColor = imcResult.bg; 
    document.getElementById("imcDescription").style.fontWeight =imcResult.fontWeight;
    document.getElementById("imcDescription").style.color =imcResult.couleur;
}

