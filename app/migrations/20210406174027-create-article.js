module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('article', {
        uuid: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
        },
        user_uuid: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'user',
            key: 'uuid',
          },
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        body: {
          type: Sequelize.STRING,
          allowNull: false,
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
      await queryInterface.dropTable('article');
    },
  };
  