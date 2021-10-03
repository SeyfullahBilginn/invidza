class User {
    // favoriler, kaydetmeler ....

    constructor(userName,userEmail){
        this.userName = userName;
        this.userEmail = userEmail;
    }
    // static constructor2(username,email) {
    //     this.username = username;
    //     this.email = email;
    // }
    // static withProfilePhoto({username,password,profilePhoto} = {}){
    //     var newUser = new User();
    //     newUser.username = username;
    //     newUser.password = password;
    //     newUser.profilePhoto = profilePhoto;
    // }
    // static withoutProfilePhoto({username,password} = {}){
    //     var newUser = new User();
    //     newUser.username = username;
    //     newUser.password = password;
    // }
}
module.exports.User = User;