const db = require('../models');
const Movie = db.movies;
const Op = db.Sequelize.Op;

//CREATE
exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!!"
        })
    }

    const movie = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published
    }

    Movie.create(movie)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error ocurred while creating the Movie!!"
            })
        })
}

//UPDATE
exports.update = (req, res) => {

    const id = req.params.id;

    Movie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Movie was updated with success!!"
                });
            } else {
                res.send({
                    message: `Cannot update Movie with that id= ${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating the record" + id + err
            });
        });
}

//GET
exports.findAll = (req, res) => {

    Movie.findAll()
        .then((row) => {
            res.status(200).send(row);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        })

};


//DELETE

exports.destroy = (req, res) => {

    const id = req.params.id;

    Movie.destroy(id, {where: {id: id}})
    .then(() => {
        if (row !== null) {
            res.status(200).send({message: `El id ${id}, ha sido eleiminado`});
        } else {
            res.status(404).send({
                message: `The movie with id = ${id}, was not found`
            });
        }
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
}

//FIND_BY_ID

exports.findByPk = (req, res) => {

    const id = req.params.id;

    Movie.findByPk(id)
        .then((row) => {
            if (row !== null) {
                res.status(200).send(row);
            } else {
                res.status(404).send({
                    message: `The movie with id = ${id}, was not found`
                });
            }
        })
        .catch((err) => {
            res.status(500).send(err.message);
        })
};