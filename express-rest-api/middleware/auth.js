exports.authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  // Dummy token check
  if (token !== 'secret-token') {
    return res.status(403).json({ message: 'Invalid token' });
  }

  next();
};
