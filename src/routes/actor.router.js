import express from 'express';
import actorController from '../controllers/actor.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Actors
 *   description: API pour gérer les acteurs
 */

/**
 * @swagger
 * /api/actor:
 *   get:
 *     summary: Récupérer la liste de tous les acteurs
 *     tags: [Actors]
 *     responses:
 *       200:
 *         description: Liste des acteurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   firstname:
 *                     type: string
 *                     example: "Jean"
 *                   lastname:
 *                     type: string
 *                     example: "Dupont"
 */
router.get('/', actorController.getAll);

/**
 * @swagger
 * /api/actor/{id}:
 *   get:
 *     summary: Récupérer un acteur par ID
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'acteur
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Acteur trouvé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 firstname:
 *                   type: string
 *                   example: "Jean"
 *                 lastname:
 *                   type: string
 *                   example: "Dupont"
 *       404:
 *         description: Acteur non trouvé
 */
router.get('/:id', actorController.getById);

/**
 * @swagger
 * /api/actor:
 *   post:
 *     summary: Créer un nouvel acteur
 *     tags: [Actors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstname
 *               - lastname
 *             properties:
 *               firstname:
 *                 type: string
 *                 example: "Jean"
 *               lastname:
 *                 type: string
 *                 example: "Dupont"
 *     responses:
 *       201:
 *         description: Acteur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 10
 *                 firstname:
 *                   type: string
 *                   example: "Jean"
 *                 lastname:
 *                   type: string
 *                   example: "Dupont"
 */
router.post('/', actorController.create);

/**
 * @swagger
 * /api/actor/{id}:
 *   put:
 *     summary: Mettre à jour un acteur par ID
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'acteur à modifier
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 example: "Jean"
 *               lastname:
 *                 type: string
 *                 example: "Dupont"
 *     responses:
 *       200:
 *         description: Acteur mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 firstname:
 *                   type: string
 *                   example: "Jean"
 *                 lastname:
 *                   type: string
 *                   example: "Dupont"
 *       404:
 *         description: Acteur non trouvé
 */
router.put('/:id', actorController.update);

/**
 * @swagger
 * /api/actor/{id}:
 *   delete:
 *     summary: Supprimer un acteur par ID
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'acteur à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Acteur supprimé avec succès
 *       404:
 *         description: Acteur non trouvé
 */
router.delete('/:id', actorController.delete);

export default router;
