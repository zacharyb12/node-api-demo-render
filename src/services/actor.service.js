import db from '../database/index.js'

const actorService = {

    async getAll(offset = 0 , limit = 10){
        const {rows : actors , count} = await db.Actor.findAndCountAll({
            offset,
            limit,
            order : [['id', 'ASC']]
        });

        return {actors , count}
    },

    async getById(id){
        return await db.Actor.findByPk(id);
    },

    async add(actorData){
        return await db.Actor.create(actorData);
    },

    async update(id, actorData){
        const actor = await db.Actor.findByPk(id);

        if(!actor){
            return null;
        }

        await actor.update(actorData);
        return actor;
    },
    
    async delete(id){
        const count = await db.Actor.destroy({
            where: { id }
        });

        return count > 0;
    }
}

export default actorService;