import jwt from 'jsonwebtoken';
export const authorization = (request, response, next) => {
  const token = request.cookies.auth_token;

  if (!token) {
    return response.status(401).send('Access Denied');
  }
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
    if (err) {
      return res.status(403).send('Invalid token!');
    }
  });
  next();
};
