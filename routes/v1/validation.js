const { body } = require('express-validator');

export default {
    createPost: [
        body('createdBy').isUUID(),
        body('imageSrc').isString(),
    ],
};