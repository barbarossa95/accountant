const firebase = require('../utilites/firebase');

class Model {
  constructor() {
    this.ref = '';
    this.key = null;
    this.data = null;
    this.firebase = firebase;
  }

  async create(data) {
    this.data = data;
    return await this.firebase.store(this);
  }

  async findByKey(key) {
    this.key = key;

    if (await this.firebase.find(this)) return this.data;

    return false;
  }

  async remove(key) {
    this.key = key;

    await this.firebase.remove(this);

    return;
  }

  async list() {
    return await this.firebase.get(this);
  }
}

module.exports = Model;
