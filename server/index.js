
const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 4545;


app.use(express.json())
app.use(express.static('client'))
app.use(cors())

// const options={
//      index:"home.html"
// }
// app.use("/",express.static("home",options))
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '../client/home.html'))
 });

const {
     getsneaks, createsneak
   } = require('./controller')
   
   app.get("/api/sneaks", getsneaks);
   app.post("/api/sneaks", createsneak);





app.listen(PORT, () => console.log(`your server is running on port: ${PORT}`))