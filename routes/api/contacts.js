const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const { contactSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(contactSchema);

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));
router.get("/:id", ctrlWrapper(ctrl.getContactById));
router.post("/", validateMiddleware, ctrlWrapper(ctrl.addContact));
router.put("/:id", validateMiddleware, ctrlWrapper(ctrl.updateById));
router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;
