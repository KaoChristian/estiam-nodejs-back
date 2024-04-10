const { body, validationResult } = require('express-validator');
const UsersService = require('./service');
const models = require('./../../models');


const User = models.User;
const usersService = new UsersService({ User });

function createUser(req, res) {
    const paramsValidation = [
        body('fullName').notEmpty().withMessage('Full name is required.'),
        body('job').notEmpty().withMessage('Job is required.'),
        body('role').notEmpty().withMessage('Role is required.'),
        body('email').notEmpty().withMessage('Email is required.'),
        body('password').notEmpty().withMessage('Password is required.'),
    ]


Promise.all(paramsValidation.map(validation => validation.run(req)))
    .then(() => {
        const validationErr = validationResult(req);

        if (!validationErr.isEmpty()) {
            return res.status(400).send({
                errors: validationErr.array()
            });
        }
        const response = usersService.createUsers(req.body);

        return res.send(response);
    })
    .catch((err) => {
        return res.status(500).send({
            message: 'Something went wrong'
        })
    })


}

module.exports = {
    createUser,
};