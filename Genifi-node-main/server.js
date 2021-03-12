const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./genifi_app/config/db.config");
const app = express();
const db = require("./genifi_app/models");
const Role = db.role;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Genif'I application." });
});
//routes
require('./genifi_app/routes/auth.routes')(app);
require('./genifi_app/routes/user.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//connection to mongodb
db.mongoose
  .connect(`mongodb+srv://genifi:genifi@genifi.dfbop.mongodb.net/genifi`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
//config roles
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "owner"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'owner' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
