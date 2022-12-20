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
                "minOld", // new field brand
                {
                    allowNull: true,
                    type: Sequelize.INTEGER,
                }
            ),
            queryInterface.addColumn(
                "Grades", // table name
                "maxOld", // new field brand
                {
                    allowNull: true,
                    type: Sequelize.INTEGER,
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
            [queryInterface.removeColumn("Grades", "minOld")],
            [queryInterface.removeColumn("Grades", "maxOld")]
        );
    },
};
