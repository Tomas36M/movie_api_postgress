const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models")
const cors = require("cors");
db.sequelize.sync();


//initialize express
const app = express();
app.set('json spaces', 2)
//parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors());
//parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//invoke routes
require("./routes/movies.routes.js")(app);

//start server + port
const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});