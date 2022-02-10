module.exports = app => {

    const movies = require("../controllers/movie.controller.js");
    const router = require("express").Router();

    router.post("/newmovie", movies.create);
    router.get("/", movies.findAll);
    router.put("/update/:id", movies.update);
    router.get("/:id", movies.findByPk);
    router.delete("/destroy/:id", movies.destroy);

    //https://localhost:3000/api/movies/id


    app.use('/api/movies', router)
}