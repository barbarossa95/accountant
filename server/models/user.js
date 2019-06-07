const { Schema, model } = require('mongoose'),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  userSchema = new Schema({
    name: {
      type: String,
      unique: true,
      index: true,
    },
    passwordHash: String,
  }),
  MODEL_NAME = 'User';

userSchema.statics = {
  findByLogin: async function(username) {
    return await this.findOne({ name: username });
  },
  register: async function(username, password) {
    const user = await this.model(MODEL_NAME).findByLogin(username);

    if (!!user) throw new Error('Такой пользователь уже существует');

    const passwordHash = await bcrypt.hash(password, 5);

    return await this.model(MODEL_NAME).create({
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
          user, // todo to object
        },
        process.env.EXPRESS_AUTH_SECRET,
        signOptions
      );

    return {
      token,
      user,
    };
  },
};

module.exports = model(MODEL_NAME, userSchema);
