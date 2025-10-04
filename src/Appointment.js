class Appointment {
  constructor(appointmentDate) {
    this._appointmentDate = appointmentDate;
  }

  getAppointmentDate() {
    return this._appointmentDate;
  }

  setAppointmentDate(newDate) {
    this._appointmentDate = newDate;
  }

  toString() {
    return `Appointment Date ${this._appointmentDate}`;
  }
}

module.exports = Appointment;

