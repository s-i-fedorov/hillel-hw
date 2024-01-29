class PhoneBook {
  #contacts = [];

  #searchedUsers = [];

  constructor(users) {
    // Validate users
    // add users to contacts
    users.forEach((user) => {
      this.addContact(user);
    });
  }

  addContact(user) {
    // validates user and adding that to this.#contacts
    if (!user.id || !user.phone) return;
    this.#contacts.push(
      new User(user),
    );
  }

  call(contactId) {
    // find contact in this.#contacts and make a call
  }

  removeContact(contactId) {
    // will remove contact from this.#contacts
  }

  search() {
    // will search contact by: name, phone, email
  }

  #setEvents() {
    // Will add event listeners to contact book
  }

  // your methods
  // All event handlers should be a separate private methods
}

const phoneBook = new PhoneBook(users);
console.log(phoneBook);
