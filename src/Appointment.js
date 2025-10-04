class Appointment {
    constructor(doctorName, patientName, time) {
        this.doctorName = doctorName;
        this.patientName = patientName;
        this.time = new Date(time);
        this.status = "scheduled"; 
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

module.exports = Appointment;
