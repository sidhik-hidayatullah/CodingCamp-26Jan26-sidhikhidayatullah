// Hamburger Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


// Website Link Confirmation
document.querySelectorAll(".website-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const confirmMove = confirm(
            "Anda akan berpindah ke website perpustakaan EasyMath.\nApakah Anda ingin melanjutkan?"
        );

        if (confirmMove) {
            window.open(
                "https://sidhik-hidayatullah.github.io/EasyMath/",
                "_blank"
            );
        }
    });
});


// Welcome Message
const userName = prompt("Welcome to EasyMath! Please enter your name:");
document.getElementById("welcomeText").innerText =
    `Hi ${userName || "Learner"}, Welcome to EasyMath`;

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("messageText").value.trim();

    if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid email!");
        return;
    }

    if (isNaN(phone)) {
        alert("Phone number must be numeric!");
        return;
    }

    const time = new Date().toString();

    document.getElementById("output").innerHTML = `
        <p><b>Current time:</b> ${time}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
    `;
});
