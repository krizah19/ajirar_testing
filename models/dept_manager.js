const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const dept_managerSchema = new Schema({
employee_name: {
    type: String,
    required: true,
    ref: 'employee_data'
  },
  company_name: {
      type: String,
      required: true,
      ref: 'companies',
  },
  dept_name: {
    type: String,
    required: true,
    ref: 'departments',
},
});

module.exports = dept_manager = mongoose.model("dept_manager", dept_managerSchema);