const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// CRUD operations
router.get("/", itemController.getAllItems);
router.post("/", itemController.createItem);
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);
router.get("/:id", itemController.getItem);

module.exports = router;
