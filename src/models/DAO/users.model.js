const users = [
  { id: 1, name: "Augusto Comte", email: "augustocomte@example.com", age: 25 },
  { id: 2, name: "Bárbara Pérez", email: "barbaraperez@example.com", age: 57 },
  {
    id: 3,
    name: "Carlos Martínez",
    email: "carlosmartinez@example.com",
    age: 18,
  },
  {
    id: 4,
    name: "Daniela Marchese",
    email: "danielamarchese@example.com",
    age: 62,
  },
  {
    id: 5,
    name: "Eduardo González",
    email: "eduardogonzalez@example.com",
    age: 78,
  },
];

let idCounter = users.length + 1;

const getUsers = async () => {
  return users;
};

const createUser = async (user) => {
  user.id = idCounter++;
  users.push(user);
  return user;
};

const updateUsers = async (id, user) => {
  const userId = parseInt(id);
  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return null;
  }
  const updatedUser = { ...users[index], ...user, id: userId };
  users[index] = updatedUser;
  return updatedUser;
};

const getUserById = async (id) => {
  return users.find((u) => u.id === parseInt(id));
};

export default {
  getUsers,
  createUser,
  updateUsers,
  getUserById,
};
