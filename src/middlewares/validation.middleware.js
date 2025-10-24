export const validateUserData = (req, res, next) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({
      error: "Some fields are incomplete. Name, email and age are required.",
    });
  }

  if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).json({
      error: "Fields name or email must be text type",
    });
  }

  if (typeof age !== "number" || age <= 0) {
    return res.status(400).json({
      error: "Age must be a number greater than 0",
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      error: "Invalid email format",
    });
  }
  next();
};
