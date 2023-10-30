import express from "express";
import { galleries, home, query_submit } from "../controllers/main.js";


const routes=express.Router();

routes.get("/",home);
routes.get("/gallery",galleries);
routes.post("/contact_submit_process",query_submit);

export default routes;