const validName = (req, res, next) => {
  try {
    const { name } = req.body; 
    if (!name) throw new Error('"name" is required');
    return next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { validName };