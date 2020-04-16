'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('organizations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
     
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      contact_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      contact_phone: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      pin_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      govt_license_num: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      psnp_registered: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      cratedAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('organizations');
  },
};
