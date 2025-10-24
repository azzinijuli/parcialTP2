import UserService from "../services/users.service.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await UserService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await UserService.updateUser(id, userData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getUsersByAge = async (req, res) => {
  try {
    const { range } = req.params;
    const result = await UserService.getUsersByAge(range);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  getUsers,
  createUser,
  updateUser,
  getUsersByAge,
};
