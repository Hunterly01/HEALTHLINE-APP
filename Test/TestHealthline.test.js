const Doctor = require ('../src/Doctor.js')
const Patient = require ("../src/Patient.js")
const Appointment = require ("../src/Appointment.js")
describe("Doctor class test", () => {
  test("test to create a doctor with name, department and contact", () => {
    const doctor = new Doctor("Hunter", "neurology", "09031121718");
    expect(doctor.name).toBe("Hunter");
    expect(doctor.department).toBe("neurology");
    expect(doctor.contact).toBe("09031121718");
  });
  test("should change the status availability", () => {
    const doctor = new Doctor("ayo", "medicine", "09031121718");
    doctor.availability(false);
    expect(doctor.isAvailable).toBe(false);
  });
});

describe("Patient Class test", () => {
  test("to test to create a name , age, contact and reason", () => {
    const patient = new Patient("balogun", 45, "090234567", "Fever");

    expect(patient.name).toBe("balogun");
    expect(patient.age).toBe( 45);
    expect(patient.contact).toBe("090234567");
    expect(patient.reason).toBe("Fever");
  });

  test("should allow multiple unique patients", () => {
    const patient1 = new Patient("Bob marley", 25, "080233284", "backPain");
    const patient2 = new Patient("olaitan", 25, "070478389", "heartbreak");

    expect(patient1.name).toBe("Bob marley");
    expect(patient2.name).toBe("olaitan");
    expect(patient1.contact).not.toBe(patient2.contact);
  });
});


describe('Appointment Class', () => {
  test('test to create an appointment with correct data', () => {
    const appointment = new Appointment("feyi", "somto", "2025-10-04T09:00:00");
    
    expect(appointment.doctorName).toBe("feyi");
    expect(appointment.patientName).toBe("somto");
    expect(appointment.status).toBe('scheduled');
    expect(appointment.time instanceof Date).toBe(true);
  });

  it('should update appointment status', () => {
    const appointment = new Appointment("feyi", "somto", "2025-10-04T09:00:00");
    appointment.updateStatus('seen');
    expect(appointment.status).toBe('seen');
  });
});