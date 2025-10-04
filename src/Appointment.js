class Appointment {
    constructor(doctorName, patientName, time) {
        this.doctorName = doctorName;
        this.patientName = patientName;
        this.time = new Date(time);
        this.status = "scheduled"; 
  }

  updateStatus(newStatus) {
    const validStatuses = ["scheduled", "seen", "no-show", "rescheduled"];
    if(validStatuses.includes(newStatus)){
    this.status = newStatus;
    } else {
      throw new Error("invalid staus");
      
    }

  }
}

module.exports = Appointment;
