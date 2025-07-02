import { NotFoundErrorResponse ,ErrorResponse  } from "../response-objects/error.response.js";
import movieService from "../services/movie.service.js";
import { SuccessArrayResponse, SuccessObjectResponse } from "../response-objects/success.response.js";

const movieController = {

  getAll: async (req, res) => {
    const { offset = 0 , limit = 10 } = req.pagination || {};

    const data = await movieService.getAll(offset, limit);

    res.status(200)
    .json(new SuccessArrayResponse(data.movies, data.count));

  },

  getById : async (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = await movieService.getById(movieId);

    if(!movie){
      res.status(404)
      .json(new NotFoundErrorResponse('Movie not found'));
      return;
    }

    res.status(200)
    .json(new SuccessObjectResponse(movie));
  },

  create : async (req, res) => {
    const movie = await movieService.add(req.body);
    res.status(201)
    .json(new SuccessObjectResponse(movie, 'Movie crée avec succes'));
  },

  update : async (req,res) => {
    const movieId = parseInt(req.params.id);
    const updatedMovie = req.body

    const Movie = await movieService.update(movieId,updatedMovie);

    if(!Movie){
      return res.status(404)
      .json(new NotFoundErrorResponse('Film introuvable'));
    }

    res.status(200)
    .json(new SuccessObjectResponse(Movie, 'Le film mis a jour avec succes'));
  },
  
  delete : async (req, res) => {
    const movieId = parseInt(req.params.id);
    const isDeleted = await movieService.delete(movieId);

    if(!isDeleted){
      return res.status(404)
      .json(new NotFoundErrorResponse('Film introuvable'));
      return;
    }
    res.sendStatus(204);
  },
addActorToMovie: async (req, res) => {
  const actorId = parseInt(req.params.actorId);
  const movieId = parseInt(req.params.id);

  const movie = await movieService.addActorToMovie(actorId, movieId);

  if (!movie) {
    return res.status(404).json(
      new NotFoundErrorResponse('Film ou acteur introuvable')
    );
  }

  res.status(200).json(
    new SuccessObjectResponse(movie, 'Acteur ajouté au film avec succès')
  );
},

removeActorFromMovie: async (req, res) => {
  const actorId = parseInt(req.params.actorId);
  const movieId = parseInt(req.params.id);

  const movie = await movieService.removeActorFromMovie(actorId, movieId);

  if (!movie) {
    return res.status(404).json(
      new NotFoundErrorResponse('Film ou acteur introuvable')
    );
  }

  res.status(200).json(
    new SuccessObjectResponse(movie, 'Acteur retiré du film avec succès')
  );
},
getMovieWithActors: async (req, res) => {
  const movieId = parseInt(req.params.id);

  const movie = await movieService.getMovieWithActors(movieId);

  if (!movie) {
    return res.status(404).json(
      new NotFoundErrorResponse("Film introuvable")
    );
  }

  res.status(200).json(
    new SuccessObjectResponse(movie, "Film avec ses acteurs récupéré avec succès")
  );
}

};



export default movieController;
