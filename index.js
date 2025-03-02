const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;


// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes

app.get("/", (req, res) => {
    res.render("index", { title: "Home", name: "Josiah Tayi" });
});

app.get("/projects", (req, res) => {
    res.render("projects", { title: "Projects" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Me" });
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.send("Thank you for reaching out!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
