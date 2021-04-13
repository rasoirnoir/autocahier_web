export default class User {
    constructor(
        username,
        password,
        admin = 0,
        id = -1,
        public_id = -1,
        date_crea = null,
        date_maj = null,
    ) {
        this.username = username;
        this.password = password;
        this.admin = admin;

        this.id = id;
        this.public_id = public_id;
        this.date_crea = date_crea;
        this.date_maj = date_maj;
    }
}
