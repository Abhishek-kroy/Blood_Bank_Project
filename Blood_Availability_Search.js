const search_btn = document.getElementById("search-btn");

search_btn.addEventListener("click", async function () {
    // debugging this handler
    console.log("Clicked");
    
    // Get selected state
    var search_input = document.getElementById("stateSelected");
    var stateName = search_input.value;

    // Get selected district
    var district_input = document.getElementById("district");
    var districtName = district_input.value;

    // Get selected blood group
    var bloodgroup_input = document.getElementById("bloodgroups");
    var bloodgroup = bloodgroup_input.value;

    try {
        // Fetch data from API
        const response = await fetch(
            // `http://localhost:3000/api/v1/blood?state=${stateName}&district=${districtName}&bloodgroup=${bloodgroup}`
            `http://localhost:3000/api/v1/blood`
        );
        const data = await response.json();
        
        // Get the table body
        let tableBody = document.querySelector(".table-container tbody");
        tableBody.innerHTML = ""; // Clear existing rows

        // Check if data exists
        if (data.length > 0) {
            data.forEach((item, index) => {
                let row = `<tr>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                </tr>`
                // `
                //     <tr>
                //         <td>${index + 1}</td>
                //         <td>${item.name}</td>
                //         <td>${item.availability ? "Available" : "Not Available"}</td>
                //         <td>${item.lastUpdate}</td>
                //         <td>${item.bloodgroup}</td>
                //     </tr>`;
                tableBody.innerHTML += row;
                console.log(row);
            });
        } else {
            tableBody.innerHTML = `<tr><td colspan="5">No results found.</td></tr>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        let tableBody = document.querySelector(".table-container tbody");
        tableBody.innerHTML = `<tr><td colspan="5">Failed to fetch data.</td></tr>`;
    }
});