module.exports = ( sequelize, Sequelize ) => {
    const Movie = sequelize.define( "movies", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        likes: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    } );
    return Movie;
}