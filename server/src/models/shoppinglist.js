'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ShoppingList extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	ShoppingList.init(
		{
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
		},
		{
			sequelize,
			modelName: 'ShoppingList',
			tableName: 'shopping_list',
		}
	);
	return ShoppingList;
};
