const mongoose = require('mongoose');

mongoose.connect()
.then(() =>console.log("Connected"))
.catch((err)=>console.log("err"))