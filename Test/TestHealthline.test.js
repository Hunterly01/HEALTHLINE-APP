const Doctor = require ("../src/Doctor.js")
const Patient = require ("../src/Patient.js")
const Appointment = require ("../src/Appointment.js")
describe("Doctor class test", () => {
  test("test to create a doctor with name, department and contact", () => {
    const doctor = new Doctor("Hunter", "neurology", "09031121718");
    expect(doctor.getName()).toBe("Hunter");
    expect(doctor.getDepartment()).toBe("neurology");
    expect(doctor.getContactInformation()).toBe("09031121718");
    expect(doctor.isAvailable()).toBe(true)
  });
  test("should change the status availability", () => {
    const doctor = new Doctor("ayo", "medicine", "09031121718");
    doctor.setAvailable(true);
    expect(doctor.isAvailable()).toBe(true);
  });
});

describe("Patient Class test", () => {
  test("to test to create a name , age, contact and reason", () => {
    const patient = new Patient("balogun", 45, "090234567", "Fever");

    expect(patient.getName()).toBe("balogun");
    expect(patient.getAge()).toBe( 45);
    expect(patient.getContact()).toBe("090234567");
    expect(patient.getReasonForVisit()).toBe("Fever");
  });

  test("should allow multiple unique patients", () => {
    const patient1 = new Patient("Bob marley", 25, "080233284", "backPain");
    const patient2 = new Patient("olaitan", 25, "070478389", "heartbreak");

    expect(patient1.getName()).toBe("Bob marley");
    expect(patient2.getName()).toBe("olaitan");
    expect(patient1.getContact()).not.toBe(patient2.getContact());
  });
});


describe('Appointment Class', () => {
  test('test to create an appointment with correct data', () => {
    const appointment = new Appointment('2025-10-15');
    expect(appointment.getAppointmentDate()).toBe('2025-10-15');
  });

  test('should update appointment date', () => {
  const appointment = new Appointment("2025-10-15");
  appointment.setAppointmentDate("2025-12-01");
  expect(appointment.getAppointmentDate()).toBe("2025-12-01");
});

});