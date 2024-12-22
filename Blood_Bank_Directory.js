const search_btn = document.getElementById("search-btn");

search_btn.addEventListener("click", async function() {
    const state = document.getElementById("stateSelected").value;
    const district = document.getElementById("district").value;
    const bloodBank = document.querySelector("input[type='text']").value;

    // Check if the user has made a selection
    if (state === "SelectState" || district === "SelectDistrict") {
        alert("Please select both state and district.");
        return;
    }

    // Show loading message
    const instructionsContainer = document.querySelector(".instructions-container");
    instructionsContainer.innerHTML = "<h2>Loading...</h2>";

    // Fetch data from the API
    await fetchBloodBanks(state, district, bloodBank);
});

async function fetchBloodBanks(state, district, bloodBank) {
    const apiUrl = `http://localhost:3000/api/v1/getBloodBank?state=${state}&district=${district}&name=${bloodBank}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        
        // Handle successful API response
        displayBloodBanks(state,district,bloodBank,data);
    } catch (error) {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
        document.querySelector(".instructions-container").innerHTML = "<h2>Error fetching data. Please try again later.</h2>";
    }
}

function displayBloodBanks(state,district,bloodBank,bloodBanks) {
    const instructionsContainer = document.querySelector(".instructions-container");

    // Clear previous results
    instructionsContainer.innerHTML = `<h2>List Of Searched Blood Banks</h2>
                                       <p>Showing Blood Banks/ Blood Storage Units for  <strong>${ state}</strong> - <strong>${district}</strong></p>`;

    // Check if there are any results
    if (bloodBanks.length > 0) {
        // Create a container div for each blood bank
        bloodBanks.forEach(bank => {
            const bloodBankDiv = document.createElement("div");
            bloodBankDiv.classList.add("blood-bank");

            // Add the blood bank details inside the div
            bloodBankDiv.innerHTML = `
                <h3>${bank.b_first_name}   ${bank.b_last_name}</h3>
                <p><strong>Contact:</strong> ${bank.contact_no}</p>
                <p><strong>Email:</strong> ${bank.email}</p>
                <p><strong>Address:</strong> ${bank.state} ${bank.district} ${bank.city}</p>
                <p><strong>Type:</strong> ${bank.type}</p>
            `;

            // Append the blood bank div to the instructions container
            instructionsContainer.appendChild(bloodBankDiv);
        });
    } else {
        instructionsContainer.innerHTML += "<p>No blood banks found matching your criteria.</p>";
    }
}