import Factory from "../models/DAO/dao.factory.js";

const dao = await Factory("MEM");

const getUsers = async () => {
  const users = await dao.getUsers();
  return users;
};

const createUser = async (userData) => {
  const users = await dao.getUsers();
  const emailExists = users.some((u) => u.email === userData.email);

  if (emailExists) {
    throw new Error("Email already in use");
  }

  return await dao.createUser(userData);
};

const updateUser = async (id, userData) => {
  const user = await dao.getUserById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return await dao.updateUsers(id, userData);
};

const getUsersByAge = async (range) => {
  const users = await dao.getUsers();
  let filteredUsers = [];

  switch (range) {
    case "young":
      filteredUsers = users.filter((u) => u.age >= 0 && u.age <= 24);
      break;
    case "adult":
      filteredUsers = users.filter((u) => u.age > 24 && u.age <= 60);
      break;
    case "senior":
      filteredUsers = users.filter((u) => u.age > 60);
      break;
    default:
      throw new Error("Age range not valid");
  }

  return {
    total: filteredUsers.length,
    data: filteredUsers,
  };
};

export default {
  getUsers,
  createUser,
  updateUser,
  getUsersByAge,
};
