'use strict';

const {
    Model,
  } = require('sequelize');
//   const user = require('./User');
//   const article = require('./Article');
  
  module.exports = (sequelize, DataTypes) => {
    class ArticleThumbsUp extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    ArticleThumbsUp.init({
      article_uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'article',
            key: 'uuid',
        },
      },
      user_uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'uuid',
        },
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
      modelName: 'article_thumbs_up',
      freezeTableName: true,
      timestamps: false,
    });
    return ArticleThumbsUp;
  };
  