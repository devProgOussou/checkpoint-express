const express = require('express');
const app = express();
require('dotenv').config({ path: './config/.env' })


const currentDate = new Date();
const day = currentDate.getDay();
const hours = currentDate.getHours();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use((req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
    next();
  } else {
    res.render("serviceClose");
  }
});

app.get('/', function (req, res) {
  res.render("home");
});

app.get("/contacts", (req, res) => {
  res.render("contacts");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port : ${process.env.PORT}`)
})