const express =  require("express");
// with the help of this app..we can access all the methods and properties of express
const app = express();
// agar 8000 port pe nhi chla ...to "process.env.PORT" iske through jo port milega uspe chl  jayega
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require('hbs');


// Public index.html static path
const staticPath  = path.join(__dirname,"../public")
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
// we  want to run the static website that is index.html for that we need to tell express that. .static is the method to show static website(html) through express...we just have to require path module for that nothing else between brackets we need to add the path of our static website..after doing this...Our index.html will be showed at localhost:8000 through express
app.set('view engine', 'hbs');
app.set('views', template_path);
// we are telling that hbs registred our partials
hbs.registerPartials(partials_path);
app.use(express.static(staticPath));


app.get("/", (req, res) => {
    // we passed the hbs file here
    res.render("index")
});


app.get("/about", (req, res) => {
    // we passed the hbs file here
    res.render("about")
});


app.get("/weather", (req, res) => {
    // we passed the hbs file here
    res.render("weather")
});


app.get("*", (req, res) => {
    // we passed the hbs file here
    res.render("404error",{
        errormsg: 'OOps page not found!'
    }) 
});


app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
});









// // Routing
// app.get("",(req,res)=>{
//        res.send("Welcome to juhi's weather app")
// });


// // Routing
// app.get("/about",(req,res)=>{
//     res.send("Welcome to juhi's weather app's about page")
// });

// // Routing
// app.get("/weather",(req,res)=>{
//     res.send("Welcome to juhi's weather app's weather page")
// });

// // Routing
// // If nothing matched among above pages... then show error page..* this is used for that
// app.get("*",(req,res)=>{
//     res.send("404 error page")
// });


// app.listen(port,()=>{
//     console.log(`Listening to the port at ${port}`)
// });

