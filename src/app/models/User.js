import bcrypt from 'bcrypt'; // Import bcrypt for password hashing
import Sequelize, { Model } from 'sequelize'; // Import Sequelize and Model from sequelize for ORM functionality

//
class User extends Model { // define the User class that extends Sequelize's Model class

    static init(sequelize) {
        // Initialize the User model with the sequelize instance
        super.init({
            // Define the attributes of the User model
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL, // Virtual field for password
            password_hash: Sequelize.STRING, // Field to store the hashed password in the database
            admin: Sequelize.BOOLEAN
        },
            {
                sequelize,
            }
        )
        // hook to hash the password before saving the user to the database
        // The 'beforeSave' hook is triggered before a user is saved to the database
        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10)
            }
        })

        return this
    }

    // Compare the provided password with the hashed password stored in the database
    // This method uses bcrypt to compare the plain text password with the hashed password
    async checkPassword(password) {
        return bcrypt.compare(password, this.password_hash)
    }
}

export default User