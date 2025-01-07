// const form=document.getElementById('campForm');
// console.log(form);
// console.log('hi');
// form.addEventListener('submit',async (event)=>{
//     event.preventDefault();
//     const formData = {
//         camp_name: document.getElementById('campName').value,
//         location: document.getElementById('location').value,
//         camp_date: document.getElementById('campDate').value,
//         start_time: document.getElementById('campStartTime').value,
//         end_time: document.getElementById('campEndTime').value,
//         contact: document.getElementById('contact').value,
//         description: document.getElementById('description').value,
//     };
//     console.log(formData);

//     try{
//         const response = await fetch(`http://localhost:8000/api/v1/AddCamp`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json', // Specify JSON data format
//             },
//             body: JSON.stringify(formData), // Convert form data to JSON string
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log(result);
//             alert('Camp added successfully!');
//             form.reset();
//         } else {
//             const error = await response.json();
//             alert(`Error: ${error.message}`);
//         }
//     }
//     catch(err){
//         alert('Failed to add camp. Please try again later.');
//         console.error('Error:', err);
//     }
// })
document.getElementById("storeCamp").addEventListener("click", async function () {
    const camp_name = document.getElementById("campName").value;
    const location = document.getElementById("location").value;
    const camp_date = document.getElementById("campDate").value;
    const start_time = document.getElementById("campStartTime").value;
    const end_time = document.getElementById("campEndTime").value;
    const contact = document.getElementById("contact").value;
    const description = document.getElementById("description").value;

    const requestBody = {
        camp_name,
        location,
        camp_date,
        start_time,
        end_time,
        contact,
        description,
    };

    try {
        const response = await fetch(`http://localhost:3000/api/v1/AddCamp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            alert("Camp added successfully!");
        } else {
            alert(data.message || "Failed to add camp.");
        }
    } catch (error) {
        console.error("Error adding camp:", error);
        alert("Server error. Please try again later.");
    }
});
