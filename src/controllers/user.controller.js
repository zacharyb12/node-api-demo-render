import  userService  from '../services/user.service.js';
import { NotFoundErrorResponse, ErrorResponse } from '../response-objects/error.response.js';
import { SuccessArrayResponse, SuccessObjectResponse } from '../response-objects/success.response.js';

const userController = {

    getAll: async (req, res) => {
        const { offset = 0, limit = 10 } = req.pagination || {};
        const data = await userService.getAll(offset, limit);
        res.status(200).json(new SuccessArrayResponse(data.users, data.count));
    },
    
    getById: async (req, res) => {
        const userId = parseInt(req.params.id);
        const user = await userService.getById(userId);

        if (!user) {
            res.status(404).json(new NotFoundErrorResponse('User not found'));
            return;
        }

        res.status(200).json(new SuccessObjectResponse(user));
    },
    create: async (req, res) => {
        try {
            const user = await userService.add(req.body);
            res.status(201).json(new SuccessObjectResponse(user, 'User created successfully'));
        } catch (error) {
            res.status(400).json(new ErrorResponse('Error creating user', error.message));
        }
    },
    update: async (req, res) => {
        const userId = parseInt(req.params.id);
        const updatedUser = req.body;

        const user = await userService.update(userId, updatedUser);

        if (!user) {
            return res.status(404).json(new NotFoundErrorResponse('User not found'));
        }

        res.status(200).json(new SuccessObjectResponse(user, 'User updated successfully'));
    },
    delete: async (req, res) => {
        const userId = parseInt(req.params.id);
        const isDeleted = await userService.delete(userId);

        if (!isDeleted) {
            return res.status(404).json(new NotFoundErrorResponse('User not found'));
        }

        res.sendStatus(204);
    }

}

export default userController;