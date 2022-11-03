"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn("classes", "gradeId", {
                type: Sequelize.Integer,
                references: {
                    model: "grades",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
                defaultValue: null,
                after: "can_maintain_system",
            }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.removeColumn("users", "region_id")]);
    },
};
