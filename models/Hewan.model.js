const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnection");

const HewanModel = sequelize.define(
	"hewan",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		nama: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		namaSpesies: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		umur: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		timestamps: true,
		createdAt: true,
		updatedAt: true,
	}
);

module.exports = HewanModel;
