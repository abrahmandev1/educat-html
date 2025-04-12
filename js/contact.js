document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let responseMessage = document.getElementById("responseMessage");

    if(name && email && subject && message) {
        responseMessage.innerText = "Message Sent Successfully!";
        responseMessage.style.display = "block";
        responseMessage.style.color = "green";
        this.reset(); // Reset the form
    } else {
        responseMessage.innerText = "Please fill in all fields!";
        responseMessage.style.display = "block";
        responseMessage.style.color = "red";
    }
});
