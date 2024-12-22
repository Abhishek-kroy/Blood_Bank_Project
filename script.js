window.addEventListener("DOMContentLoaded", () => {
    const userNameSpan = document.getElementById("userName");
    console.log("User element:", userNameSpan); // Check if element is found
    const storedFname = localStorage.getItem("fname");
    console.log("Stored fname:", storedFname); // Check if fname is in localStorage

    if (storedFname && userNameSpan) {
        userNameSpan.textContent = storedFname; // Update username dynamically
    } else {
        userNameSpan.textContent = "Guest"; // Default value
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const donationItems = document.querySelectorAll('#donationList li');
    donationItems.forEach(item => {
        item.addEventListener('click', function () {
            const donationType = item.textContent.trim();
            console.log('Clicked:', donationType);  // Check if the correct donation type is captured
            handleClick(donationType);
        });
    });
});

function handleClick(donationType) {
    // Select the relevant div elements where information will be updated
    const descriptionDivs = {
        "What Is It?": document.querySelector('.WhatIsIt .info-description'),
        "Who Can Donate?": document.querySelector('.WhoCanDonate .info-description'),
        "User For": document.querySelector('.UserFor .info-description'),
        "Lasts For": document.querySelector('.LastsFor .info-description'),
        "How Long Does It Take To Donate?": document.querySelector('.HowLongDoesItTakeToDonate .info-description'),
        "How Often Can I Donate?": document.querySelector('.HowOftenCanIDonate .info-description')
    };

    // Reset all divs before updating
    Object.values(descriptionDivs).forEach(div => {
        div.textContent = ''; // Clear previous text
    });

    // Update based on the donation type
    switch (donationType) {
        case 'Packed Red Blood Cells':
            descriptionDivs["What Is It?"].textContent = "Packed Red Blood Cells are used to treat anemia and blood loss.";
            descriptionDivs["Who Can Donate?"].textContent = "Healthy adults aged 18-65 can donate.";
            descriptionDivs["User For"].textContent = "Used for patients with low red blood cell count, such as those with anemia.";
            descriptionDivs["Lasts For"].textContent = "Lasts for up to 42 days in storage.";
            descriptionDivs["How Long Does It Take To Donate?"].textContent = "Takes about 15 minutes to donate.";
            descriptionDivs["How Often Can I Donate?"].textContent = "Can donate once every 56 days.";
            break;
        case 'Plasma':
            descriptionDivs["What Is It?"].textContent = "Plasma is the liquid component of blood used to treat burns and shock.";
            descriptionDivs["Who Can Donate?"].textContent = "Healthy adults aged 18-65 can donate.";
            descriptionDivs["User For"].textContent = "Used for patients with burns, shock, or clotting disorders.";
            descriptionDivs["Lasts For"].textContent = "Lasts for up to 1 year in storage.";
            descriptionDivs["How Long Does It Take To Donate?"].textContent = "Takes about 45 minutes to donate.";
            descriptionDivs["How Often Can I Donate?"].textContent = "Can donate once every 28 days.";
            break;
        case 'Platelet':
            descriptionDivs["What Is It?"].textContent = "Platelets help in clotting and are used for patients with leukemia or bleeding disorders.";
            descriptionDivs["Who Can Donate?"].textContent = "Healthy adults aged 18-65 can donate.";
            descriptionDivs["User For"].textContent = "Used for patients with leukemia, bleeding disorders, or undergoing chemotherapy.";
            descriptionDivs["Lasts For"].textContent = "Lasts for up to 5 days in storage.";
            descriptionDivs["How Long Does It Take To Donate?"].textContent = "Takes about 2 hours to donate.";
            descriptionDivs["How Often Can I Donate?"].textContent = "Can donate once every 7 days.";
            break;
        default:
            Object.values(descriptionDivs).forEach(div => {
                div.textContent = "Click an option to learn more.";
            });
            break;
    }
}