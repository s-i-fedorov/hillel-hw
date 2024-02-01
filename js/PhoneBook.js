class PhoneBook {
  #contacts = [];

  #searchedUsers = [];

  #usersListSelector = null;

  #removeSelector = null;

  #callSelector = null;

  constructor(users, userListSelector) {
    // Validate users
    // add users to contacts
    if (!PhoneBook.validateSelector(userListSelector)) throw new Error('This selector is not exist');
    this.#usersListSelector = document.querySelector(userListSelector);
    users.forEach((user) => {
      this.addContact(user);
    });
  }

  addContact(user) {
    // validates user and adding that to this.#contacts
    // if (!user.id || !user.phone) return;
    if (!PhoneBook.validateContact(user)) return null;
    this.#contacts.push(
      new User(user),
    );
    this.renderContact(this.#contacts.at(-1));
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
  renderContact(user) {
    const isUserInContacts = this.#contacts.some((i) => user.id === i.id);
    if (!isUserInContacts) return null;
    const template = this.#createTemplate(user);
    this.#usersListSelector.appendChild(template);
  }

  #createTemplate({ id, name }) {
    const template = document.createElement('li');
    template.className = 'list-group-item d-flex justify-content-between align-items-center';
    template.setAttribute('data-user-id', id);
    template.innerHTML = `<span class="contacts__contact">${name}</span>
                          <div>
                              <button data-call type="button" class="btn btn-success">
                                  <i class="bi bi-telephone"></i>
                              </button>

                              <button data-remove type="button" class="btn btn-danger">
                                  <i class="bi bi-trash"></i>
                              </button>
                          </div>`;
    return template;
  }

  static validateContact(user) {
    return !!user.id;
  }

  static validateSelector(selector) {
    return !!document.querySelector(selector);
  }
}

const phoneBook = new PhoneBook(users, '.contacts__list ul');
console.log(phoneBook);
