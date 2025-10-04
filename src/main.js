const prompt = require("prompt-sync")();
const Doctor = require ("../src/Doctor.js")
const Patient = require ("../src/Patient.js")
const Appointment = require ("../src/Appointment.js")

let doctors = [];
let patients = [];
let patientQueue = [];
let appointmentQueue = [];

function addDoctor() {
  let name = prompt("Enter doctor name: ");
  let department = prompt("Enter doctor department: ");
  let contact = prompt("Enter doctor contact: ");
  let doctor = new Doctor(name, department, contact);
  doctors.push(doctor);
  console.log("Doctor added");
}

function viewDoctors(){
    if(doctors.length == 0){
        console.log("No doctors registered")
        return;
    }


    for(let count = 0; count < doctors.length; count++){
        console.log(`${count + 1}. ${doctors[count].toString()}`);
    }
}

function addPatient() {
    let name = prompt("Enter patient name: ");
    let age = prompt("Enter patient age: ");
    let contact = prompt("Enter patient contact: ");
    let reason = prompt("Enter reason for visit: ");
    const patient = new Patient(name, age, contact, reason);
    patients.push(patient);
    patientQueue.push(patient);
    console.log("Patient registered and added to queue.");
}

function viewPatients(){
    if(patients.length == 0){
        console.log("No Patient is registerd")
        return;
    }
    for(let count = 0; count < patients.length; count++){
        console.log(`${count + 1}. ${patients[count].toString()}`);

    }
}

function viewPatientsQueue(){
    if(patientQueue.length == 0){
        console.log("No Patient is on the queue")
        return;
    }


    for(let count = 0; count < patientQueue.length; count++){
        console.log(`${count + 1}. ${patientQueue[count].toString()}`);
    }
}
function createAppointment() {
    if (patientQueue.length == 0) 
        return console.log("No patients in queue.");
        let date = prompt("Enter appointment date (YYYY-MM-DD): ");
        let patient = patientQueue.shift();
        let appointment = new Appointment(date);
        appointmentQueue.push({ patient, appointment });
        console.log(`Appointment created for ${patient.getName()} on ${date}`);
}

function main() {
    let hunterly = true;

    while (hunterly) {
        console.log("\n Welcome to HealthLine App");
        console.log("1. Register Doctor");
        console.log("2. View Doctors");
        console.log("3. Register Patient");
        console.log("4. View Patients");
        console.log("5. View Patient Queue");
        console.log("6. Create Appointment");
        console.log("0. Exit");

        let choice = parseInt(prompt("Enter your choice: ")); 

        switch (choice) {
            case 1:
                addDoctor(); break;
            case 2:
                viewDoctors(); break;
            case 3:
                addPatient(); break;
            case 4:
                viewPatients(); break;
            case 5:
                viewPatientsQueue(); break;
            case 6:
                createAppointment(); break;
            case 0:
                console.log("Exiting...");
                hunterly = false;
                break;
            default:
                console.log("Invalid choice. Try again.");
        }
    }
}

main();




