const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const authenticate = require("./auth/authenticate")

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function main(){
    await mongoose.connect(process.env.BD_CONNECTION_STRING);
    console.log("conectado a mongoDB :D")
}
main().catch(console.error)

app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/user", authenticate, require("./routes/user"));
app.use("/api/signout", require("./routes/signout"));
app.use("/api/todos",authenticate, require("./routes/todos"));
app.use("/api/refresh-token", require("./routes/refreshToken"));

app.get("/",(req, res)=>{
    res.send("hello world");

});

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});
