/* ==========================================
   SCRIPT.JS - FUNCIONALIDADES DO SITE
   ========================================== */

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de scroll para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .portfolio-item').forEach(el => {
    observer.observe(el);
});

// Formulário de contato
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = this.querySelector('input[type="text"]').value;
        alert(`Obrigado ${nome}! Responderei sua mensagem em breve.`);
        this.reset();
    });
}

// Mudar estilo da navbar ao scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'var(--sombra)';
    }
});

// Animação de digitação na seção hero
const heroTitle = document.querySelector('.hero-content h2');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    // Inicia a animação após carregar
    setTimeout(typeEffect, 500);
}

// Contagem de números na seção de estatísticas
const statsSection = document.querySelector('.stats');
if (statsSection) {
    let hasAnimated = false;

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateStats();
                hasAnimated = true;
            }
        });
    });

    statsObserver.observe(statsSection);

    function animateStats() {
        const statItems = document.querySelectorAll('.stat-item h3');
        statItems.forEach(item => {
            const originalText = item.textContent;
            const finalValue = parseInt(originalText);
            let currentValue = 0;
            const increment = Math.ceil(finalValue / 50);

            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    currentValue = finalValue;
                    clearInterval(counter);
                }
                const suffix = originalText.includes('+') ? '+' : originalText.includes('%') ? '%' : '';
                item.textContent = currentValue + suffix;
            }, 30);
        });
    }
}

// Validação de email em tempo real
const emailInput = document.querySelector('input[type="email"]');
if (emailInput) {
    emailInput.addEventListener('input', function() {
        const email = this.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (email && !isValid) {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = 'var(--cor-cinza)';
        }
    });
}

// Menu responsivo em mobile
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Log de sucesso
console.log('%c✨ Pixel Arte - Site carregado com sucesso!', 'color: #6c5ce7; font-size: 16px; font-weight: bold;');
console.log('%cObrigado por visitar meu portfólio!', 'color: #a29bfe; font-size: 14px;');
