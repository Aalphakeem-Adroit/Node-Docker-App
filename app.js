const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, this is Alphakeem Adroit from Node.js inside Docker. Let's go!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
