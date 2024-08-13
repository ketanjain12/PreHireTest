const { body, validationResult } = require('express-validator');

const validateUser = [
  // Validate username: not empty, alphanumeric, 3-15 chars
  body('name')  
    .trim()
    .notEmpty().withMessage('name is required here')
    .isAlphanumeric().withMessage('name should only contain letters & numbers')
    .isLength({ min: 3, max: 15 }).withMessage('name must be 3-15 char long'),

    // body('userId')  
    // .trim()
    // .notEmpty().withMessage('tags is required here')
    // .isAlphanumeric().withMessage('tags should only contain letters & numbers')
    // .isLength({ min: 3, max: 15 }).withMessage('tags must be 3-15 char long'),
    
  body('email')
  .trim()
  .notEmpty().withMessage('Email is required')
  .isEmail().withMessage('Invalid email format')
  .normalizeEmail() 
  .isLength({ max: 50 }).withMessage('Email must be under 50 characters') // Ensures email is not too long
  .custom(value => {
      if (value.endsWith('.invalid')) {
          throw new Error('Email domain is not allowed');
      }
      return true;
  }),
  //Validate role
  body('role')
    .isIn(['admin', 'user', 'guest'])
    .withMessage('Role must be one of the following: admin, user, guest'),

  // new add data 
  //   // Validate mobileno: not empty, numeric, 10-15 digits
//   body('mobileno')
//     .trim()
//     .notEmpty().withMessage('Mobile number is required')
//     .isNumeric().withMessage('Mobile number should only contain numbers')
//     .isLength({ min: 10, max: 12 }).withMessage('Mobile number must be 10-15 digits long'),
 
  // Handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateUser;

