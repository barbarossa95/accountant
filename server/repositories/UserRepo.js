const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const FirebaseRepo = require('./FirebaseRepo');

class UserRepo extends FirebaseRepo {
  constructor() {
    super();

    this.ref = '/user';
  }

  async findByLogin(login) {
    const options = {
        prop: 'login',
        type: 'equalTo',
        val: login,
      },
      users = await this.findBy(options);

    return users;
  }

  async register(login, password) {
    const users = await this.findByLogin(login),
      user = users[0] || null;

    if (!!user) throw new Error('user already exists');

    const passwordHash = await bcrypt.hash(password, 5),
      newUser = await this.create({
        login,
        passwordHash,
      });

    return newUser;
  }

  async checkCredentials(login, password) {
    const users = await this.findByLogin(login),
      user = users[0] || null;

    if (!user) throw new Error("user with this credentials doesn't exists");

    const match = bcrypt.compare(password, user.passwordHash);

    if (!match) throw new Error('invalid credentials');

    return await this.createToken(user);
  }

  async createToken(user) {
    const signOptions = {
        issuer: 'greshilov.v inc.', // Issuer
        subject: `user: @${user.login}`, // Subject
        audience: 'http://heroku.com', // Audience
        expiresIn: '24h',
      },
      token = await jwt.sign(
        {
          login: user.login,
          userId: user.key,
        },
        process.env.EXPRESS_AUTH_SECRET,
        signOptions
      );

    return {
      token,
      user,
    };
  }
}

module.exports = UserRepo;
