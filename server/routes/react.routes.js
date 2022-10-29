const express = require("express");
const router = express.Router({ mergeParams: true });
const ReactQueriesModel = require("../models/ReactQueriesModel")

router.get("/", async (req, res) =>{
	try {
		const queries = await ReactQueriesModel.find();
		res.status(500).send(queries)
	} catch (error) {
		res.status(500).json({message: "Error on server with react questions"})
	}
})


module.exports = router;
