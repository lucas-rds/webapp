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
      },
      killerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      victimId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Deaths');
  }
};