document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Fetch input values
    const fname = document.getElementById("Fname").value.trim();
    const lname = document.getElementById("Lname").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact_no = document.getElementById("contact-number").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const type = document.getElementById("type").value;
    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    console.log(fname,lname,address,email,contact_no,password,type);

    try {
        const response = await fetch("http://localhost:3000/api/v1/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fname,
                lname,
                address,
                email,
                password,
                contact_no,
                type
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Sign-up Successful!");
            const type=window.localStorage.getItem('type');
            if(type=='donor'){
                window.location.href = "Home.html";
            }
            else if(type=='doctor'){
                window.location.href = "Home.html";
            }
            else{
                window.location.href = "Admin.html";
            }
        } else {
            console.error("Error during sign-up:", data); // Log the error message
            alert(data.message || "Sign-up Failed! Please try again.");
        }
    } catch (error) {
        console.error("Error during sign-up:", error); // This will log the complete error stack
        res.status(500).json({ message: "Server error", error });
    }    
});