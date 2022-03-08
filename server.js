const mysql = require("mysql2");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect app to sql database
const db = mysql.createConnection(
  {
    host: "localhost",
    // your MySQL username (default = root)
    user: "root",
    // your MySQL password
    password: "GadiSha1110!",
    database: "election",
  },
  console.log("Connected to the election database")
);

// db.query("SELECT * FROM candidates", (err, rows) => {
//   console.log(rows);
// });

// db.query("SELECT * FROM candidates WHERE id = 1", (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// db.query("DELETE FROM candidates WHERE id = ?", 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES(?, ?, ?, ?)`;
const params = [1, "Ronald", "Firbank", 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// default response for any other request (Not Found) - must come last to not override the others.
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
