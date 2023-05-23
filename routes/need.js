import {Router} from "express"
const route = Router()

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/register", (req, res) => {
  res.render("register");
});

route.get("/login", (req, res) => {
  res.render("login");
});

route.get("/logout", (req, res) => {
  res.render("logout");
});

export default route