class PhoneBook {
  #contacts = [];

  #searchedUsers = [];

  #contactsList = null;

  #contactsListUl = null;

  #removeAttr = null;

  #callAttr = null;

  #modal = null;

  #modalHist = null;

  #callControllerInstance = null;

  constructor(
    users,
    removeSelector = null,
    callSelector = null,
    modalSelector = null,
    modalSelectorHist = null,
  ) {
    if (!PhoneBook.validateSelector(modalSelector)) throw new Error('modalSelector selector is not exist');
    this.#modal = new bootstrap.Modal(modalSelector);
    if (!PhoneBook.validateSelector(modalSelector)) throw new Error('modalSelector selector is not exist');
    this.#modalHist = new bootstrap.Modal(modalSelectorHist);

    this.#contactsList = document.querySelector('[data-contacts-list]');
    this.#contactsListUl = document.querySelector('.contacts__list ul');

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
    if (!PhoneBook.validateContact(user)) return null;
    this.#contacts.push(
      new User(user),
    );
    this.renderContact(this.#contacts.at(-1));
  }

  search() {
    // will search contact by: name, phone, email
  }

  #setEvents() {
    // Will add event listeners to contact book
    Call.addChangeStatusListener(this.#changeCallStatusHandler);
    Call.addDurationListener(this.#changeDurationHandler);

    document.querySelector('[data-end-call]').addEventListener('click', this.#endCallHandler);
    this.#contactsList.addEventListener('click', this.#removeHandler);
    this.#contactsList.addEventListener('click', this.#callHandler);
    document.querySelector('#button-show-hist').addEventListener('click', this.#histHandler);
    document.querySelector('#contacts-search').addEventListener('keyup', this.#renderHandler);
  }

  #renderHandler = () => {
    if (this.#searchHandler()) {
      this.#rebootUl();
      this.#searchedUsers
        .forEach((i) => this.renderContact(i));
    } else {
      this.#rebootUl();
      this.#contacts.forEach((i) => this.renderContact(i));
    }
  };

  #rebootUl() {
    // const contactsList = document.querySelector('[data-contacts-list]');
    this.#contactsList.firstElementChild.remove();
    const ul = document.createElement('ul');
    ul.className = 'list-group';
    this.#contactsList.appendChild(ul);
    this.#contactsListUl = ul;
  }

  #searchHandler = () => {
    const textInput = document.querySelector('#contacts-search');
    const searchedValue = textInput.value.toLowerCase();
    if (!searchedValue) {
      return false;
    }
    const searchedResult = this.#contacts.filter(
      (i) => i.name.toLowerCase().includes(searchedValue),
    );
    this.#searchedUsers = searchedResult;
    return searchedResult;
  };

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

  #changeDurationHandler = (duration) => {
    document.querySelector('[data-call-duration]').innerHTML = `00:0${duration}`;
  };
  // your methods
  // All event handlers should be a separate private methods

  #histHandler = () => {
    if (this.#callControllerInstance.callHistory.length === 0) return;
    const histContacts = document.querySelector('[data-hist-contacts]');
    const histUlExist = document.querySelector('[data-hist-ul]');
    if (histUlExist) histUlExist.remove();
    const histUl = document.createElement('ul');
    histUl.setAttribute('data-hist-ul', '');
    histUl.className = 'list-group';
    histContacts.appendChild(histUl);

    this.#callControllerInstance.callHistory
      .forEach((i) => this.#renderHistItem(i));
    this.#modalHist.show();
    const modalHist = document.querySelector('#staticBackdropHist');
    modalHist.addEventListener('click', this.#histClickedHandler);
  };

  #histClickedHandler = (e) => {
    const { target } = e;
    const callBtn = target.closest('[data-call]');
    if (callBtn) {
      this.#modalHist.hide();
      this.#callHandler(e);
    }
  };

  #renderHistItem({
    phone, abName, abId, endDate,
  }) {
    const histList = document.querySelector('[data-hist-ul]');
    const template = document.createElement('li');
    template.className = 'list-group-item d-flex justify-content-between align-items-center';
    template.setAttribute('data-user-id', abId);
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
    this.#contactsListUl.appendChild(template);
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
  'data-remove',
  'data-call',
  '#staticBackdrop',
  '#staticBackdropHist',
);
console.log(phoneBook);
