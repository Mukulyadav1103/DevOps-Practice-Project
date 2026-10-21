const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("DevOps Practice Lab is running!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    application: "DevOps Practice Lab"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
