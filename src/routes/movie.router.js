import { Router } from "express";
import movieController from "../controllers/movie.controller.js";

const movieRouter = Router();

movieRouter.route("/").get(movieController.getAll);

movieRouter.route("/:id").get(movieController.getById);

movieRouter.route("/").post(movieController.create);

movieRouter.route('/:id').put(movieController.update);
   
movieRouter.route('/:id').delete(movieController.delete);

movieRouter.route('/:id/actors/:actorId').put(movieController.addActorToMovie);

movieRouter.route('/:id/actors/:actorId').put(movieController.removeActorFromMovie);

movieRouter.get('/full/:id', movieController.getMovieWithActors);


export default movieRouter;

