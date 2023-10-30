import { Detail } from "../models/navbar.js";
import {Slider} from "../models/slider.js";
import {services} from "../models/service.js";
import {query} from "../models/contact.js";
import {poster} from "../models/baner1.js";
import {bannerf} from "../models/baner2.js";
import {bannerss} from "../models/banner3.js";
import {about} from "../models/about.js";
import {footer} from "../models/footer.js";
import {gallery} from "../models/gallery.js";


export const home=async(req,res)=>{
    const details=await Detail.findOne({"_id":"652a3368bc51ed91c3f31656"});
    const slides=await Slider.find();
    const service=await services.find();
    const posters=await poster.findOne({"_id":"653a4ed414a12b6b4cc1068f"});
    const bannerfs=await bannerf.findOne({"_id":"653b7626cd08bd438c4beed2"});
    const bannersss=await bannerss.findOne({"_id":"653b7aaee95c4d7212915bfc"});
    const abouts=await about.findOne({"_id":"653b960ae988bce665e8ec06"});
    const footers=await footer.findOne({"_id":"653ba222cd5f932d8a043176"});
    res.render("index",{details:details,slides:slides,services:service,posters:posters,bannerfs:bannerfs,bannersss:bannersss,abouts:abouts,footers:footers});
}

export const galleries=async(req,res)=>{
    const details=await Detail.findOne({"_id":"652a3368bc51ed91c3f31656"});
    const gall=await gallery.find();
    const footers=await footer.findOne({"_id":"653ba222cd5f932d8a043176"});
    res.render("gallery",{details:details,gall:gall,footers:footers});
}

export const query_submit=async(req,res)=>{
    const {email,phone,queries}=req.body;
    try {
        await query.create({email,phone,queries});
        res.redirect("/");
    } catch (e) {
        console.log(e);
        res.redirect("/");
    }
}