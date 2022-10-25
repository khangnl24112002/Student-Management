"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Score extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Score.belongsTo(models.student, {
                foreignKey: "StudentId",
                constraints: false,
            });
            Score.belongsTo(models.course, {
                foreignKey: "CourseId",
                constraints: false,
            });
        }
    }
    Score.init(
        {
            courseId: DataTypes.INTEGER,
            exam15: DataTypes.FLOAT,
            exam45: DataTypes.FLOAT,
            examFinal: DataTypes.FLOAT,
            studentId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Score",
        }
    );
    return Score;
};
