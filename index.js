const express = require('express');
const mongoose = require('mongoose');
const eventsRoute = require("./routes/event.js");
const usersRoute = require("./routes/user.js")
const authMiddleware = require("./middleware/auth.js");
const cors = require('cors');
const app = express();
const connectDb = async () => {
    await mongoose.connect("mongodb+srv://gk05908:vera092gR8lyzRSj@cluster0.5seq6fn.mongodb.net/")
}
app.use(express.json());
app.use(cors());
connectDb()
    .then(() => console.log("mongodb connected successfully "))
    .catch(() => console.log("mongodb error"))
app.use('/api/v1/event', authMiddleware, eventsRoute);
app.use('/api/v1/user', usersRoute);
const portNo = 3001;
app.listen(portNo, () => {
    console.log("server is running", portNo)
})