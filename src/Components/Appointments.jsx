import React, { useState, useContext } from 'react';
import { DocData, UserData } from '../App';

const Appointments = () => {
  const { listData } = useContext(UserData);  
  const { detail } = useContext(DocData)
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');


  const saveData = (e) => {
    e.preventDefault();

    if (selectedPatient && selectedDoctor && appointmentDate) {
      // Create a new appointment object
      const newAppointment = {
        id: Date.now(), // Unique ID for each appointment
        patient: selectedPatient,
        doctor: selectedDoctor,
        date: appointmentDate,
      };

      // Add the new appointment to the appointments list
      setAppointments((prev) => [...prev, newAppointment]);

      // Clear selections after saving
      setSelectedPatient('');
      setSelectedDoctor('');
      setAppointmentDate('');
    }
  };
  return (
    <div>
      <form onSubmit={saveData}>
        <label htmlFor="patients">Select Patient:</label>
        <select
          name="patients"
          id="patients"
          value={selectedPatient}
          onChange={(e) => setSelectedPatient(e.target.value)}
          required
        >
          <option value="" disabled>
            -- Select a patient --
          </option>
          {listData.map((i, index) => (
            <option key={index} value={i.name}>
              {i.name}
            </option>
          ))}
        </select>
        <br></br>
        <label htmlFor="doctors">Select Doctor:</label>
        <select
          name="doctors"
          id="doctors"
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          required
        >
          <option value="" disabled>
            -- Select a Doctor --
          </option>
          {detail.map((i, index) => (
            <option key={index} value={i.name}>
              {i.name}
            </option>
          ))}
        </select>
        <br></br>

        <label htmlFor="appointmentDate">Appointment Date:</label>
        <input
          type="datetime-local"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Book Appointment" />
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>Appointments:</h3>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              Patient: {appointment.patient}, Doctor: {appointment.doctor}, Date: {appointment.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
