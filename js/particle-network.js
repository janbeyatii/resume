// Particle Network Background - Optimized for 60fps
// Similar to webitsolutions.ca style

(function() {
    'use strict';
    
    // Detect mobile devices
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (window.innerWidth <= 768 && 'ontouchstart' in window) ||
               window.innerWidth <= 768;
    }
    
    // Disable on mobile devices
    if (isMobileDevice()) {
        console.log('Particle network disabled on mobile device');
        return;
    }
    
    const canvas = document.getElementById('particleNetwork');
    if (!canvas) {
        console.warn('Particle network canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0, radius: 200 };
    let animationFrameId = null;
    let isMouseActive = false;
    let canvasWidth = 0;
    let canvasHeight = 0;
    
    // Configuration
    const config = {
        particleCount: 200,
        connectionDistance: 200,
        particleSpeed: 0.3,
        particleSize: 2,
        lineWidth: 0.8,
        baseOpacity: 0.7,
        hoverOpacity: 1.0,
        mouseInfluenceRadius: 200,
        mouseRepelStrength: 0.02
    };
    
    // Initialize canvas size
    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvasWidth = window.innerWidth;
        canvasHeight = Math.max(
            window.innerHeight,
            document.documentElement.scrollHeight,
            document.body.scrollHeight
        );
        
        // Set actual canvas size in device pixels
        canvas.width = canvasWidth * dpr;
        canvas.height = canvasHeight * dpr;
        
        // Set CSS size to match viewport
        canvas.style.width = '100vw';
        canvas.style.height = canvasHeight + 'px';
        
        // Scale context to handle high DPI displays
        ctx.scale(dpr, dpr);
        
        // Recreate particles if needed
        if (particles.length === 0) {
            createParticles();
        } else {
            // Adjust existing particles
            particles.forEach(particle => {
                if (particle.x > canvasWidth) particle.x = canvasWidth;
                if (particle.y > canvasHeight) particle.y = canvasHeight;
            });
        }
        
        console.log(`Canvas resized: ${canvasWidth}x${canvasHeight} (device: ${canvas.width}x${canvas.height})`);
    }
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvasWidth;
            this.y = Math.random() * canvasHeight;
            this.vx = (Math.random() - 0.5) * config.particleSpeed;
            this.vy = (Math.random() - 0.5) * config.particleSpeed;
            this.size = config.particleSize;
            this.opacity = config.baseOpacity;
            this.baseOpacity = config.baseOpacity;
        }
        
        update() {
            // Mouse interaction - attract particles to cursor
            if (isMouseActive) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    // Attract to mouse (jump toward cursor)
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    // Strong attraction force
                    this.vx += Math.cos(angle) * force * 0.15;
                    this.vy += Math.sin(angle) * force * 0.15;
                    
                    // Brighten near mouse
                    const brightness = 1 - (distance / mouse.radius);
                    this.opacity = this.baseOpacity + (config.hoverOpacity - this.baseOpacity) * brightness;
                } else {
                    this.opacity = this.baseOpacity;
                }
            } else {
                this.opacity = this.baseOpacity;
            }
            
            // Update position
            this.x += this.vx;
            this.y += this.vy;
            
            // Boundary collision with damping
            if (this.x < 0 || this.x > canvasWidth) {
                this.vx *= -0.8;
                this.x = Math.max(0, Math.min(canvasWidth, this.x));
            }
            if (this.y < 0 || this.y > canvasHeight) {
                this.vy *= -0.8;
                this.y = Math.max(0, Math.min(canvasHeight, this.y));
            }
            
            // Apply friction
            this.vx *= 0.99;
            this.vy *= 0.99;
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    function createParticles() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
        console.log(`Created ${particles.length} particles`);
    }
    
    // Draw connections between nearby particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < config.connectionDistance) {
                    // Check if connection is near mouse - if so, disconnect it
                    const midX = (particles[i].x + particles[j].x) / 2;
                    const midY = (particles[i].y + particles[j].y) / 2;
                    const distToMouse = Math.sqrt(
                        Math.pow(midX - mouse.x, 2) + 
                        Math.pow(midY - mouse.y, 2)
                    );
                    
                    // Disconnect connections near cursor
                    if (isMouseActive && distToMouse < mouse.radius * 0.8) {
                        // Don't draw this connection - it's disconnected near cursor
                        continue;
                    }
                    
                    // Calculate opacity based on distance
                    let opacity = (1 - distance / config.connectionDistance) * 0.5;
                    
                    // Brighten lines that are further from mouse
                    if (isMouseActive && distToMouse > mouse.radius) {
                        opacity += 0.2;
                    }
                    
                    ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(opacity, 0.8)})`;
                    ctx.lineWidth = config.lineWidth;
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
        // Clear with black background (using CSS dimensions since context is scaled)
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        drawConnections();
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // Mouse event handlers
    function handleMouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        isMouseActive = true;
    }
    
    function handleMouseLeave() {
        isMouseActive = false;
    }
    
    // Initialize
    function init() {
        console.log('Initializing particle network...');
        console.log('Canvas element:', canvas);
        console.log('Canvas context:', ctx);
        
        resizeCanvas();
        createParticles();
        
        console.log(`Canvas size: ${canvasWidth}x${canvasHeight}`);
        console.log(`Particles: ${particles.length}`);
        
        // Event listeners
        window.addEventListener('resize', () => {
            resizeCanvas();
        });
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('mouseenter', () => {
            isMouseActive = true;
        });
        
        // Update canvas height on scroll
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                resizeCanvas();
            }, 100);
        });
        
        // Also update on content changes
        if (typeof ResizeObserver !== 'undefined') {
            const resizeObserver = new ResizeObserver(() => {
                resizeCanvas();
            });
            resizeObserver.observe(document.body);
        }
        
        // Start animation
        console.log('Starting particle network animation');
        animate();
    }
    
    // Initialize when DOM is ready
    function startInit() {
        if (document.getElementById('particleNetwork')) {
            init();
        } else {
            console.warn('Canvas not found, retrying...');
            setTimeout(startInit, 100);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startInit);
    } else {
        setTimeout(startInit, 50);
    }
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    });
})();
