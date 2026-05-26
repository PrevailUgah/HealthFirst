// 1. SELECT HTML ELEMENTS
const patientForm = document.getElementById('patient-form');
const patientNameInput = document.getElementById('patient-name');
const treatmentInput = document.getElementById('treatment');
const stockCountDisplay = document.getElementById('stock-count');
const stockAlert = document.getElementById('stock-alert');
const patientListDisplay = document.getElementById('patient-list');
// 2. INITIALIZE STATE (Load existing data from LocalStorage, or set default values)
let currentStock = localStorage.getItem('medicineStock') ? parseInt(localStorage.getItem('medicineStock')) : 50;
let patientRecords = localStorage.getItem('patients') ? JSON.parse(localStorage.getItem('patients')) : [];
// 3. FUNCTION TO UPDATE THE SCREEN (UI)
function updateDashboard() {
    // Update the stock number on screen
    stockCountDisplay.innerText = currentStock;
    // Show alert if stock drops below a safe threshold (e.g., 10 doses)
    if (currentStock <= 10) {
        stockAlert.classList.remove('hidden');
    } else {
        stockAlert.classList.add('hidden');
    }
    // Clear and re-render the patient list history
    patientListDisplay.innerHTML = '';
    patientRecords.forEach(patient => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${patient.name}</strong> - Administered: ${patient.treatment} <small style="color:gray;">(${patient.time})</small>`;
        patientListDisplay.appendChild(li);
    });
}
// 4. LISTEN FOR FORM SUBMISSION
patientForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page from reloading automatically
    const name = patientNameInput.value;
    const selectedTreatment = treatmentInput.value;
    const currentTime = new Date().toLocaleTimeString();
    // Logic: Subtract stock if an antimalarial dose is selected
    if (selectedTreatment === 'antimalarial') {
        if (currentStock > 0) {
            currentStock -= 1;
        } else {
            alert("Error: Out of stock! Cannot dispense medication.");
            return; // Stops execution if stock is empty
        }
    }
    // Add new patient data entry to our array
    patientRecords.push({
        name: name,
        treatment: selectedTreatment,
        time: currentTime
    });
    // 5. SAVE UPDATED DATA TO BROWSER STORAGE (Offline persistence)
    localStorage.setItem('medicineStock', currentStock);
    localStorage.setItem('patients', JSON.stringify(patientRecords));
    // Refresh the dashboard display and clear the form input field
    updateDashboard();
    patientForm.reset();
});
// Run this function immediately when page loads to pull data from LocalStorage
updateDashboard();