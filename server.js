const mysql = require("mysql2");
const express = require("express");
const db = require("./db/connections");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api routes
app.use("/api", apiRoutes);
const inputCheck = require("./utils/inputCheck");

// default response for any other request (Not Found) - must come last to not override the others.
app.use((req, res) => {
  res.status(404).end();
});

// start server after DB connection:
db.connect((err) => {
  if (err) throw err;
  console.log("database connected");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
