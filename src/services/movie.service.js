import db from "../database/index.js";

const movieService = {

    async getById(id){
        return await db.Movie.findByPk(id);
    },
    
    async getAll(offset = 0, limit=10){
        const {rows : movies , count} = await db.Movie.findAndCountAll({
            offset,
            limit,
            order : [['id', 'ASC']]
        });

        return {movies , count};
    },

    async add(movieData){
        return await db.Movie.create(movieData);
    },

    async update( id , updatedMovie){
        const movie = await db.Movie.findByPk(id);

        if(!movie){
            return null;
        }

        await movie.update(updatedMovie);
        return movie;
    },

    async delete(id){
        const count = await db.Movie.destroy({
            where: { id }
        })

        return count > 0;
    },
    async addActorToMovie(actorId, movieId) {
        const movie = await db.Movie.findByPk(movieId);
        if (!movie) {
            return null;
        }

        const actor = await db.Actor.findByPk(actorId);
        if (!actor) {
            return null;
        }

        await movie.addActor(actor);
        return movie;

    },
    async removeActorFromMovie(actorId, movieId) {
        const movie = await db.Movie.findByPk(movieId);
        if (!movie) {
            return null;
        }

        const actor = await db.Actor.findByPk(actorId);
        if (!actor) {
            return null;
        }

        await movie.removeActor(actor);
        return movie;
    },
    async getMovieWithActors(movieId) {
  return await db.Movie.findByPk(movieId, {
    include: [{
      model: db.Actor,
      through: { attributes: [] }
    }]
  });
}
}

export default movieService;