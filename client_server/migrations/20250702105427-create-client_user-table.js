'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('client_users', {
      id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name:{
          type: Sequelize.STRING,
          allowNull: false
      },
      phone:{
          type: Sequelize.INTEGER,
          allowNull: false
      },
      address:{
          type: Sequelize.TEXT,
          allowNull: false
      },
      email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate:{
            isEmail: true
          }
      },
      password:{
          type: Sequelize.STRING,
          allowNull: false
      },
      status:{
          type: Sequelize.INTEGER,
          allowNull: false,
          dafaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('client_users');
  }
};