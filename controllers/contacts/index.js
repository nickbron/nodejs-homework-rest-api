const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateById = require("./updateById");
const removeById = require("./removeById");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateById,
  updateStatusContact,
  removeById,
};
