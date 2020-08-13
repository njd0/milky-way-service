const { validationResult } = require('express-validator');
// TODO CHECK IF THIS WORKS
export const routeValidaton = (validation) =>
(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
};