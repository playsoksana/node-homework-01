const path = require("path");
const fs = require("fs/promises");
const { uuid } = require("uuidv4");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const listContacts = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    return listContacts;
  } catch (error) {
    throw new Error(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.filter(({ id }) => {
      return id.toString() === contactId;
    });
    if (!contact) {
      return null;
    }
    return contact;
  } catch (error) {
    throw new Error(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const updateContacts = contacts.filter(
      ({ id }) => id.toString() !== contactId
    );
    fs.writeFile(contactsPath, JSON.stringify(updateContacts));
    return updateContacts;
  } catch (error) {
    throw new Error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { name: name, email: email, phone: phone, id: uuid() };
    const updateContacts = [...contacts, newContact];
    fs.writeFile(contactsPath, JSON.stringify(updateContacts));
    return updateContacts;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
