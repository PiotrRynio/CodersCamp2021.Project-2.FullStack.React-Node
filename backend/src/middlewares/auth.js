import jwt from 'jsonwebtoken';
export const authMiddleware = (request, response, next) => {
  const token = request.headers['auth-token'];
  if (!token) {
    return res.status(401).send('Access Denied');
  }
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
    if (err) {
      return res.status(403).send('Invalid token!');
    }
    request.user = data.email;
    next();
  });
};
