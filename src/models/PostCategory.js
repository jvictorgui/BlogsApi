const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        post_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
    }, 
    {   
        timestamps: false,
        tableName: 'posts_categories',
        underscore: true 
    });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            through: PostCategory,
            otherKey: 'postId',
            as: 'posts',
            foreignKey: 'categoryId'
        });

        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: 'postId',
            as: 'categories',
            through: PostCategory,
            otherKey: 'categoryId'
        });
    };

    return PostCategory;
};

module.exports = PostCategoryModel;
