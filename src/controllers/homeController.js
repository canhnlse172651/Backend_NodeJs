const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  createUser,
  deleteUser,
} = require("../services/CRUD_Service");

const getHomePage = async (req, res) => {
  const results = await getAllUsers();

  return res.render("home.ejs", { listUser: results });
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const postCreactUser = async (req, res) => {
  let { email, name, city } = req.body;

  let results = createUser(email, name, city);

  if (results.affectedRows != 0) {
    res.redirect("/");
  }
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  const results = await getUserById(userId);

  // results return an array object user => how can get a first user from it ?

  let user = results && results.length > 0 ? results[0] : {}; // get a first user from array

  return res.render("edit.ejs", { user: user });
};

const postUpdatetUser = async (req, res) => {
  let { userId, email, name, city } = req.body;

  let results = await updateUserById(userId, email, name, city);

  if (results.affectedRows != 0) {
    res.redirect("/");
  }
};

const getDeleteUser = async (req, res) => {
  const userId = req.params.id;
  console.log("uerId", userId);

  let results = await deleteUser(userId);

  if (results.affectedRows != 0) {
    res.redirect("/");
  }
};

module.exports = {
  getHomePage,
  postCreactUser,
  getCreatePage,
  getUpdatePage,
  postUpdatetUser,
  getDeleteUser,
};
