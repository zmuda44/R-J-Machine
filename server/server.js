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
  secret: process.env.SESS_SECRET,
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: false,
  },
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI ||'mongodb://localhost:27017/r&j-machine'
  // mongoUrl: 'mongodb://localhost:27017/r&j-machine'
  })
};

app.use(session(sess));

app.use(routes);

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get("*", (req, res) => {
    // For any routes not handled by the server, send the main index.html file
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

app.use(cors({
  origin: 'http://localhost:3000',  // Your frontend's origin
  credentials: true, // Allow credentials if needed
}));

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
