const StudentController = require("../Controllers/StudentController");
const express = require("express");
const router = express.router();

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students", StudentController.update);
router.delete("/students", StudentController.destroy);

module.exports = router;