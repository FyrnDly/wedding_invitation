// Animation Smooth Nav Hidden
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
});

// Animation Smooth Nav Scroll
const links = document.querySelectorAll('a[href^="#"]')
const navHeight = nav.offsetHeight;
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        links.forEach(
            link=>link.classList.remove('active')
        );

        this.classList.add('active');
        if (this.getAttribute('href') === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const target = document.querySelector(this.getAttribute('href'))
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        };
    });
});
