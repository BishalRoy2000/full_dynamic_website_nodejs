import express from "express";
import { config } from "dotenv";
import hbs from "hbs"; // hbs holo templet engine.....ejs er moto......
import mainroutes from "./routes/main.js";
import bodyParser from "body-parser";


export const app=express();

config({
    path:"./data/config.env"
})
app.use(bodyParser.urlencoded({extended:true}));
app.use("/static",express.static("public")); // akhane samne "/static" diyechi mane...jokhon e /static routes a jabo ota automatic ai public folder take locate korbe.....

app.set("view engine", "hbs");

hbs.registerPartials("views/partials"); // jodi views folder er modhe amon kono html file thake.....jeta sob page a te use hobe jemon(navbar)......tokhon views er modhe partials namer akta folder baniye tar modhe oi html file take rakbo......and app.js a ai line ta likbo......tahole ami oi views folder er jekono file er modhe ai (navbar) take use korte parbo.......ai vabe...{{>navbar}}.....ami ejs use kortam ai vabe---> <%=name %>.....ar hbs use korbo ai vabe......---> {{name}}

app.use("",mainroutes);



