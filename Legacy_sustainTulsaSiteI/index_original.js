// Dark mode button
const themeButton = document.getElementById("theme-button");
// Light logo
const logo = document.getElementById("logo");
// Toggle event listener
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    console.log("Dark mode on");

    // Loop
    if (document.body.classList.contains("dark-mode")) {
        logo.src = "images/stLogo-dark.png"; 
    } else {
        logo.src = "images/stLogo-light.png"; 
    }
});

// Petition event listener
const signNowButton = document.getElementById("sign-now-button");

// Initial count
let signatureCount = 3;

// Add a signature with email - no signature display
const addSignature = () => {
    // Ask for input values
    const nameInput = document.getElementById("name");
    const hometownInput = document.getElementById("hometown");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const hometown = hometownInput.value.trim();
    const email = emailInput.value.trim();

    // Check - all fields filled + email valid
    if (name && hometown && email && validateEmail(email)) {
        // Create person object
        const person = {
            name: name,
            hometown: hometown,
            email: email
        };

        // Hide email 
        const newSignature = document.createElement("p");
        newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this petition`;

        // Add new signature to section
        const signaturesDiv = document.querySelector(".signatures");
        signaturesDiv.appendChild(newSignature);

        // Update counter
        signatureCount++;
        const counter = document.getElementById("counter");
        counter.textContent = `🙌 ${signatureCount} people have signed and support our fight to eradicate hunger.`;

        // Clear input fields
        nameInput.value = "";
        hometownInput.value = "";
        emailInput.value = "";

        // Remove red styling if inputs valid
        nameInput.style.border = "1px solid #ccc";
        nameInput.style.backgroundColor = "white";
        hometownInput.style.border = "1px solid #ccc";
        hometownInput.style.backgroundColor = "white";
        emailInput.style.border = "1px solid #ccc";
        emailInput.style.backgroundColor = "white";

        // Show the success modal
        toggleModal(person);

    } else {
        alert("Please fill in all fields with valid information.");

        // Apply red border and background color to invalid inputs
        if (!name) {
            nameInput.style.border = "2px solid red";
            nameInput.style.backgroundColor = "#ffcccc";
        } else {
            nameInput.style.border = "1px solid #ccc";
            nameInput.style.backgroundColor = "white";
        }

        if (!hometown) {
            hometownInput.style.border = "2px solid red";
            hometownInput.style.backgroundColor = "#ffcccc";
        } else {
            hometownInput.style.border = "1px solid #ccc";
            hometownInput.style.backgroundColor = "white";
        }

        if (!email || !validateEmail(email)) {
            emailInput.style.border = "2px solid red";
            emailInput.style.backgroundColor = "#ffcccc";
        } else {
            emailInput.style.border = "1px solid #ccc";
            emailInput.style.backgroundColor = "white";
        }
    }
};

// Email validation function
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidFormat = emailRegex.test(email);
    // Requires .com address
    const containsDotCom = email.includes('.com'); 

    return isValidFormat && containsDotCom;
};

// Petition modal
const toggleModal = (person) => {
    const modal = document.getElementById("thanks-modal");
    const modalContent = document.getElementById("thanks-modal-content");

    // Thank you message
    modalContent.textContent = `Thank you so much, ${person.name}! ${person.hometown} represent!`;
    modal.style.display = "flex";

    // Plant image ref
    const modalImage = document.getElementById("modal-image");

    // Rotate image
    modalImage.classList.add('rotate-animate');

    // Rotate image timer
    setTimeout(() => {
      modalImage.classList.remove('rotate-animate');
     }, 800); 

    // Hide modal after 3 seconds
    modalImage.style.transform = "none";
        // Auto hide modal after 3 seconds
        setTimeout(() => {
          modal.style.display = "none";
      }, 3000);
};



// Close the modal with an outside cursor click
window.onclick = (event) => {
    const modal = document.getElementById("thanks-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Add an event listener to the button
signNowButton.addEventListener("click", addSignature);




// Scroll animation settings
let animation = {
  revealDistance: 150,               
  initialOpacity: 0,                 
  transitionDelay: '0s',                
  transitionDuration: '2s',      
  transitionProperty: 'all',         
  transitionTimingFunction: 'ease'   
};

      
const revealableContainers = document.querySelectorAll('.revealable');

     
function reveal() {
  const windowHeight = window.innerHeight;

  revealableContainers.forEach((container) => {
    const topOfRevealableContainer = container.getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      container.classList.add('active');   
    } else {
      container.classList.remove('active');   
    }
  });
}

      
window.addEventListener("scroll", reveal);

         
reveal();

const reduceMotionButton = document.getElementById("reduce-motion-btn");

reduceMotionButton.addEventListener("click", function () {
        // Reduced motion settings
  animation = {
    revealDistance: 50,           
    initialOpacity: 1,            
    transitionDelay: '0s',        
    transitionDuration: '0.5s',   
    transitionProperty: 'none',   
    transitionTimingFunction: 'ease'   
  };

        // Update styles - revealable containers
  revealableContainers.forEach(container => {
    container.style.transitionDuration = animation.transitionDuration;
    container.style.transitionDelay = animation.transitionDelay;
    container.style.transitionTimingFunction = animation.transitionTimingFunction;
  });

        // Update button text - state change
  reduceMotionButton.textContent = "Enable Motion";
});



 // Plant modal + button
const modal = document.getElementById('thanks-modal');
const closeButton = document.getElementById('close-modal-btn');

        // Show the modal
function showModal() {
  modal.style.display = 'flex'; // Show the modal
}

        // Close modal when button clicked
closeButton.addEventListener('click', function() {
  modal.style.display = 'none';  
});