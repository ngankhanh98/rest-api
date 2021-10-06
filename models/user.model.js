const db = require('../utils/db');


module.exports = {
    async getUserByUserId(userId) {
        const query = `
            select * 
            from user 
            where user_id = '${userId}'`

        try {
            const result = await db.get(query)

            if (result)
                throw new Error('User not exist')
        } catch (error) {
            throw new Error(error.message)
        }
    },

};
