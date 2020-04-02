const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const company_categorySchema = new Schema({
company_category: {
    type: String,
    required: true,
    ref: '_id'
  },
 
});

module.exports = company_category = mongoose.model("company_category", companies_categorySchema);