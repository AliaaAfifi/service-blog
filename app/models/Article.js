'use strict';

const {
    Model,
  } = require('sequelize');
  // const user = require('./User');
  
  module.exports = (sequelize, DataTypes) => {
    class Article extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    console.log('hi from article');
    Article.init({
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      user_uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'uuid',
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      created_by: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      updated_by: {
        type: DataTypes.UUID,
      },
      
    }, {
      sequelize,
      modelName: 'article',
      freezeTableName: true,
      timestamps: false,
    });
    return Article;
  };
  