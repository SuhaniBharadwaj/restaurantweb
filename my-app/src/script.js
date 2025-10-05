const header=document.getElementById('header');
const menu=document.getElementById('menu-icon');
const navbar=document.getElementById('navbar');
 window.addEventListener('scroll' , () => {
    header.classList.toggle('active' , window.scrollY > 0);

 });
 menu.onclick = () => {
    navbar.classList.remove('active');
 }

// Hamburger menu logic
const menuIcon = document.getElementById('menu-icon');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    };

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Scroll to "Order Now" section if needed
            if (
                link.getAttribute('href') === '#order-now' ||
                link.textContent.trim().toLowerCase().includes('order now')
            ) {
                e.preventDefault();
                const orderSection = document.getElementById('order-now');
                if (orderSection) {
                    orderSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });

    window.addEventListener('scroll', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });

    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && e.target !== menuIcon) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
}

// Handle Order Form Submission
const orderForm = document.getElementById('order-form');
if (orderForm) {
    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const item = document.getElementById('item').value;
        const quantity = document.getElementById('quantity').value;
        const phone = document.getElementById('number').value;
        const address = document.getElementById('address').value;

        // Save order to localStorage
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push({ name, item, quantity, phone, address });
        localStorage.setItem('orders', JSON.stringify(orders));

        alert('Order submitted successfully!');
    });
}

// Handle Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect form data
        const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Your Subject"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Save message to localStorage
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ name, email, subject, message });
        localStorage.setItem('messages', JSON.stringify(messages));

        alert('Message submitted successfully!');
    });
}

// Add loading spinner for form submissions (only one spinner per form)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
        if (!form.querySelector('.spinner')) {
            const spinner = document.createElement('div');
            spinner.className = 'spinner';
            form.appendChild(spinner);
        }
    });
});

// Scroll to "Order Now" section when navbar link is clicked
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if the link is for Order Now (by href or text)
            if (
                link.getAttribute('href') === '#order-now' ||
                link.textContent.trim().toLowerCase().includes('order now')
            ) {
                e.preventDefault();
                const orderSection = document.getElementById('order-now');
                if (orderSection) {
                    orderSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.remove('active');
        if (menuIcon) menuIcon.classList.remove('bx-x');
    }
});

// ...existing code from inline scripts in index.html, order-now.html, messages.html...
                e.preventDefault();
                const orderSection = document.getElementById('order-now');
                if (orderSection) {
                    orderSection.scrollIntoView({ behavior: 'smooth' });
                }
window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.remove('active');
        if (menuIcon) menuIcon.classList.remove('bx-x');
    }
});

// ...existing code from inline scripts in index.html, order-now.html, messages.html...

