import { DataTypes, Sequelize } from "sequelize";

export default (sequelize) => {

// .define() est une méthode de Sequelize qui crée un modèle (ou une table dans la BDD).
// Le premier argument "Movie" est le nom du modèle (la table en BDD sera appelée Movies par défaut, Sequelize met le nom au pluriel)
  
const Movie = sequelize.define("Movie", {
    // Attributes
    // Chaque clé dans l'objet passé à define() correspond à une colonne dans la table.
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  // On retourne le modèle Movie, afin de pouvoir l'importer et l'utiliser ailleurs
  return Movie;
};
