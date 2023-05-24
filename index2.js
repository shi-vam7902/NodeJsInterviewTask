const axios = require("axios");

const getUsers = async () => {
  try {
    const res = await axios.get("https://reqres.in/api/users");
    return res.data.data;
  } catch (err) {
    console.error("Error retrieving users:", err.message);
  }
};

const findUserStartingWithA = async (users) => {
  const u = users.find((user) => user.first_name.toLowerCase().startsWith("a"));
  if (u) {
    return u;
  } else {
    console.log("CANT find the person");
  }
};

const updateName = async () => {
  try {
    const res = await axios.post(`https://reqres.in/api/users/${user.id}`, {
      job: "BoSS",
    });
    console.log("Name updated successfully:", res.data);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

async function deleteUser(user) {
  try {
    await axios.delete(`https://reqres.in/api/users/${user.id}`);
    console.log(`User ${user.id} deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting user ${user.id}:`, error.message);
    throw err;
  }
}

const delAllOtherUsers = async () => {
  const deleteAll = users
    .filter((user) => user.id !== userToKeep.id)
    .map((user) => deleteUser(user));

  try {
    await Promise.all(deleteAll);
    console.log("All other users deleted successfully.");
  } catch (err) {
    console.error("Error deleting other users:", error.message);
    throw err;
  }
};
async function task2() {
  try {
    const allusers = await getUsers();
    const leftuser = await findUserStartingWithA(users);
    await updateName(userToKeep);
    await delAllOtherUsers(allusers, leftuser);
  } catch (err) {
    console.error("An error occurred:", err.message);
  }
}

task2();
