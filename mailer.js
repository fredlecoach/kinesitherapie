// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();

// // Pour permettre aux requêtes du frontend d'atteindre le backend
// app.use(cors());
// app.use(bodyParser.json());

// // Configuration de Nodemailer (utilisez vos propres détails)
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // ou un autre service comme Outlook, Yahoo, etc.
//   auth: {
//     user: 'f.roblot.coulanges@gmail.com',
//     pass: 'Bebaki123.',
//   },
// });

// app.post('/send-email', (req, res) => {
//   const { nom, prenom, telephone, email, rdv, horaire } = req.body;

//   const mailOptions = {
//     from: 'f.roblot.coulanges@gmail.com',
//     to: email,
//     subject: 'Confirmation de rendez-vous',
//     text: `Bonjour ${prenom} ${nom},\nVotre rendez-vous est confirmé pour le ${rdv} de ${horaire}.\nNuméro de téléphone : ${telephone}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
//     } else {
//       res.send('E-mail envoyé avec succès.');
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log('Le serveur écoute sur le port 3000');
// });
