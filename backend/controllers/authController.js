const mockUsers = require("../data/mockUsers");

function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = mockUsers.find((item) => item.email === email?.trim());

    // Check email and password
    if (!user || user.password !== password) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    // Return safe user details, not the password
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { loginUser };
