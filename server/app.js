const express = require("express");
const config = require("config");
const { urlencoded } = require("express");
const chalk = require("chalk");
const { default: mongoose } = require("mongoose");
// const chalk = require("chalk");
const initDatabase = require("./startUp/initDatabase.js")
const routes = require("./routes")

const port = config.get("port") ?? 8080

const app = express();
app.use("/quiz", routes)
app.use(express.json())
app.use(urlencoded({extended: false}))


// if(process.env.NODE_ENV === "production") console.log("production")
// if(process.env.NODE_ENV === "development") console.log("development")


app.get("/", (req, res) =>{
	res.send("Hello Victor")
})

 async function start(){
try {
	mongoose.connection.once("open", () =>{
		initDatabase()
	})
	await mongoose.connect(config.get("mongoUri"))
	console.log("MongoDB connected")
	app.listen(port, () =>{
	console.log(`APP listening port: ${port}`)
})
} catch (error) {
	console.log(chalk.red(error.message))
	process.exit(1)
}
 }

 start()



// app.use(express.json());  -- allow app to get responses from post request
// 5