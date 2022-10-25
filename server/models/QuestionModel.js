const {Schema, model} = require("mongoose");
const AnswearsSchema = new Schema({
	option: String,
	correct: Boolean
})
const schema = new Schema({
	question: String,
	answears: [AnswearsSchema]
})

module.exports = model("QuestionModel", schema)