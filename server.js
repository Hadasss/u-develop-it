const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// default response for any other request (Not Found) - must come last to not override the others.
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
