const { Schema, model } = require('mongoose'),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  omit = require('omit'),
  userSchema = new Schema({
    name: {
      type: String,
      unique: true,
      index: true,
    },
    passwordHash: String,
  }),
  MODEL_NAME = 'User';

userSchema.methods = {
  omit: function(fields) {
    return omit(fields)(this.toObject());
  },
};

userSchema.statics = {
  RESTRICTED_FIELDS: ['passwordHash'],
  findByLogin: async function(username) {
    return await this.findOne({ name: username });
  },
  register: async function(username, password) {
    const user = await this.findByLogin(username);

    if (!!user) throw new Error('Такой пользователь уже существует');

    const passwordHash = await bcrypt.hash(password, 5);

    return await this.create({
      name: username,
      passwordHash,
    });
  },
  createToken: async function(user) {
    const signOptions = {
        issuer: 'greshilov.v inc.', // Issuer
        subject: `user: @${user.name}`, // Subject
        audience: 'http://heroku.com', // Audience
        expiresIn: '24h',
      },
      token = await jwt.sign(
        {
          user: {
            _id: user._id,
            name: user.name,
          },
        },
        process.env.EXPRESS_AUTH_SECRET,
        signOptions
      );

    return {
      token,
      user,
    };
  },
  checkCredentials: async function(username, password) {
    const user = await this.findOne({ name: username });

    if (!user) {
      throw new Error('Пользователя с такими учетными данными не существует');
    }

    const match = await bcrypt.compare(password, user.passwordHash);

    if (!match) throw new Error('Неверные учетные данные');

    return user;
  },
};

module.exports = model(MODEL_NAME, userSchema);
