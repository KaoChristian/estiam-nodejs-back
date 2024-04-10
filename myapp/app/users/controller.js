const UsersService = require('./service')

const usersService = new UsersService();

function createUser(req, res) {
    // const paramsValidation = [
    //     body('fullName').withMessage('Full name is required.'),
    //     body('job').withMessage('Job is required.'),
    //     body('role').withMessage('Role is required.'),
    //     body('email').withMessage('Email is required.'),
    //     body('password').withMessage('Password is required.'),
    // ]
    return res.send(response);
};

module.exports = {
    createUser,
};