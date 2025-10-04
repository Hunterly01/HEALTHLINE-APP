class Doctor {
  constructor(name, department, contact, isAvailable = true) {
    this._name = name;
    this._department = department;
    this._contact = contact;
    this._isAvailable = isAvailable;
  }

  getName() {
    return this._name;
  }

  getDepartment() {
    return this._department;
  }

  getContactInformation() {
    return this._contact;
  }

  isAvailable() {
    return this._isAvailable;
  }

  setAvailable(isAvailable) {
    this._isAvailable = isAvailable;
    return this._isAvailable;
  }

  toString() {
    return `Name: ${this._name} | Department: ${this._department} | Contact: ${this._contact}`;
  }
}



module.exports = Doctor