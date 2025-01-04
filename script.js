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

const textElement = document.getElementById('typewriter-text');
const texts = [
    "The process of donating blood is a safe and simple way to help others in need. Blood donation not only saves lives but also supports the community by ensuring a steady supply for hospitals and clinics. After donation, your body works to replenish the blood, stimulating the production of fresh blood cells and promoting good health. It's an act of kindness that can make a real difference in someone's life.",
    "Blood donation plays a crucial role in maintaining a healthy supply of blood for those in need. It ensures that hospitals and clinics have enough resources to treat patients in emergencies, surgeries, and chronic illnesses. By donating blood, you contribute to saving lives and supporting the well-being of your community.",
    "When you donate blood, you're not only helping others but also promoting your own health. Blood donation can reduce the risk of certain diseases and improve cardiovascular health. It's an easy way to give back and make a meaningful impact in your community while benefiting your own body."
];

let index = 0;
let wordIndex = 0;
const words = texts[index].split(' ');

function typeWriter() {
    if (wordIndex < words.length) {
        textElement.innerHTML += words[wordIndex] + ' ';
        wordIndex++;
        setTimeout(typeWriter, 100); // Delay between words
    } else {
        textElement.classList.remove('blink-cursor'); // Remove cursor when finished typing
        setTimeout(removeWord, 1500); // Wait before starting to remove words
    }
}

function removeWord() {
    if (wordIndex > 0) {
        // Remove one word at a time
        textElement.innerHTML = textElement.innerHTML.slice(0, -words[wordIndex - 1].length - 1);
        wordIndex--;
        setTimeout(removeWord, 100); // Delay before removing the next word
    } else {
        // After removing all words, load the next text
        setTimeout(switchText, 500);
    }
}

function switchText() {
    index = (index + 1) % texts.length; // Cycle through the texts
    wordIndex = 0; // Reset word index
    words.length = 0; // Clear words array
    words.push(...texts[index].split(' ')); // Get next text
    textElement.classList.add('blink-cursor'); // Add the blinking cursor
    typeWriter(); // Start typing the next text
}

// Start the typing effect on page load
window.onload = () => {
    textElement.classList.add('blink-cursor');
    typeWriter();
};

document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll'); // Select all elements with this class
    const triggerHeight = window.innerHeight * 0.75; // Trigger when 75% visible

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        // Add class 'visible' when the element is in view
        if (elementTop < triggerHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
