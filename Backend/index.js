const express = require("express");
const app = express();
const {connection} = require("./config/db");
const {userRouter} = require("./routes/user.route");
const {wishlistRouter} = require("./routes/wishlist.route");
require("dotenv").config();
const cors = require("cors");
const {auth} = require("./middleware/auth.middleware")

app.use(cors());
app.use(express.json());

app.use("/user",userRouter)
app.use(auth)
app.use("/wishlist",wishlistRouter)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log(`Server is running at port ${process.env.port}`);
        console.log("Connected to DB");
    } catch (error) {
        console.log(error.message);
    }
})