const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    // Ensure req.user is defined and has an id property
    if (!req.user || !req.user.id) {
      return res.status(400).json({ error: 'User not authenticated' });
    }

    // Find the user by ID and exclude the password field
    const user = await User.findById(req.user.id).select('-password');

    // If user is not found, respond with a 404 error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Respond with the user data
    res.status(200).json(user);
  } catch (error) {
    // Handle any unexpected errors
    res.status(500).json({ error: error.message });
  }
};
