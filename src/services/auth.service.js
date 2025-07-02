import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../database/index.js';

const secret = 'QS8D6F08QS6F8QSDF67SD98F6SDF8SDF8';
const authService = {

    
    async login(username, password) {
        const user = await db.User.findOne({ where: { username } });
        if (!user) return null;
        
        const match = await bcrypt.compare(password, user.password);
        if (!match) return null;
        
        // Créer un token
        const token = jwt.sign({ userId: user.id, username: user.username }, secret, {
            expiresIn: '1h'
        });
        
        return token;
    }
}
    
export default authService;

// npm install jsonwebtoken bcrypt
