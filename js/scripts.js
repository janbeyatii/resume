// Tailwind Configuration
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: "#0a0a0a",
                light: "#fcfbf7",
            },
        },
    },
};

// Initialize Icons
lucide.createIcons();

// Project Data
const projects = [
    {
        title: "MyTiles Ottawa",
        description: "Professional portfolio website for a tile & interior renovations company. Fully SEO optimized with modern design, showcasing services, portfolio gallery, and lead generation forms.",
        url: "https://mytilesottawa.ca/",
        image: "./assets/mytiles.jpeg"
    },
    {
        title: "Dancin' Conga",
        description: "Fun little animation dancing to a catchy tune. Deployed via Netlify.",
        url: "https://beyati.netlify.app/",
        image: "./assets/conga.png"
    }

    // {
    //     title: "HLS-Client",
    //     description: "This project implements HTTP-Live Streaming Protocol server and player in the client device, using gstreamer multimedia framework",
    //     url: "https://github.com/akashblsbrmnm/hlsclient",
    //     image: "https://opengraph.githubassets.com/1/akashblsbrmnm/hlsclient"
    // },
    // {
    //     title: "Developer Portfolio",
    //     description: "This is a developer portfolio made using Tailwind framework, and a little bit of JS",
    //     url: "https://github.com/akashblsbrmnm/akashblsbrmnm.github.io",
    //     image: "https://opengraph.githubassets.com/1/akashblsbrmnm/akashblsbrmnm.github.io"
    // },
    // {
    //     title: "Deep learning : Skin Cancer Classification",
    //     description: "This was my project for AI/ML Coursework at the University",
    //     url: "https://github.com/akashblsbrmnm/skin-cancer-classifier",
    //     image: "https://opengraph.githubassets.com/1/akashblsbrmnm/skin-cancer-classifier"
    // },
    // {
    //     title: "Project Y",
    //     description: "STILL WORK IN PROGRESS",
    //     url: "https://github.com/akashblsbrmnm",
    //     image: "https://opengraph.githubassets.com/1/"
    // }
];

// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function setTheme(isDark) {
    if (isDark) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    updateIcon(isDark);
    localStorage.setItem('darkMode', isDark);
}

function updateIcon(isDark) {
    themeToggle.innerHTML = isDark
        ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>';
}

function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
        setTheme(JSON.parse(savedTheme));
    } else {
        setTheme(getSystemPreference());
    }
}

// UI Effects
function revealSections() {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Smooth scroll for chevron
function initSmoothScroll() {
    const chevron = document.querySelector('.chevron-down');
    if (chevron) {
        chevron.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

function createProjectTiles() {
    const projectsContainer = document.querySelector('#projects .grid');
    if (!projectsContainer) return;
    
    if (projects.length === 0) {
        projectsContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-400 text-lg">More projects coming soon! 🚀</p>
            </div>
        `;
        return;
    }
    
    projects.forEach((project, index) => {
        const tile = document.createElement('div');
        tile.className = 'project-tile';
        tile.style.animationDelay = `${index * 0.1}s`;
        tile.innerHTML = `
            <div class="project-thumbnail mb-4">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\'%3E%3Crect fill=\'%231e293b\' width=\'800\' height=\'400\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'%23a8ff00\' font-size=\'24\' font-family=\'Arial\'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E';">
                <div class="redirect-icon">
                    <i data-lucide="external-link"></i>
                </div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-white">${project.title}</h3>
            <p class="text-sm text-gray-400 mb-4">${project.description}</p>
        `;
        const thumbnail = tile.querySelector('.project-thumbnail');
        thumbnail.addEventListener('click', () => window.open(project.url, '_blank'));
        projectsContainer.appendChild(tile);
    });
    
    // Re-initialize icons after a short delay
    setTimeout(() => {
        lucide.createIcons();
    }, 50);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize icons
    lucide.createIcons();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Create project tiles
    createProjectTiles();
    
    // Reveal sections on load
    revealSections();
    
    // Set current year
    setCurrentYear();
    
    // Particle network is initialized automatically by particle-network.js
    
    // Re-initialize icons after project tiles are created
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
});

themeToggle.addEventListener('click', () => {
    const isDark = !html.classList.contains('dark');
    setTheme(isDark);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('darkMode') === null) {
        setTheme(e.matches);
    }
});

// Set current year
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Particle Network Background
function initParticleNetwork() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) {
        console.error('Canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };
    let animationId = null;
    
    // Set canvas size
    function getFullPageHeight() {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            window.innerHeight
        );
    }
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = getFullPageHeight();
        
        // Redistribute particles if canvas size changed significantly
        if (particles.length > 0) {
            const newCount = Math.floor((canvas.width * canvas.height) / 15000);
            if (Math.abs(newCount - particles.length) > 10) {
                particles = [];
                for (let i = 0; i < newCount; i++) {
                    particles.push(new Particle());
                }
            } else {
                // Update existing particles to fit new canvas size
                particles.forEach(particle => {
                    if (particle.y > canvas.height) {
                        particle.y = Math.random() * canvas.height;
                    }
                });
            }
        }
    }
    
    resizeCanvas();
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
    
    // Update canvas height on scroll and content changes
    function updateCanvasHeight() {
        const newHeight = getFullPageHeight();
        if (Math.abs(newHeight - canvas.height) > 50) {
            resizeCanvas();
            // Redistribute particles for new height
            particles.forEach(particle => {
                if (particle.y > canvas.height) {
                    particle.y = Math.random() * canvas.height;
                }
            });
        }
    }
    
    // Update on scroll and content changes
    let updateTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(updateCanvasHeight, 200);
    });
    
    const observer = new MutationObserver(() => {
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(updateCanvasHeight, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 1.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.4 + 0.6;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Bounce off edges
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
            
            // Keep particles within bounds
            if (this.x < 0) this.x = 0;
            if (this.x > canvas.width) this.x = canvas.width;
            if (this.y < 0) this.y = 0;
            if (this.y > canvas.height) this.y = canvas.height;
            
            // Mouse interaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 2;
                    this.y -= Math.sin(angle) * force * 2;
                }
            }
        }
        
        draw() {
            ctx.fillStyle = `rgba(168, 255, 0, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    function createParticles() {
        particles = [];
        const particleCount = Math.max(50, Math.floor((canvas.width * canvas.height) / 12000));
        console.log(`Creating ${particleCount} particles for canvas ${canvas.width}x${canvas.height}`);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    createParticles();
    
    // Draw connections
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.4;
                    ctx.strokeStyle = `rgba(168, 255, 0, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Mouse tracking
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Start animation
    console.log('Starting particle network animation');
    animate();
}

// Initialize on load
window.addEventListener('load', () => {
    revealSections();
    lucide.createIcons();
    setCurrentYear();
});

// Initialize theme on load
setInitialTheme();