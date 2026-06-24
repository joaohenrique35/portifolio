document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const bentoItems = document.querySelectorAll('.bento-item');
    bentoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        observer.observe(item);
    });

    // Subtle parallax effect for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroText = document.querySelector('.hero-content');
        if (heroText) {
            heroText.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroText.style.opacity = 1 - (scrolled / 700);
        }
    });

    // Console message for UX students
    console.log("%c Olá, UX Researcher! 👋", "color: #4a5d4e; font-size: 20px; font-weight: bold;");
    console.log("Este site foi construído focando em princípios de hierarquia visual e estética moderna (Bento Grids + Serif Fonts).");
});
