const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

const app = firebase.initializeApp(config),
  db = app.database();

module.exports.store = async (ref, data) => {
  const newModelRef = db.ref(ref).push();

  try {
    await newModelRef.set(data);

    data.key = newModelRef.key;

    return data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

module.exports.findByKey = async (refPath, key) => {
  const ref = db.ref(refPath).child(key),
    snapshot = await ref.once('value'),
    data = snapshot.val();

  if (!data) throw new Error('Error while Firebase request');

  return data;
};

module.exports.findBy = async (refPath, options) => {
  return await this.get(refPath, options);
};

module.exports.get = async (refPath, options = null) => {
  let ref = db.ref(refPath);

  if (options) {
    const { prop, type = 'equalTo', val } = options;
    ref = ref.orderByChild(prop)[type](val);
  }

  const data = await ref.once('value'),
    val = data.val();

  if (!val) return [];

  return Object.entries(val).map(([key, item]) => {
    return { ...item, key };
  });
};

module.exports.remove = async (refPath, key) => {
  await db
    .ref(refPath)
    .child(key)
    .set(null);

  return key;
};
