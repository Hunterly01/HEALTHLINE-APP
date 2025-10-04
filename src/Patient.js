class Patient {
  constructor(name, age, contact, reasonForVisit) {
    this._name = name;
    this._age = age;
    this._contact = contact;
    this._reasonForVisit = reasonForVisit;
  }

  getName() {
    return this._name;
  }

  getAge() {
    return this._age;
  }

  getContact() {
    return this._contact;
  }

  getReasonForVisit() {
    return this._reasonForVisit;
  }

  toString() {
    return `${this._name}, Age: ${this._age}, Contact: ${this._contact}, Reason: ${this._reasonForVisit}`;
  }
}

module.exports = Patient;
