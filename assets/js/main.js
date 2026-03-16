document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
    const trail = document.getElementById('cursor-trail');
    const body = document.body;
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    
    // Colors for sparks
    const colors = ['#EF4B4C', '#3D619B', '#1E293B'];
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        
        // Create sparkles occasionally
        if (Math.random() < 0.3) { 
            createSpark(mouseX, mouseY);
        }
    });
    
    // Smooth trail animation
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.2;
        trailY += (mouseY - trailY) * 0.2;
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        requestAnimationFrame(animateTrail);
    }
    animateTrail();
    
    function createSpark(x, y) {
        const spark = document.createElement('div');
        spark.classList.add('cursor-spark');
        const color = colors[Math.floor(Math.random() * colors.length)];
        spark.style.backgroundColor = color;
        
        const offsetX = (Math.random() - 0.5) * 10;
        const offsetY = (Math.random() - 0.5) * 10;
        spark.style.left = (x + offsetX) + 'px';
        spark.style.top = (y + offsetY) + 'px';
        
        const tx = (Math.random() - 0.5) * 50 + 'px';
        const ty = (Math.random() - 0.5) * 50 + 'px';
        spark.style.setProperty('--tx', tx);
        spark.style.setProperty('--ty', ty);
        
        document.body.appendChild(spark);
        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
    
    // Add hover effect listeners
    const interactiveElements = document.querySelectorAll('a, button, .interactive, input, textarea, .group');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            body.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            body.classList.remove('hovering');
        });
    });
});