import { connectDB } from "../data/database.js";
import { app } from "./app.js";
import { Detail } from "./models/navbar.js";
import { Slider } from "./models/slider.js";
import { poster } from "./models/baner1.js";
import { services } from "./models/service.js";
import { bannerf } from "./models/baner2.js";
import { bannerss } from "./models/banner3.js";
import { about } from "./models/about.js";
import { footer } from "./models/footer.js";
import { gallery } from "./models/gallery.js";

connectDB();

// navbar data insert

// Detail.create({
//     brandName:"Info Technical Solutions",
//     brandIconUrl:"https://png.pngtree.com/png-vector/20221019/ourmid/pngtree-creative-t-and-digital-solutions-transparent-background-logo-template-png-image_6353142.png",
//     links:[
//         {
//             label:"Home",
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/#services-section"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//             label:"About",
//             url:"/#about-section"
//         },
//         {
//             label:"Contact Us",
//             url:"/#contact_us_section"
//         }
//     ]
// })

// slider data insert

// Slider.create({
//     title: "What is Django in python ?",
//     subTitle: "Django is most famous web framework of python programming language",
//     imageUrl: "/static/images/s7.jpg",
//     class: "active"
// })
// Slider.create({
//     title: "Learn Java in very easy manner",
//     subTitle: "Java is one of the most popular programming language",
//     imageUrl: "/static/images/s1.jpg",
//     class: ""
// })
// Slider.create({
//     title: "What about Node js",
//     subTitle: "Node js is runtime environment to execute javascript outside browser",
//     imageUrl: "/static/images/s6.jpg",
//     class: ""
// })

// banner1 data insert

// poster.create({
//     tittle:"Start learning new technology here !!",
//     description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique atque reprehenderit sed unde, nam officia consectetur temporibus, incidunt ab ad deserunt ratione dolorum cum exercitationem dolore ducimus quam. Possimus non dicta error facere officiis dolores eveniet perferendis, voluptas ipsa hic.",
//     buttonText:"Start Learning",
// })

// services data insert

// services.create({
//     icon:"fas fa-keyboard",
//     title:"Provide best courses",
//     description:"we provide best courses that our students in placement and learning coding",
//     linkText:"Check",
//     linkUrl:"#"
// })
// services.create({
//     icon:"fas fa-laptop-code",
//     title:"Building Projects",
//     description:"we provide best courses that help our students to building advanced projects for their resume",
//     linkText:"Build",
//     linkUrl:"#"
// })
// services.create({
//     icon:"fas fa-medal",
//     title:"Freeliancer Ready",
//     description:"we provide best courses that make our students freeliancer ready",
//     linkText:"Learn",
//     linkUrl:"#"
// })
// services.create({
//     icon:"fas fa-handshake",
//     title:"Creating a Developer",
//     description:"we provide best courses that make our students a greate software developer",
//     linkText:"Lets Go",
//     linkUrl:"#"
// })
// services.create({
//     icon:"fas fa-globe",
//     title:"Open Source",
//     description:"we provide best courses that make our students get ready for open source contribution",
//     linkText:"Start",
//     linkUrl:"#"
// })
// services.create({
//     icon:"fas fa-flag-usa",
//     title:"Offer from MNC",
//     description:"we provide best courses that helps our students for get a chance at big MNC",
//     linkText:"Start",
//     linkUrl:"#"
// })

// banner2 data insert

// bannerf.create({
//     tittle:"We work for people, not for money",
//     description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, error! Molestias ab dolores at rem perferendis qui et, quasi voluptatem nesciunt corrupti facere beatae aut quam dolorem obcaecati aliquid harum!",
//     buttonText:"Click here",
//     imageUrl:"/static/images/graphics1.png"
// })

// banner3 data insert

// bannerss.create({
//     tittle:"We work for people, not for money",
//     description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, error! Molestias ab dolores at rem perferendis qui et, quasi voluptatem nesciunt corrupti facere beatae aut quam dolorem obcaecati aliquid harum!",
//     buttonText:"Click here",
//     imageUrl:"/static/images/graphics3.webp"
// })

// about data insert

// about.create({
//     tittle:"About this site",
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis laboriosam labore, aliquam illum beatae hic maiores quos laborum quis non quae eos quidem, culpa, eveniet distinctio. Omnis deserunt odio vitae aliquam quasi quam a dicta impedit cum, quos rerum tenetur expedita natus sed ut atque deleniti eius? Quibusdam laborum mollitia sequi. Enim tempora saepe impedit, aut in praesentium amet. Qui quaerat quia accusamus veritatis consequuntur maxime eligendi doloribus soluta? Natus aut esse quidem consequatur inventore adipisci eius sunt repellat at quas necessitatibus accusamus rerum commodi, sequi aliquam neque ut perspiciatis vitae officiis ad. Vel libero ea possimus dolorum quia.",
//     buttonText:"More >>>"
// })

// footer data insert

// footer.create({
//     copyRight:"@ 2023 Copyright:",
//     companyName:"FullDynamicWebsiteUsingNodejs"
// })

// gallery data insert

// gallery.create({
//     imageUrl:"/static/images/s1.jpg"
// })
// gallery.create({
//     imageUrl:"/static/images/s3.jpg"
// })
// gallery.create({
//     imageUrl:"/static/images/s4.jpg"
// })
// gallery.create({
//     imageUrl:"/static/images/s5.jpg"
// })
// gallery.create({
//     imageUrl:"/static/images/s6.jpg"
// })
// gallery.create({
//     imageUrl:"/static/images/s7.jpg"
// })
// gallery.create({
//     imageUrl:"/static/images/graphics2.jpg"
// })

app.listen(process.env.PORT, () => console.log(`server is working on port ${process.env.PORT} in ${process.env.MODE} mode`));