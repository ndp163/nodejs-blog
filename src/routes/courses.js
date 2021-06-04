const coursesController = require("../app/controllers/CoursesController");
const express = require("express");
const router = express.Router();

router.get("/", coursesController.index);
router.get("/create", coursesController.create);
router.post("/create", coursesController.createPost);
router.get("/:id/edit", coursesController.edit);
router.put("/:id/edit", coursesController.editPut);
router.delete("/:id", coursesController.delete);
router.get("/:slug", coursesController.detail);

module.exports = router;
