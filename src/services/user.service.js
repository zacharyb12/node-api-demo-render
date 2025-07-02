import db from "../database/index.js";
import bcrypt from 'bcrypt';

const userService = {

    async getById(id) {
        return await db.User.findByPk(id);
    },

    async getAll(offset = 0, limit = 10) {
        const { rows: users, count } = await db.User.findAndCountAll({
            offset,
            limit,
            order: [['id', 'ASC']]
        });

        return { users, count };
    },

    async add(userData) {
        userData.password = await bcrypt.hash(userData.password, 10);
        return await db.User.create(userData);
    },

    async update(id, updatedUser) {
        const user = await db.User.findByPk(id);

        if (!user) {
            return null;
        }

        await user.update(updatedUser);
        return user;
    },

    async delete(id) {
        const count = await db.User.destroy({
            where: { id }
        });

        return count > 0;
    }
    
}

export default userService;