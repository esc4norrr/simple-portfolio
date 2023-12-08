function smoothScrollToTarget() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId); 
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function for expanding cards on click
function expandCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            card.classList.toggle('expanded');
        });
    });
}

// Function for expanding interactive cards on click
function expandInteractiveCard() {
    const interactiveCard = document.querySelector('.interactive-card');
    const toggleButton = document.querySelector('.toggle-button');
    
    toggleButton.addEventListener('click', function () {
        interactiveCard.classList.toggle('expanded');
        if (interactiveCard.classList.contains('expanded')) {
            toggleButton.textContent = 'Read Less';
        } else {
            toggleButton.textContent = 'Read More';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    smoothScrollToTarget(); 
    expandCards(); 
    expandInteractiveCard(); 
});


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    
    // Add an event listener to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId); 
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });

                navLinks.forEach(function (navLink) {
                    navLink.classList.remove('active');
                });

                this.classList.add('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, 
                    behavior: 'smooth'
                });

                // Update active link
                navLinks.forEach(lnk => lnk.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

