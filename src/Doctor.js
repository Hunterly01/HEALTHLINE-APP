class Doctor{
    constructor(name, department, contact) {
        this.name = name;
        this.department = department;
        this.contact = contact;
        this.isAvailable = true;
  }

  availability(status) {
        this.isAvailable = status;
  }
}

module.exports = Doctor