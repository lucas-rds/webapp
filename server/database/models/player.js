'use strict';
module.exports = (sequelize, DataTypes) => {
  let Player = sequelize.define('Player', {
    name: DataTypes.STRING
  });

  Player.associate = function(models) {
    // associations can be defined here
  };

  return Player;
};