'use strict';

const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    plan: DataTypes.STRING,
    planId: DataTypes.STRING,
    date: DataTypes.STRING,
    endDate: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
    Subscription.belongsTo(models.User,{
      foreignKey:'userId'
    })
  };
  return Subscription;
};