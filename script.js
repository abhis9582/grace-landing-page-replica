function fixedHeaderOnScroll(scrollInstance) {
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero-section');
    let lastScrollY = 0;

    scrollInstance.on('scroll', (args) => {
        const currentScrollY = args.scroll.y;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('fixed-header', 'header-hide');
            header.classList.remove('header-show');
            heroSection.classList.add('with-margin');
        } else if (currentScrollY < lastScrollY) {
            header.classList.add('fixed-header', 'header-show');
            header.classList.remove('header-hide');
            heroSection.classList.add('with-margin');
        }

        lastScrollY = currentScrollY;
    });
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.03,
});

// Call your header function with Locomotive Scroll instance
fixedHeaderOnScroll(scroll);




// document.addEventListener('DOMContentLoaded', () => {
//     const header = document.querySelector('.header');
//     const banner = document.querySelector('.hero-section');

//     if (header && banner) {
//         const headerHeight = header.offsetHeight;

//         window.addEventListener('scroll', () => {
//             if (window.scrollY > 10) {
//                 banner.style.marginTop = `${headerHeight}px`;
//             } else {
//                 banner.style.marginTop = `0px`;
//             }
//         });
//     }
// });


// Scroll to top function when clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Update the progress of the circle as user scrolls
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const circle = document.getElementById('scroll-indicator');
    const radius = 26;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference * (1 - scrollPercent);
    circle.style.strokeDashoffset = offset;
});

// handling gallery image popup 
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    modalImg.src = imageSrc;
    modal.style.display = 'flex'; // show modal
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// handling opening and closing popup form 
function openContactForm() {
    document.getElementById('contactForm').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeContactForm() {
    document.getElementById('contactForm').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Close the contact form when clicking outside (on overlay background)
document.getElementById('overlay').addEventListener('click', function () {
    closeContactForm();
});

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         openContactForm();
//     }, 3000);
// });