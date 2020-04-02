const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User 
const employee_data = require("../../models/employee_data");

// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", function(req, res) {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

  Employee_data.findOne({ email: req.body.email }).then(employee_data => {
      if (employee_data) {
        return res.status(400).json({ email: "Email already exists"
      });
          const newEmployee_data = new Employee_data({
          name: req.body.name,
          email: req.body.email,
          company_name: req.body.company_name,
          password: req.body.password,
        });

  // Hash password before saving in database
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newEmployee_data.password, salt, (err, hash) => {
      if (err) throw err;
      newEmployee_data.password = hash;
      newEmployee_data
        .save()
        .then(employee_data => res.json(employee_data))
        .catch(err => console.log(err))
                    }); 
              });
            }
        });
    });

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
   
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    Employee_data.findOne({ email }).then(employee_data => {
      // Check if user exists
      if (!employee_data) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, employee_data.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: employee_data.id,
            name: employee_data.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

module.exports = router;