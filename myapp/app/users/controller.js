const UsersService = require('./service')

const usersService = new UsersService();

function createUser(req, res) {
    const response = usersService.createUsers(req.body);
    
    return res.send(response);
}

module.exports = {
    createUser,
};