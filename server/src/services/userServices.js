// const { User } = require("../models/index.js");
// const bcrypt = require("bcrypt");
// const createUser = async (data) => {
//     const { username, password } = data;

//     return new Promise(async (resolve, reject) => {
//         try {
//             const salt = bcrypt.genSaltSync(10);
//             const hashPassword = bcrypt.hashSync(password, salt);
//             const newUser = await User.create({
//                 username,
//                 password: hashPassword,
//             });

//             resolve(newUser);
//         } catch (e) {
//             reject({});
//         }
//     });
// };
// const userLogin = async (data) => {
//     const { username, password } = data;
//     return new Promise(async (resolve, reject) => {
//         try {
//             const user = await User.findOne({
//                 where: { username },
//             });
//             if (user) {
//                 const match = await bcrypt.compare(password, user.password);
//                 if (match) {
//                     resolve({
//                         detail: user,
//                         status: true,
//                     });
//                 } else {
//                     resolve({
//                         status: false,
//                     });
//                 }
//             } else {
//                 resolve({ status: false });
//             }
//         } catch (e) {
//             reject({
//                 statusCode: 500,
//                 message: "Something went wrong.",
//             });
//         }
//     });
// };
// const getUsers = async () => {
//     return new Promise(async (resolve, reject) => {
//         const allUser = await User.findAll({
//             attributes: { exclude: ["password"] },
//         });
//         if (allUser) {
//             resolve(allUser);
//         } else {
//             reject([]);
//         }
//     });
// };
// const deleteUserService = async (id) => {
//     return new Promise(async (resolve, reject) => {
//         const user = await User.findOne({
//             where: {
//                 id,
//             },
//         });
//         if (user) {
//             await user.destroy({ force: true });
//             resolve(true);
//         } else {
//             reject(false);
//         }
//     });
// };
// const updateUserService = async (user) => {
//     const { username } = user;
//     return new Promise(async (resolve, reject) => {
//         const user = await User.findOne({
//             where: { id },
//         });
//         if (user) {
//             await user.update({
//                 username,
//             });
//             await user.save();
//             resolve(user);
//         } else {
//             reject(false);
//         }
//     });
// };

// module.exports = {
//     createUser,
//     userLogin,
//     getUsers,
//     deleteUserService,
//     updateUserService,
// };
