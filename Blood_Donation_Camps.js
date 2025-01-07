document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetch blood camp data from the backend API
        const response = await fetch('http://localhost:3000/api/v1/bloodCamps');
        const camps = await response.json();

        // Get the camps container element
        const campsContainer = document.querySelector("#camps-container");

        // Check if data exists
        if (Array.isArray(camps) && camps.length > 0) {
            camps.forEach((camp) => {
                // Create a new div for each camp
                const campCard = document.createElement('div');
                campCard.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'text-center');

                campCard.innerHTML = `
                    <h2 class="text-xl font-semibold text-gray-800">${camp.camp_name}</h2>
                    <p class="text-gray-600 mt-2"><strong>Location:</strong> ${camp.location}</p>
                    <p class="text-gray-600 mt-2"><strong>Date:</strong> ${new Date(camp.camp_date).toLocaleDateString()}</p>
                    <p class="text-gray-600 mt-2"><strong>Start Time:</strong> ${camp.start_time}</p>
                    <p class="text-gray-600 mt-2"><strong>End Time:</strong> ${camp.end_time}</p>
                    <p class="text-gray-600 mt-2"><strong>Contact:</strong> ${camp.contact}</p>
                    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"><a href="Register_for_Donation.html">Register Now</a></button>
                `;
                
                // Append the camp card to the container
                campsContainer.appendChild(campCard);
            });
        } else {
            // If no camps are found
            campsContainer.innerHTML = '<p class="text-center text-gray-600">No blood donation camps found.</p>';
        }
    } catch (error) {
        console.error("Error fetching blood camps:", error);
        // Handle the error and show a message
        const campsContainer = document.querySelector("#camps-container");
        campsContainer.innerHTML = '<p class="text-center text-gray-600">Failed to fetch blood camp data.</p>';
    }
});