import UserDaoMemory from "./users.model.js";

const Factory = async (type) => {
  switch (type) {
    case "MEM":
      return await UserDaoMemory;
    default:
      return await UserDaoMemory;
  }
};

export default Factory;
