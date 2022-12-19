const { Sequelize } = require("sequelize");
const config = require("./config.json");

const sequelize = new Sequelize(
    config["development"].database,
    config["development"].username,
    config["development"].password,
    {
        host: "127.0.0.1",
        dialect: "mysql",
        logging: false,
    }
);

module.exports = sequelize;
