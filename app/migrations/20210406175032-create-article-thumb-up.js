module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('article_thumbs_up', {
        article_uuid: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'article',
            key: 'uuid',
          },
        },
        user_uuid: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'user',
            key: 'uuid',
          },
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        created_by: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
        },
        updated_by: {
          type: Sequelize.UUID,
        },
      }, {
        timestamps: false,
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('article_thumbs_up');
    },
  };
  