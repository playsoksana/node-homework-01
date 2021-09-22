const { Command } = require("commander");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      (async () => {
        try {
          const contacts = await listContacts();
          if (contacts[0]) {
            console.table(contacts);
            return;
          }
          console.log("No contacts");
        } catch (err) {
          console.log(err.message);
        }
      })();
      break;

    case "get":
      (async () => {
        try {
          const contactById = await getContactById(id);
          if (contactById[0]) {
            console.log("Result:", ...contactById);
            return;
          }
          console.log("No such a contact");
        } catch (err) {
          console.log(err.message);
        }
      })();
      break;

    case "add":
      (async () => {
        try {
          const newContact = await addContact(name, email, phone);
          console.log("Add contact:", newContact);
        } catch (err) {
          console.log(err.message);
        }
      })();
      break;

    case "remove":
      (async () => {
        try {
          const contacts = await removeContact(id);
          if (contacts[0]) {
            console.log("Remaining contacts:", contacts);
            return;
          }
          console.log("No more contacts");
        } catch (err) {
          console.log(err.message);
        }
      })();
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
