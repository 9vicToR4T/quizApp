const mongoose = require("mongoose");

const jsQueriesMock = require("../mock/jsQueries.json");
const reactQueriesMock = require("../mock/reactQueries.json");
const htmlAndCssQueriesMock = require("../mock/htmlAndCssQueries.json");

const JsQueriesModel = require("../models/JsQueriesModel");
const ReactQueriesModel = require("../models/ReactQueriesModel");
const HtmlAndCssModel = require("../models/HtmlAndCssQueriesModel");

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        console.error(error);
      }
    })
  );
}

module.exports = async () => {
  try {
    const JsQueries = await JsQueriesModel.find();
    if (JsQueries.length !== jsQueriesMock.length) {
      createInitialEntity(JsQueriesModel, jsQueriesMock);
    }
    const ReactQueries = await ReactQueriesModel.find();
    if (ReactQueries.length !== reactQueriesMock.length) {
      createInitialEntity(ReactQueriesModel, reactQueriesMock);
    }
    const HtmlAndCssQueries = await HtmlAndCssModel.find();
    if (HtmlAndCssQueries.length !== htmlAndCssQueriesMock.length) {
      createInitialEntity(HtmlAndCssModel, htmlAndCssQueriesMock);
    }
  } catch (error) {
    console.error(error);
  }
};
