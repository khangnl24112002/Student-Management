"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return Promise.all([
            queryInterface.addColumn(
                "Grades", // table name
                "createdAt", // new field brand
                {
                    allowNull: false,
                    type: Sequelize.DATE,
                }
            ),
            queryInterface.addColumn(
                "Grades", // table name
                "updatedAt", // new field brand
                {
                    allowNull: false,
                    type: Sequelize.DATE,
                }
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return Promise.all(
            [queryInterface.removeColumn("Grades", "createdAt")],
            [queryInterface.removeColumn("Grades", "updatedAt")]
        );
    },
};
