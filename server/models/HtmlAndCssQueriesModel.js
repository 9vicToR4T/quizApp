const { Schema, model } = require("mongoose");
const AnswearsSchema = new Schema({
  option: String,
  correct: Boolean,
});
const schema = new Schema(
  {
    question: { type: String, required: true },

    answears: [AnswearsSchema],
  },
  { timestamps: true }
);

module.exports = model("HtmlAndCssQueriesModel", schema);
