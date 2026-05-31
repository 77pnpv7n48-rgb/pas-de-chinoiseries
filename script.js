const express = require("express");
const fs = require("fs");

const app = express();

// Permet de lire les données du formulaire (POST)
app.use(express.urlencoded({ extended: true }));

// Réception du formulaire
app.post("/", (req, res) => {

  // On récupère les données envoyées par le formulaire
  const ligne =
`--- Nouvelle candidature ---
Prénom: ${req.body.prenom}
Âge: ${req.body.age}
Target: ${req.body.target}
Type de relation: ${req.body.type}
Instagram: ${req.body.insta}

----------------------------

`;

  // On ajoute les données dans un fichier texte
  fs.appendFileSync("donnees.txt", ligne);

  // Réponse envoyée au navigateur
  res.send("Candidature enregistrée 👍");

});

// Lancement du serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur OK → http://localhost:3000");
});