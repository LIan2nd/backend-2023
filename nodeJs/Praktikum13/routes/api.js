// Import Student Controller
const StudentController = require("../controllers/StudentController");

// Express
const express = require("express");
const router = express.Router();

// Home Router
router.get("/", (req, res) => {
  res.send("Hello, LIand");
});

// Students Router
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.get("/students/:id", StudentController.show);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// Export router
module.exports = router;