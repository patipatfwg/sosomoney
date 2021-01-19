'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FundList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  };

  FundList.init({
    fund_title: DataTypes.STRING,
    fund_images: DataTypes.STRING,
    ordinal: DataTypes.INTEGER,
    isActive : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FundList',
    tableName: 'fund_list',
    timestamps: false
  });

  // FundList.associate = function(){
  //   models.FundList.belongsTo(models.User,{
  //     foreignKey: 'id',
  //     sourceKey: 'user_id'
  //   });
  // };

  return FundList;
};