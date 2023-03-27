const connection = require("../config/database");

const getAllUsers = async() =>{
    let [results, fileds] = await connection.query('select * from Users');
    return results;
};

const getUserByID = async(userID) =>{
    let [results, fields] = await connection.query("select * from Users where id = ?", [userID])
    let user = results && results.length > 0 ? results [0] : {};
    return user;
};

const updateUserById = async(email, name, city, userID) =>{

    let [results, fields]  = await connection.query(
        `UPDATE Users  
        SET email = ?, name = ?, city = ?   
        WHERE id = ?`, [email, name, city, userID]
        );

    return results;
};

const deleteUserById = async(userID) =>{
    let [results, fields]  = await connection.query(
        `DELETE FROM Users WHERE id = ?;`, [userID]
        );

    return results;
};

module.exports = {
    getAllUsers,getUserByID,
    updateUserById, deleteUserById,
};