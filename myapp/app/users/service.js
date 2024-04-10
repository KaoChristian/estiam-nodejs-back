class UsersService {

    constructor({ User }){
        this.User = User;
    }
    
    async createUsers(userData) {

        await this.User.findOne({
            email: userData.email
        });

        if (_user) {
            return {
                message: 'A user with this email already exists!',
            };
        } else {
            await this.User.creat(userData);

        return {
            message: 'User created successfully!',
            user: userData,
        };
        }
    }
}
module.exports = UsersService;
