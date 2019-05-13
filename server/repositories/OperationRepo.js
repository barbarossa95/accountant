const FirebaseRepo = require('./FirebaseRepo');

class OperationRepo extends FirebaseRepo {
  constructor() {
    super();

    this.ref = '/operation';
  }
}

module.exports = OperationRepo;
