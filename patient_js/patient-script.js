document.addEventListener("DOMContentLoaded", function () {
    // Medications Section
    const medicationList = document.getElementById("medication-list");

    if (medicationList) {
        // Simulated medication data (in a real application, you'd fetch this data from a server)
        const medications = [
            {
                id: 1,
                name: "Medication A",
                dosage: "10mg",
                frequency: "Once daily",
                provider: "Dr. Smith",
                instructions: "Take with food",
                sideEffects: "Drowsiness, nausea",
                refillInfo: "Refillable until 12/31/2023"
            },
            {
                id: 2,
                name: "Medication B",
                dosage: "20mg",
                frequency: "Twice daily",
                provider: "Dr. Jones",
                instructions: "Take in the morning and evening",
                sideEffects: "None",
                refillInfo: "Refillable until 11/30/2023"
            }
        ];

        // Function to display medications in the list
        function displayMedications() {
            medicationList.innerHTML = ""; // Clear the existing list

            medications.forEach(function (medication) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <strong>Medication ID:</strong> ${medication.id}<br>
                    <strong>Name:</strong> ${medication.name}<br>
                    <strong>Dosage:</strong> ${medication.dosage}<br>
                    <strong>Frequency:</strong> ${medication.frequency}<br>
                    <strong>Provider:</strong> ${medication.provider}<br>
                    <strong>Instructions:</strong> ${medication.instructions}<br>
                    <strong>Side Effects:</strong> ${medication.sideEffects}<br>
                    <strong>Refill Information:</strong> ${medication.refillInfo}<br>
                    <hr>
                `;
                medicationList.appendChild(listItem);
            });
        }

        // Initial display of medications
        displayMedications();
    }
});

// Call the displayAllPrescriptions function outside of the event listener
document.addEventListener("DOMContentLoaded", function () {
    // Get the target element where you want to display all prescriptions
    const prescriptionList = document.getElementById("prescription-list");

    // Call the displayAllPrescriptions function with the target element
    displayAllPrescriptions(prescriptionList);
});

// JS to handle the card toggling
document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const card = this.parentElement;
            const content = card.querySelector(".content");

            card.classList.toggle("expanded"); // Toggle the "expanded" class

            if (card.classList.contains("expanded")) {
                // Calculate and set the content's max-height to ensure full expansion
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                // Reset the content's max-height to zero for collapsing
                content.style.maxHeight = "0";
            }
        });
    });
});

// JS to display Bill List
document.addEventListener("DOMContentLoaded", function () {
    const billList = document.getElementById("bill-list");

    if (billList) {
        // Simulated bill data (in a real application, you'd fetch this data from a server)
        const bills = [
            {
                id: 1,
                date: "2023-10-01",
                amount: 100.00,
                insuranceCoverage: 80.00,
                paid: 20.00
            },
            {
                id: 2,
                date: "2023-09-15",
                amount: 75.00,
                insuranceCoverage: 60.00,
                paid: 15.00
            }
        ];

        // Function to display bills in the list
        function displayBills() {
            billList.innerHTML = ""; // Clear the existing list

            bills.forEach(function (bill) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <strong>Bill ID:</strong> ${bill.id}<br>
                    <strong>Date:</strong> ${bill.date}<br>
                    <strong>Total Amount:</strong> $${bill.amount}<br>
                    <strong>Insurance Coverage:</strong> $${bill.insuranceCoverage}<br>
                    <strong>Amount Paid:</strong> $${bill.paid}<br>
                    <hr>
                `;
                billList.appendChild(listItem);
            });
        }

        // Initial display of bills
        displayBills();
    }
});

// JS for Appointment Form
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form element
    const appointmentForm = document.getElementById("appointment-form");

    // Add a submit event listener to the form
    appointmentForm.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve form data if needed
        const formData = new FormData(appointmentForm);

        // Send an AJAX request to save-appointment.php to handle form submission
        fetch("save-appointment.php", {
            method: "POST",
            body: formData,
        })
            .then(response => {
                if (response.ok) {
                    // Handle success if needed
                    console.log("Form submitted successfully");
                } else {
                    // Handle the error response, e.g., display an error message
                    console.error("Form submission failed");
                }
            })
            .catch(error => {
                console.error("An error occurred:", error);
            });
    });
});
