"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface
            .createTable("Classes", {
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
                queryInterface.addConstraint("classes", {
                    fields: ["gradeId"],
                    type: "foreign key",
                    name: "cart_user_id_fkey",
                    references: {
                        table: "grades",
                        field: "id",
                    },
                })
            );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Classes");
    },
};
