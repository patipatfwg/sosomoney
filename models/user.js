'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  User.init({
    user_name: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_PIN: DataTypes.STRING,
    fund_list_id : DataTypes.INTEGER,
    isActive : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: false
  });

  User.associate = function(models){
    models.User.hasMany(models.FundList, {
      as: 'fund_list',
      foreignKey: 'id',
      sourceKey: 'fund_list_id'
    })
  };

  return User;
};