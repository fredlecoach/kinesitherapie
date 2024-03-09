function rendezVous(){

do{nom =prompt("Renseignez votre Nom:")}
while(nom=="")
do{prenom= prompt("Renseignez votre prénom:")}
while(prenom=="")
do{telephone= prompt("Renseignez votre numéro de téléphone:")}
while(Number(telephone==""))
confirm(`Vous êtes bien M.${nom} ${prenom} et votre numéro de téléphone est le ${telephone}?`)


let jour = prompt("Quel jour souhaitez vous prendre rendez-vous?");
  while(jour!=="lundi" && jour!=="mardi" && jour !=="mercredi" && jour!=="jeudi" && jour!=="vendredi" && jour!=="samedi"){
    jour=prompt("Quel jour souhaitez vous prendre rendez-vous?");
  }
  switch (jour){
    case "lundi":
      confirm("Vous avez choisi le lundi?");
      break;
    case "mardi":
      confirm("Vous avez choisi le mardi?")
      break;
    case "mercredi":
      confirm("Vous avez choisi le mercredi?");
      break;
    case "jeudi":
      confirm("Vous avez choisi le jeudi?");
      break;
    case "vendredi":
      confirm("Vous avez choisi le vendredi?");
      break;
    case "samedi":
      confirm("Vous avez choisi le samedi?");
      break;
    default:
      alert("Veuillez choisir un jour valide de la semaine!")
  }


  let horaireDeRdv = prompt("Tapez le chiffre correspondant à l'horaire désirée:\n1/9H00-10H00\n2/10H00-11H00\n3/11H00-12H00\n4/12H00-13H00\n5/13H00-14H00\n6/14H00-15H00\n7/15H00-16H00\n8/16H00-17H00\n9/17H00-18H00\n10/18H00-19H00")
  while(horaireDeRdv!=="1" && horaireDeRdv!=="2" && horaireDeRdv!=="3" && horaireDeRdv!=="4" && horaireDeRdv!=="5" && horaireDeRdv!=="6" && horaireDeRdv!=="7" && horaireDeRdv!=="8" && horaireDeRdv!=="9"){
    horaireDeRdv = prompt("Tapez le chiffre correspondant à l'horaire désirée:\n1/9H00-10H00\n2/10H00-11H00\n3/11H00-12H00\n4/12H00-13H00\n5/13H00-14H00\n6/14H00-15H00\n7/15H00-16H00\n8/16H00-17H00\n9/17H00-18H00\n10/18H00-19H00")
  }
  switch(horaireDeRdv){
    case "1":
     confirm(`M.${nom},vous désirez une consultation le ${jour} de 9H00 à 10H00?`);
      break;
    case "2":
     confirm(`M.${nom},vous désirez une consultation le ${jour} de 10H00 à 11H00?`);
      break;
    case "3":
     confirm(`M.${nom},vous désirez une consultation le ${jour} de 11H00 à 12H00?`);
      break;
    case "4":
      confirm(`M.${nom},vous désirez une consultation le ${jour} de 12H00 à 13H00?`);
      break;
    case "5":
      confirm(`M.${nom},vous désirez une consultation le ${jour} de 13H00 à 14H00?`);
      break;
    case "6":
      confirm(`M.${nom},vous désirez une consultation le ${jour} de 14H00 à 15H00?`);
      break;
    case "7":
      confirm(`M.${nom},vous désirez une consultation le ${jour} de 15H00 à 16H00?`);
      break;
    case "8":
      confirm(`M.${nom},vous désirez une consultation le ${jour} de 16H00 à 17H00?`);
      break;
    case "9":
      confirm(`M.${nom},vous désirez une consultation le ${jour} de 17H00 à 18H00?`);
      break;
    case "10":
      confirm(`M.${nom},vous désirez une consultation le ${jour} de 18H00 à 19H00?`);
      break;
    default:
      alert("En fonction de l'horaire désirée, veuillez choisir un chiffre entre 1 et 10!")
      break;
  }
} 