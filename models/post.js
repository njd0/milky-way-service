const { Sequelize, DataTypes } = require('sequelize');

export default async (sequelize) => {

    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        createdBy: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            // references: {
            //     model: 'User',
            //     key: 'id',
            // },
        },
        imageSrc: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://via.placeholder.com/256x144", // TODO remove this
        },
        likes: {
            type: DataTypes.ARRAY(DataTypes.UUID),
        },
        // location: {
        //     type: Sequelize.GEOMETRY('POINT'),
        // }
    });
  
    await Post.sync();

    return Post;
}