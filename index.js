import express from "express";
import {create } from "express-handlebars";
import ProductRoutes from "./routes/product.js"
import AuthRoutes from "./routes/need.js"


const app = express();

const hbs = create({
 defaultLayout: "main", extname: "hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");


app.use(AuthRoutes)
app.use(ProductRoutes)


const PORT = process.env.PORT || 4200;
app.listen(PORT, () => console.log(`${PORT} port started`));
