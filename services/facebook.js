const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(new FacebookStrategy({
  clientID: keys.facebookAppID,
  clientSecret: keys.facebookAppSecret,
  callbackURL: '/auth/facebook/callback'
},
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ facebookId: profile.id })
    if (existingUser) {
      return done(null, existingUser);
    }
    const user = new User({ facebookId: profile.id }).save()
    done(null, user);
  }
)
);
