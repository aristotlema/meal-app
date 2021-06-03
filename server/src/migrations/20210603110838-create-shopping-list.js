'use strict';
module.exports = {
	up: async (queryInterface, DataTypes) => {
		await queryInterface.createTable('shopping_list', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			date_start: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			date_end: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			created_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updated_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('shopping_list');
	},
};
