document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Declare the variable before using it
    const userNameSpan = document.getElementById("userName");

    const email = document.getElementById("email").value;
    const type = document.getElementById("type").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, type,  password }),
        });

        const data = await response.json();
        console.log("API Response:", data); // Debug response

        if (response.ok) {
            alert("Login Successful!");

            // Save token and first name
            localStorage.setItem("token", data.token);
            localStorage.setItem("fname", data.fname);
            localStorage.setItem("type", data.type);

            // Update username dynamically
            if (userNameSpan) {
                userNameSpan.textContent = data.fname; // Update text
            } else {
                console.error("Element with ID 'userName' not found!");
            }

            // Redirect to home page
            window.location.href = "Home.html";
        } else {
            alert(data.message || "Login Failed! Please try again.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again later.");
    }
});

