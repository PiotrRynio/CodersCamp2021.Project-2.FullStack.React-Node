import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split('')[1];
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCES_TOKEN, (err, data) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.UserLogIn = data;
    next();
  });
};
