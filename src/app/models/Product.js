import Sequelize, { Model } from 'sequelize'

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            path: Sequelize.STRING,
            offer: Sequelize.BOOLEAN,
            url: {
                            type: Sequelize.VIRTUAL,
                            get() {
                                return `http://localhost:3000/product-file/${this.path}`
                            }
                        }
        },
            {
                sequelize
            }
        )

        return this
    }

    // Define the association with the Category model
    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'category_id', // Foreign key in the Product model
            as: 'category' // Alias for the association
        })
    }
}

export default Product