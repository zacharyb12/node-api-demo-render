import express from "express";
import mainRouter from "./routes/index.js";
import morgan from "morgan";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import fakedb from "./database//fakedb.js";

import database from "./database/index.js";



database.sequelize.sync(); // force: true = régénere la db 

const app = express();

app.use(express.json());

// 📄 Configuration Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mon API Express',
      version: '1.0.0',
      description: 'Documentation Swagger de mon API',
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
  },
  apis: ['./src/routes/*.router.js'], // 📌 les fichiers où Swagger va chercher les commentaires JSDoc
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(morgan("tiny"));

app.use("/api", mainRouter);
app.get("/test", (req, res) => {
  res.status(200).json(fakedb);
});


// app.listen(8000, () => {
//   console.log("Le serveur a démarrer : http://localhost:8000 ");
//   console.log('Documentation Swagger sur http://localhost:8000/api-docs');
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

