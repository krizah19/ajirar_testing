const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const CompaniesSchema = new Schema({
company_name: {
    type: String,
    required: true,
    ref: '_id'
  },
  category: {
      type: String,
      required: true,
      ref: 'company_category',
  },
  department: {
    type: String,
    required: true,
    ref: 'departments',
  },
  address: {
    type: String,
    required: true,
    ref: 'location_addresses',
  },
});

module.exports = Companies = mongoose.model("companies", CompaniesSchema);