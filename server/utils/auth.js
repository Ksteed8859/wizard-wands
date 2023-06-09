const jwt = require('jsonwebtoken');

// set token secret and expiration date
// the secret needs to be moved into the .env file

const secret = `${process.env.SECRET}`;
const expiration = '2h';

module.exports = {
  authMiddleware: function ({req}) {
    let token = req.body.token || req.headers.authorization || req.query.token;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ username, _id }) {
    const payload = { username, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
