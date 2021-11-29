const { v4 } = require("uuid");
const filePath = require("../../helpers/filePath");
const fs = require("fs/promises");
const listContacts = require("./listContacts");

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContent = { id: v4(), ...data };
  contacts.push(newContent);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return contacts;
};

module.exports = addContact;
