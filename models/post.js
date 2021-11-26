module.exports = (sequelize, DataTypes) =>{
    const Post = sequelize.define("Post",{
        text:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Post.associate = models =>{
        Post.belongsTo(models.User,{
            ferignKey:{
                allowNull:false
            }
        })
    };
    return Post;
};