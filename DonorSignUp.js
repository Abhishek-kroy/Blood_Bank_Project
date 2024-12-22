document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Fetch input values
    const fname = document.getElementById("Fname").value.trim();
    const lname = document.getElementById("Lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const blood_group = document.getElementById("blood-group").value;
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/api/v1/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                blood_group,
                password
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Sign-up Successful!");
            window.location.href = "DonorLogin.html"; // Redirect to login page
        } else {
            console.error("Error during sign-up:", data); // Log the error message
            alert(data.message || "Sign-up Failed! Please try again.");
        }
    } catch (error) {
        console.error("Error during sign-up:", error); // This will log the complete error stack
        res.status(500).json({ message: "Server error", error });
    }    
});