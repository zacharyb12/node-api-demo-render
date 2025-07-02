import actorService from "../services/actor.service.js";

import { ErrorResponse, NotFoundErrorResponse} from "../response-objects/error.response.js"
import {SuccessObjectResponse, SuccessArrayResponse} from "../response-objects/success.response.js"

const actorController = {

    getById : async (req,res) => {
        const actorId = req.params.id;
        const actor = await actorService.getById(actorId);

        if(!actor){
            res.status(404)
            .json(new NotFoundErrorResponse(`Acteur avec l'id : ${actorId} introuvable`));
        }
        res.status(200)
            .json(new SuccessObjectResponse(actor, `Acteur avec l'id : ${actorId} trouvé`));
    },

    getAll : async (req, res) => {
        const offset = parseInt(req.query.offset) || 0;
        const limit = parseInt(req.query.limit) || 10;

        const data = await actorService.getAll(offset, limit);

        if(data.count === 0){
            res.status(404)
                .json(new NotFoundErrorResponse("Aucun acteur trouvé"));
        }

        res.status(200)
            .json(new SuccessArrayResponse(data.actors, data.count, "Liste des acteurs"));
    },
    
    create : async (req,res) => {
        const actor = await actorService.add(req.body);

        if(!actor){
            res.status(400)
                .json(new ErrorResponse("Erreur lors de la création de l'acteur"));
        }

        res.status(201)
            .json(new SuccessObjectResponse(actor, "Acteur créé avec succès"));
    },

    delete : async (req , res) => {
        const actorId = parseInt(req.params.id);
        const deleted = await actorService.delete(actorId);

        if(!deleted){
            res.status(404)
            .json(new NotFoundErrorResponse(`Acteur avec l'id : ${actorId} introuvable`));
        }
        res.sendStatus(204);
    },

    update : async (req, res) => {
        const actorId = parseInt(req.params.id);
        const newData = req.body;

        const actor = await actorService.update(actorId, newData);

        res.status(200)
        .json(new SuccessObjectResponse(actor, `Acteur avec l'id : ${actorId} mis à jour`));
    }


}

export default actorController;