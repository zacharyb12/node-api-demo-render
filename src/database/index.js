// // On importe la classe Sequelize depuis la bibliothèque sequelize
// import { Sequelize } from "sequelize";

// // On importe la fonction qui définit le modèle Movie
// import movieBuilder from "./models/movie.model.js";
// import actorBuilder from "./models/actor.model.js";
// import userBuilder from "./models/user.model.js";


// const sequelize = new Sequelize(
//   "testingexpress",    // nom de la base de données
//   "SA",                // utilisateur (ici "SA" = admin par défaut SQL Server)
//   "Some4Complex#Password", // mot de passe SQL Server
//   {
//     host: "127.0.0.1",     // adresse du serveur SQL Server (local ici)
//     dialect: "mssql",      // on précise qu'on utilise Microsoft SQL Server
//     port: 1433,            // port par défaut SQL Server
//     dialectOptions: {      // options spécifiques au driver mssql
//       options: {
//         trustServerCertificate: true, // option pour ignorer le certificat SSL (pratique en local)
//       },
//     },
//     logging: true,          // active ou désactive l'affichage des requêtes SQL dans la console (true = afficher)
//   }
// );

// // sequelize.authenticate() teste la connexion à la base
// await sequelize.authenticate();
// console.log("Connection has been established successfully.");

// const db = {};

// db.sequelize = sequelize;

// // ajouter les models
// db.Movie = movieBuilder(sequelize);
// db.Actor = actorBuilder(sequelize);
// db.User = userBuilder(sequelize);

// // ajouter les relations
// db.Movie.belongsToMany(db.Actor, {through : "MovieActors"});
// db.Actor.belongsToMany(db.Movie, {through : "MovieActors"});

// export default db;
