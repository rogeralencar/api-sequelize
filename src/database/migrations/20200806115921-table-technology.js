'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('studies', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nameStudy: { 
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      descStudy: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('studies');
    
  }
};
