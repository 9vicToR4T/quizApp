const express = require("express");
const HtmlAndCssQueriesModel = require("../models/HtmlAndCssQueriesModel");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) =>{
	try {
		const questions = await HtmlAndCssQueriesModel.find();
		res.status(200).send(questions)
	} catch (error) {
		res.status(500).json({message: "Error on server with HTML and CSS questions"})
	}
})



module.exports = router;
