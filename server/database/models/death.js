'use strict';
/* 
  Command: npx sequelize model: generate
    --name Death
    --attributes 
      killedBy: string, 
      killerName: string, 
      killerPlacement: float, 
      killerPositionX: float, 
      killerPositionY: float, 
      map: string, 
      matchId: string, 
      time: time, 
      victimName: string, 
      victimPlacement: float, 
      victimPositionX: float, 
      victimPositionY: float
*/
module.exports = (sequelize, DataTypes) => {
  var Death = sequelize.define('Death', {
    // TODO: CREATE PLAYER MODEL AND ASSOCIATE
    killedBy: DataTypes.STRING,
    killerName: DataTypes.STRING,
    killerPlacement: DataTypes.FLOAT,
    // TODO: CREATE POSITION MODEL AND ASSOCIATE TO PLAYER MODEL
    killerPositionX: DataTypes.FLOAT,
    killerPositionY: DataTypes.FLOAT,
    map: DataTypes.STRING,
    matchId: DataTypes.STRING,
    time: DataTypes.TIME,
    // TODO: CREATE PLAYER MODEL AND ASSOCIATE
    victimName: DataTypes.STRING,
    victimPlacement: DataTypes.FLOAT,
    // TODO: CREATE POSITION MODEL AND ASSOCIATE TO PLAYER MODEL
    victimPositionX: DataTypes.FLOAT,
    victimPositionY: DataTypes.FLOAT
  }, {});
  Death.associate = function(models) {
    // associations can be defined here
  };
  return Death;
};