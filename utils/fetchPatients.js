// utils/patientUtils.js

export async function fetchPatients() {
  const username = "coalition";
  const password = "skills-test";
  const auth = btoa(`${username}:${password}`);

  const response = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch patients");
  }

  return response.json();
}

export const getPatientByName = async (patientName) => {
  const patients = await fetchPatients();
  return patients.find((patient) => patient.name === patientName);
};
