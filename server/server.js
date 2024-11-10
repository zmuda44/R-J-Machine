const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('dotenv').config()
// Added secret variable for sess object
const sess = {
  // secret: process.env.SESS_SECRET,
  secret: 'fad@#DF332g32erwer',
  cookie: {
    maxAge: 60 * 60 * 1_000,
    httpOnly: true,
    secure: false,
    sameSite: false,
  },
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/r&j-machine'
  })
};

app.use(session(sess));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.use(cors({
  origin: 'http://localhost:3000',  // Your frontend's origin
  credentials: true, // Allow credentials if needed
}));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
