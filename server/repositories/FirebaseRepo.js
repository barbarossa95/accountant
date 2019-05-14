const firebase = require('../utilites/firebase');

class FirebaseRepo {
  constructor() {
    this.ref = '';
    this.firebase = firebase;
  }

  async create(data) {
    return await this.firebase.store(this.ref, data);
  }

  async findByKey(key) {
    return await this.firebase.findByKey(this.ref, key);
  }

  async findBy(options) {
    return await this.firebase.findBy(this.ref, options);
  }

  async get() {
    return await this.firebase.get(this.ref);
  }

  async remove(key) {
    return await this.firebase.remove(this.ref, key);
  }
}

module.exports = FirebaseRepo;
