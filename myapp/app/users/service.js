class UsersService {
    
    createUsers(userData) {
        return {
            message: 'create user works!!!',
            user: userData,
        };
    }
}

module.exports = UsersService;