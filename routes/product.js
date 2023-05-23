import {Router} from "express"
const route = Router()


route.get("/add", (req, res) => {
  res.render("add");
});

route.get("/products", (req, res) => {
  res.render("products");
});

export default route