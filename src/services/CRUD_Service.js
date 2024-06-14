
const { name } = require('ejs');
const connection = require('../config/database')

const getAllUsers = async () => {
    const [results , fileds] = await connection.query('select * from User')
    return results;

}

const getUserById = async (userId) => {

    const [results , fileds] = await connection.query('select * from User where id = ?', [userId])
    return results;
}

const updateUserById = async (userId, email, name, city) => {

    let [results, fileds] = await connection.query(
        `UPDATE User SET email = ?, city = ?, name = ? WHERE id = ?  `,
        [email, name, city, userId]
      );
    return results;
}

const createUser = async (email, name, city ) => {
    let [results, fileds] = await connection.query(
        `INSERT INTO User (email, name, city ) VALUES (?, ?, ?) `,
        [email, name, city]
      );
      return results;
}

const deleteUser = async(userId) => {
   let [results, fileds] = await connection.query (
     `DELETE FROM User WHERE id = ?`, [userId]
   )
   return results;
}

module.exports = {

    getAllUsers,
    getUserById,
    updateUserById,
    createUser,
    deleteUser
}