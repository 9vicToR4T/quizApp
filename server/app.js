const express = require("express");
const config = require("config");
const { urlencoded } = require("express");
// const chalk = require("chalk");

const port = config.get("port") ?? 8080

const app = express();

app.use(express.json())
app.use(urlencoded({extended: false}))


if(process.env.NODE_ENV === "production") console.log("production")
if(process.env.NODE_ENV === "development") console.log("development")
app.get("/", (req, res) =>{
	res.send("Hello Victor")
})

app.listen(port, () =>{
	console.log(`APP listening port: ${port}`)
})


// app.use(express.json());  -- allow app to get responses from post request
// 5