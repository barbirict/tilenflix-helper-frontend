export default class user {
    constructor(newUser) {
        let {username, name, surname, password, email} = newUser
        this.username = username
        this.password = password
        this.name = name
        this.surname = surname
        this.email = email
        this.role = "usr";
    }
}

