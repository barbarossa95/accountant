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
  database = app.database();

const store = async model => {
  const { ref } = model,
    newModelRef = database.ref(ref).push();

  try {
    await newModelRef.set(model.data);

    model.key = newModelRef.key;

    return model;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

const find = async model => {
  const { ref, key } = model,
    snapshot = await database.ref(`${ref}/${key}`).once('value'),
    data = snapshot.val();

  if (!data) return false;

  model.data = data;

  return true;
};

const get = async model => {
  const { ref } = model,
    snapshot = await database.ref(ref).once('value'),
    data = snapshot.val();

  if (!data) return [];

  return Object.entries(data).map(([key, item]) => {
    return { ...item, key };
  });
};

const remove = async model => {
  const { ref, key } = model;

  await database.ref(`${ref}/${key}`).set(null);

  return true;
};

module.exports = {
  store,
  find,
  get,
  remove,
};
