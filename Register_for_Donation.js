document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const full_name = document.getElementById("full_name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;
    const blood_group = document.getElementById("blood_group").value;
    const email = document.getElementById("email").value.trim();
    const contact_number = document.getElementById("contact_number").value.trim();
    const address = document.getElementById("address").value.trim();
    const medicalHistory = document.getElementById("medical_history").value.trim();
    const consent = document.getElementById("consent").checked;

    // Simple validation logic
    console.log(full_name, age, gender, blood_group, email, contact_number, address, medicalHistory, consent);
    if (!full_name || !age || !gender || !blood_group || !email || !contact_number || !address || !consent || !medicalHistory) {
        alert("Please fill all the required fields.");
        return;
    }



    try {
        const response = await fetch('http://localhost:3000/api/v1/registerDonor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
             full_name,
                age,
                gender,
                blood_group,
                email,
                contact_number,
                address,
                medicalHistory,
                consent,
            }),
        });

        const data = await response.json();

        if (response.status === 201) {
            console.log("Donor registered successfully:", data);
            alert("Registration successful!");
            window.location.href = 'Blood_Donation_Camps.html';
        } else {
            console.error("Failed to register donor:", data.message);
            alert(data.message || "Registration failed. Please try again.");
        }
    } catch (err) {
        console.error("Error during fetch:", err);
        alert("An error occurred. Please try again later.");
    }
});