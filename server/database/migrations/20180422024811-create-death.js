'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Deaths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      killedBy: {
        type: Sequelize.STRING
      },
      killerName: {
        type: Sequelize.STRING
      },
      killerPlacement: {
        type: Sequelize.FLOAT
      },
      killerPositionX: {
        type: Sequelize.FLOAT
      },
      killerPositionY: {
        type: Sequelize.FLOAT
      },
      map: {
        type: Sequelize.STRING
      },
      matchId: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.TIME
      },
      victimName: {
        type: Sequelize.STRING
      },
      victimPlacement: {
        type: Sequelize.FLOAT
      },
      victimPositionX: {
        type: Sequelize.FLOAT
      },
      victimPositionY: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Deaths');
  }
};