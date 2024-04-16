const UsersService = require('./service');
const { body,param, validationResult } = require ('express-validator');
const models = require('./../../models');
 
const User = models.User;
const usersService = new UsersService({ User });
 
function createUser(req, res) {
    const paramsValidation = [
        // param(id).notEmpty().withMessage('User ID is required.'),
        body('fullName').notEmpty().withMessage('Full name is required.'),
        body('job').notEmpty().withMessage('Job is required.'),
        body('role').notEmpty().withMessage('Role is required.'),
        body('email').notEmpty().withMessage('Email is required.'),
        body('password').notEmpty().withMessage('Password is required.'),
 
    ];
    Promise.all(paramsValidation.map(validation => validation.run(req)))
    .then(async () => {
        const validationErr = validationResult(req);
 
        if (!validationErr.isEmpty()) {
            return res.status(400).send({
                errors: validationErr.array
            });
        }
 
        const response = await usersService.createUser(req.body);
 
        return res.send(response);
    })
    .catch((err) => {
        return res.status(500).send({
            message : 'Something went wrong'
        });
 
    });
 
}
 
function updateUser(req, res) {
    const paramsValidation = [param('_id').notEmpty().withMessage('User ID is required.')];
         
    Promise.all(paramsValidation.map(validation => validation.run(req)))
    .then(async () => {
        const validationErr = validationResult(req);
 
        if (!validationErr.isEmpty()) {
            return res.status(400).send({
                errors: validationErr.array
            });
        }
 
        const response = await usersService.updateUser(req.params._id, req.body);
 
        return res.send(response);
    })
    .catch((err) => {
        return res.status(500).send({
            message : 'Something went wrong'
        });
 
    });
 
}

function deleteUser(req, res) {
    const paramsValidation = [param('_id').notEmpty().withMessage('User ID is required.')];

    Promise.all(paramsValidation.map(validation => validation.run(req)))
    .then(async () => {
        const validationErr = validationResult(req);
 
        if (!validationErr.isEmpty()) {
            return res.status(400).send({
                errors: validationErr.array
            });
        }
        
        const reponse = await usersService.deleteUser(req.params._id);
        
        return res.send(response);
    });
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
};