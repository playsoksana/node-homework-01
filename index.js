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
      listContacts().then(contacts=>console.table(contacts)).catch(err=>err.message);
      break;

    case "get":
      getContactById(id).then(contact=>console.log('Result:', ...contact)).catch(err=>err.message);
      break;

    case "add":
      addContact(name, email, phone).then(contact=>console.log("Add contact:", contact)).catch(err=>err.message);
      break;

    case "remove":
      removeContact(id).then(contacts=>console.log("Remaining contacts:", contacts)).catch(err=>err.message);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
