const express = require("express");
const router = express.Router();

const {
	getAllHewan,
	getHewanById,
	addHewan,
	updateHewanById,
	deleteHewanById,
} = require("../controller/hewanController");

router.get("/", getAllHewan);
router.get("/:id", getHewanById);
router.post("/", addHewan);
router.put("/:id", updateHewanById);
router.delete("/:id", deleteHewanById);
module.exports = router;
