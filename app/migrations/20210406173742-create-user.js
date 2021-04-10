module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('user', {
        uuid: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        job_title: {
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
      await queryInterface.dropTable('user');
    },
};
  