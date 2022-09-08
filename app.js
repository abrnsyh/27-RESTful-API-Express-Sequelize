const express = require("express");
const app = express();
const sequelize = require("./config/dbConnection");
const Hewan = require("./models/Hewan.model");
const rootRouter = require("./router/index");

const PORT = process.env.PORT || 3000;

async function testConnection() {
	sequelize
		.authenticate()
		.then(() => {
			console.log("Connection has been established successfully.");
		})
		.then(() => {
			Hewan.sync().then(() => console.log("table Hewan created"));
		})
		.catch((err) => {
			console.log("unable to connect to the database.", err);
		});
}

testConnection();

app.use(express.json());
app.use(rootRouter);

app.listen(PORT, () => {
	console.log("Server is running");
});
