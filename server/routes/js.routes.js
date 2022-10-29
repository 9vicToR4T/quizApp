const express = require("express");
const router = express.Router({ mergeParams: true });
const JsQueriesModel = require("../models/JsQueriesModel")


router.get("/", async (req, res) =>{
	try {
		const queries = await JsQueriesModel.find()
		res.status(200).send(queries)
	} catch (error) {
		res.status(500).json({message: "Error on server "})
	}
})


module.exports = router;
