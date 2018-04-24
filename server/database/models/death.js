'use strict';
module.exports = (sequelize, DataTypes) => {
  let Death = sequelize.define('Death', {
    killerPlacement: DataTypes.FLOAT,
    killerPositionX: DataTypes.FLOAT,
    killerPositionY: DataTypes.FLOAT,
    map: DataTypes.STRING,
    matchId: DataTypes.STRING,
    time: DataTypes.TIME,
    victimPlacement: DataTypes.FLOAT,
    victimPositionX: DataTypes.FLOAT,
    victimPositionY: DataTypes.FLOAT
  }, {});

  Death.associate = function (models) {
    Death.hasOne(models.Player, { as: 'killer', foreignKey: 'killerId' });
    Death.hasOne(models.Player, { as: 'victim', foreignKey: 'victimId' });
  };

  return Death;
};