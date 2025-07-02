# Demo Express API (TF-GOS-FQ25L003)

Une API backend simple basée sur Express.js avec Docker et Node.js.

src/
├── index.js          // Point d’entrée
├── database/         // Connexion Sequelize
│   └── index.js
├── models/           // Modèles Sequelize
│   └── movie.model.js
├── controllers/      // Logique métier
│   └── movie.controller.js
├── routes/           // Définition des routes
│   └── index.js

## 🚀 Prérequis

- Git
- Docker & Docker Compose
- Node.js (v14+) et npm

---

## 🔧 Installation & déploiement

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/phil-bstorm/Demo-Express-API-TF-GOS-FQ25L003.git
   cd Demo-Express-API-TF-GOS-FQ25L003
   ```

2. **Lancer docker Compose**

   ```bash
   cd docker
   docker-compose -p demo-express-api up -d
   ```

3. **Installer les dépendances**

   ```bash
   cd ../
   npm install
   ```

4. **Lancer l'application**

Lancer l'application en mode développement avec Nodemon:

```bash
 npm run dev
```

5. **Accéder à l'API**
   Ouvrez votre navigateur et accédez à [http://localhost:8000/api](http://localhost:8000/api) pour voir l'API en action.

6. **Se connecter a sql-docker dans ssms**
login : sa
username : Some4Complex#Password

8. **Creer la db**
CREATE DATABASE testingexpress;


7. **Insérer des données dans la db**
INSERT INTO Movies (title, releaseYear, duration, createdAt, updatedAt) VALUES
('Inception', 2010, 148, GETDATE(), GETDATE()),
('The Matrix', 1999, 136, GETDATE(), GETDATE()),
('Interstellar', 2014, 169, GETDATE(), GETDATE()),
('The Godfather', 1972, 175, GETDATE(), GETDATE()),
('Pulp Fiction', 1994, 154, GETDATE(), GETDATE());


8. **Recuperation ajout de données**
controlleur : 
GET
POST


8. **body**


8. **headers**

8. **getById**

8. **Update**

8. **Delete**

8. **AUTH**

8. **Token**