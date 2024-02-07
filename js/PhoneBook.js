class PhoneBook {
  #contacts = [];

  #searchedUsers = [];

  #usersListSelector = null;

  #removeAttr = null;

  #callAttr = null;

  #modal = null;

  #modalHist = null;

  #callControllerInstance = null;

  constructor(
    users,
    userListSelector,
    removeSelector = null,
    callSelector = null,
    modalSelector = null,
    modalSelectorHist = null,
  ) {
    // Validate users
    // add users to contacts
    if (!PhoneBook.validateSelector(modalSelector)) throw new Error('modalSelector selector is not exist');
    this.#modal = new bootstrap.Modal(modalSelector);
    if (!PhoneBook.validateSelector(modalSelector)) throw new Error('modalSelector selector is not exist');
    this.#modalHist = new bootstrap.Modal(modalSelectorHist);

    if (!PhoneBook.validateSelector(userListSelector)) throw new Error('userListSelector selector is not exist');
    this.#usersListSelector = document.querySelector(userListSelector);
    if (!removeSelector) throw new Error('removeSelector is not defined');
    this.#removeAttr = removeSelector;
    if (!callSelector) throw new Error('callSelector is not defined');
    this.#callAttr = callSelector;
    this.#callControllerInstance = new CallController();

    users.forEach((user) => {
      this.addContact(user);
    });

    this.#setEvents();
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

  // call(contactId) {
  //   // find contact in this.#contacts and make a call
  // }

  removeContact(contactId) {
    // will remove contact from this.#contacts
  }

  search() {
    // will search contact by: name, phone, email
  }

  #setEvents() {
    // Will add event listeners to contact book
    Call.addChangeStatusListener(this.#changeCallStatusHandler);
    document.querySelector('[data-end-call]').addEventListener('click', this.#endCallHandler);
    this.#usersListSelector.addEventListener('click', this.#removeHandler);
    this.#usersListSelector.addEventListener('click', this.#callHandler);
    document.querySelector('#button-addon2').addEventListener('click', this.#showHistory);
    document.querySelector('#contacts-search').addEventListener('keyup', this.#searchHandler);
  }

  #removeHandler = ({ target }) => {
    const currentClickedBtn = target.closest(`[${this.#removeAttr}]`);
    if (!currentClickedBtn) return;
    const contactTemplate = currentClickedBtn.closest('[data-user-id]');
    const contactId = +contactTemplate.getAttribute('data-user-id');
    const index = this.#contacts.findIndex((i) => i.id === contactId);
    this.#contacts.splice(index, 1);
    contactTemplate.remove();
  };

  #endCallHandler = () => {
    this.#callControllerInstance.endCallByCaller();
  };

  #callHandler = ({ target }) => {
    const currentClickedBtn = target.closest(`[${this.#callAttr}]`);
    if (!currentClickedBtn) return;
    const contactTemplate = currentClickedBtn.closest('[data-user-id]');
    const contactId = +contactTemplate.getAttribute('data-user-id');
    const index = this.#contacts.findIndex((i) => i.id === contactId);
    const currentContact = this.#contacts[index];
    document.querySelector('[data-abonent-name]').innerHTML = currentContact.name;
    // console.log(this.#callControllerInstance.callHistory);

    this.#callControllerInstance.startCall(
      this.#contacts[index].phone,
      this.#contacts[index].name,
      this.#contacts[index].id,
    );
    this.#modal.show();
  };

  #changeCallStatusHandler = (callStatus) => {
    document.querySelector('[data-call-body]').innerHTML = callStatus;
    if (callStatus === Call.CALL_STATUSES.disconnect || callStatus === Call.CALL_STATUSES.rejected) {
      this.#modal.hide();
    }
  };

  // your methods
  // All event handlers should be a separate private methods
  #searchHandler() {
    const textInput = document.querySelector('#contacts-search');
    const searchedValue = textInput.value;
    // const searchedResult = this.#contacts.forEach((i) => i.includes(searchedValue));
    // console.log(searchedResult);
  }

  #showHistory = () => {
    const histList = document.querySelector('[data-hist-ul]');
    this.#callControllerInstance.callHistory
      .forEach((i) => this.#renderHistItem(i));
    this.#modalHist.show();
    console.log(this.#modalHist);
    histList.addEventListener('click', this.#histClickedHandler);
    // console.log(this.#callControllerInstance.callHistory);
  };

  #histClickedHandler = ({ target }) => {
    console.log(target);
    if (target.hasAttribute('data-close-btn')) {

    }
  };

  #renderHistItem({
    phone, abName, id, endDate,
  }) {
    const histList = document.querySelector('[data-hist-ul]');
    const template = document.createElement('li');
    template.className = 'list-group-item d-flex justify-content-between align-items-center';
    template.setAttribute('data-user-id', id);
    template.innerHTML = `<div>
                            <span class="contacts__contact">${abName} tel:${phone}</span>
                            <div>date:${endDate}</div>
                          </div>
                          <div>
                              <button data-call type="button" class="btn btn-success">
                                  <i class="bi bi-telephone"></i>
                              </button>
                          </div>`;
    histList.appendChild(template);
  }

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

const phoneBook = new PhoneBook(
  users,
  '.contacts__list ul',
  'data-remove',
  'data-call',
  '#staticBackdrop',
  '#staticBackdropHist',
);
console.log(phoneBook);
