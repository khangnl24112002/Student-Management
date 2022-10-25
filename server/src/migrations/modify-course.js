"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface
            .createTable("Courses", {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                gradeId: {
                    type: Sequelize.INTEGER,
                    references: { model: "grades", key: "id" },
                },
                name: {
                    type: Sequelize.STRING,
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
            })
            .then(() =>
                queryInterface.addConstraint("Courses", {
                    fields: ["gradeId"],
                    type: "foreign key",
                    name: "id_fkey3",
                    references: {
                        table: "grades",
                        field: "id",
                    },
                })
            );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Courses");
    },
};
