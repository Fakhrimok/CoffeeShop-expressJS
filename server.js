const express = require("express");
const app = express();

//a function that will output the time of the request
const myLogger = function (req, res, next) {
  //we star be reading the golbal date
  var today = new Date()
  //we read the hours only
  var time =today.getHours()
  //now we read the week day sunday being 0 and saturday being 6
  var day=today.getDay()
  if (time>=9 && time<=17 && day>= 1 && day <= 5 ){
    next()
  } else {res.send("<h1>we are closed at this time</h1>")}
  // console.log("request received at "+ time)
  // console.log("request received on "+ day)
}
app.use(myLogger);

//define the port we will be using
const PORT = 5000;
app.listen(PORT, () => console.log("listening on port:", PORT));

//to read home.html from the given path
app.get("/", (req,res)=>{
  res.sendFile(__dirname + '/static/home.html')
}
)
//to read contact.html from the given path
app.get("/contact", (req,res)=>{
  res.sendFile(__dirname + '/static/contact.html')
}
)
//to read services.html from the given path
app.get("/services", (req,res)=>{
  res.sendFile(__dirname + '/static/Services.html')
}
)
//to read style.css from the given path
app.get("/style.css", (req,res)=>{
  res.sendFile(__dirname + '/static/style.css')
})
// also we can use the following in case we have many .css file in a given folder:
// app.use(express.static(__dirname+"/static"))



