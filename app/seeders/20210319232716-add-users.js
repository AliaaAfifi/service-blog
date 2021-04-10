module.exports = {
    up: async (queryInterface, sequelize) => {
      await queryInterface.bulkInsert('user', [{
        uuid: '0b8125e0-cdf1-4042-9a63-131383ddd58b',
        username: 'aliaa.afifi',
        password: 'f30aa7a662c728b7407c54ae6bfd27d1',
        name: 'Aliaa Afifi',
        job_title: 'Software Developer',
        created_by: '0b8125e0-cdf1-4042-9a63-131383ddd58b',
        created_at: sequelize.literal('CURRENT_TIMESTAMP'),
      }, {
        uuid: '0b8125e0-cdf1-4042-9a63-131383ddd58c',
        username: 'ahmed.gaber',
        password: 'f30aa7a662c728b7407c54ae6bfd27d1',
        name: 'Ahmed Gaber',
        job_title: 'Software Developer',
        created_by: '0b8125e0-cdf1-4042-9a63-131383ddd58b',
        created_at: sequelize.literal('CURRENT_TIMESTAMP'),
      }], {});
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('user', [{
        uuid: '0b8125e0-cdf1-4042-9a63-131383ddd58b',
      }], {});
    },
  };
  