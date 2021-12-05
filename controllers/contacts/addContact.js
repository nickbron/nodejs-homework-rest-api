const { Contact } = require("../../models");
const { Conflict } = require("http-errors");

const addContact = async (req, res) => {
  const { name } = req.body;
  const user = await Contact.findOne({ name });
  console.log(user);
  if (user) {
    throw new Conflict(`User with ${name} already exist`);
  }

  const { _id } = req.user;
  const result = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addContact;
