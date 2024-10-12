import express from "express";
// import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    //Step 1 - Make the get route work and render the index.ejs file.
    res.render("index.ejs")
});

app.get("/about", (req, res) => {
    //Step 1 - Make the get route work and render the index.ejs file.
    res.render("about.ejs")
});

app.get("/projects", (req, res) => {
    //Step 1 - Make the get route work and render the index.ejs file.
    res.render("projects.ejs")
});

app.get("/socials", (req, res) => {
    //Step 1 - Make the get route work and render the index.ejs file.
    res.render("socials.ejs")
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});