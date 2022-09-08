const express = require("express");
const router = express.Router();

const hewanRouter = require("./hewanRouter");

router.get("/", (req, res) => {
	res.json({
		message: "Hewan App",
	});
});

router.use("/hewan", hewanRouter);

module.exports = router;
