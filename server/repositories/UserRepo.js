const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const FirebaseRepo = require('./FirebaseRepo');

class UserRepo extends FirebaseRepo {
  constructor() {
    super();

    this.ref = '/user';
  }

  async findByLogin(username) {
    const options = {
        prop: 'name',
        type: 'equalTo',
        val: username,
      },
      users = await this.findBy(options);

    return users;
  }

  async register(username, password) {
    const users = await this.findByLogin(username),
      user = users[0] || null;

    if (!!user) throw new Error('Такой пользователь уже существует');

    const passwordHash = await bcrypt.hash(password, 5),
      newUser = await this.create({
        username,
        passwordHash,
      });

    return newUser;
  }

  async checkCredentials(username, password) {
    const users = await this.findByLogin(username),
      user = users[0] || null;

    if (!user) {
      throw new Error('Пользователя с такими учетными данными не существует');
    }

    const match = await bcrypt.compare(password, user.passwordHash);

    if (!match) throw new Error('Неверные учетные данные');

    return user;
  }

  async createToken(user) {
    const signOptions = {
        issuer: 'greshilov.v inc.', // Issuer
        subject: `user: @${user.name}`, // Subject
        audience: 'http://heroku.com', // Audience
        expiresIn: '24h',
      },
      token = await jwt.sign(
        {
          username: user.name,
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
