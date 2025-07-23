console.log("ХАХААХАХАХ ХУЙ ВАМ ЕПТА")

function showSection(sectionId) {
    console.log('Connection....', sectionId);
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    }
);
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    }
);
    

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log('session is actiavte', sectionId);
    } else {
        console.error('session not found', sectionId);
    }
    

    const activeLink = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    

    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
}


function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function() {
    
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);


    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            console.log('Button is click');

            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = (e.clientX - e.target.offsetLeft) + 'px';
            ripple.style.top = (e.clientY - e.target.offsetTop) + 'px';
            ripple.style.width = ripple.style.height = '20px';
            ripple.style.marginLeft = ripple.style.marginTop = '-10px';
            
            this.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    );
    });


    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });


    document.addEventListener('mousemove', function(e) {
        const floatingIcons = document.querySelectorAll('.floating-icon');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingIcons.forEach((icon, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            icon.style.transform = `translate(${x}px, ${y}px)`;
        });
    });


    const tagline = document.querySelector('.tagline');

    if (tagline) {
        const originalText = tagline.textContent;
        tagline.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    tagline.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            typeWriter();
        }, 1500);
    }


    const username = document.querySelector('.username');

    if (username) {
        username.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
            setTimeout(() => {
                this.style.animation = 'textShine 3s ease-in-out infinite';
            }, 300);
        });
    }


    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
        setInterval(() => {
            if (particlesContainer.children.length < 10) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particlesContainer.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 6000);
            }
        }, 2000);
    }


    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('Contact functionality would be implemented here!\n\nFor now, you can reach out via social media links.');
        });
    }


    const priceItems = document.querySelectorAll('.price-item');
    priceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });


    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});


const style = document.createElement('style');

style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes glitch {
        0%, 100% {
            transform: translateX(0);
        }
        20% {
            transform: translateX(-2px);
        }
        40% {
            transform: translateX(2px);
        }
        60% {
            transform: translateX(-1px);
        }
        80% {
            transform: translateX(1px);
        }
    }
`;

document.head.appendChild(style);