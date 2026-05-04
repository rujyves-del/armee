 
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('nav ul');
        const body = document.body;

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        body.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });

        // Carrousel Functionality
        const slides = document.querySelector('.slides');
        const dots = document.querySelectorAll('.dot');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        let currentSlide = 0;

        function showSlide(index) {
            if (index < 0) {
                currentSlide = dots.length - 1;
            } else if (index >= dots.length) {
                currentSlide = 0;
            } else {
                currentSlide = index;
            }
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateDots();
        }

        function updateDots() {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        }

        prev.addEventListener('click', () => showSlide(currentSlide - 1));
        next.addEventListener('click', () => showSlide(currentSlide + 1));

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto-slide every 5 seconds
        setInterval(() => showSlide(currentSlide + 1), 5000);

        // Initialize first slide
        showSlide(currentSlide);

const container = document.querySelector('.card-container');
const prevButton = document.querySelector('.nav-button.prev');
const nextButton = document.querySelector('.nav-button.next');

let scrollAmount = 0;
const scrollStep = container.querySelector('.card').offsetWidth + 16; // Card width + gap

prevButton.addEventListener('click', () => {
    scrollAmount = Math.max(scrollAmount - scrollStep, 0);
    container.style.transform = `translateX(-${scrollAmount}px)`;
});

nextButton.addEventListener('click', () => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    scrollAmount = Math.min(scrollAmount + scrollStep, maxScroll);
    container.style.transform = `translateX(-${scrollAmount}px)`;
});

//formulaire avis

const form = document.getElementById('feedbackForm');
        const successMessage = document.getElementById('formSuccess');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            successMessage.style.display = 'block';
            form.reset();
        });