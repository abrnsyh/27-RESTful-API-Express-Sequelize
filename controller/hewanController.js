const hewanModel = require("../models/Hewan.model");

module.exports = {
	getAllHewan: async (req, res) => {
		const hewan = await hewanModel.findAll();
		res.json(hewan);
	},
	getHewanById: async (req, res) => {
		const hewan = await hewanModel.findOne({ where: { id: req.params.id } });
		res.json(hewan);
	},
	addHewan: async (req, res) => {
		const { nama, namaSpesies, umur } = req.body;
		const hewan = await hewanModel.create({ nama: nama, namaSpesies: namaSpesies, umur: umur });
		const hewanRes = await hewanModel.findOne({ where: { nama: nama } });
		res.json(hewanRes);
	},
	updateHewanById: async (req, res) => {
		const { nama, namaSpesies, umur } = req.body;
		const hewan = await hewanModel.update(
			{ nama: nama, namaSpesies: namaSpesies, umur: umur },
			{
				where: { id: req.params.id },
			}
		);
		const hewanRes = await hewanModel.findOne({ where: { id: req.params.id } });
		res.json(hewanRes);
	},
	deleteHewanById: async (req, res) => {
		const hewan = await hewanModel.destroy({ where: { id: req.params.id } });
		res.json({
			message: "Hewan was deleted successfully",
		});
	},
};
