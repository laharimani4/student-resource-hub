// StudySync Main Script
document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if(navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            } else {
                navbar.style.boxShadow = '0 1px 0 var(--border)';
            }
        });
    }

    // Mobile Menu Toggle (Simplified)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            if(navLinks) {
                navLinks.classList.toggle('d-none');
                navLinks.classList.toggle('d-md-flex');
                // Adjust styles to make it drop down nicely in an actual implementation.
                // For this demo, we simply toggle it block/flex.
                if(!navLinks.classList.contains('d-none')) {
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '4.5rem';
                    navLinks.style.left = '0';
                    navLinks.style.right = '0';
                    navLinks.style.background = 'var(--surface)';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.padding = '1rem';
                    navLinks.style.boxShadow = 'var(--shadow-md)';
                } else {
                    navLinks.style.position = 'static';
                    navLinks.style.flexDirection = 'row';
                }
            }
        });
    }

    // Login/Register Toggle
    const toggleRegister = document.getElementById('toggleRegister');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if(toggleRegister && loginForm && registerForm) {
        toggleRegister.addEventListener('click', () => {
            if(loginForm.style.display === 'none') {
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
                toggleRegister.textContent = 'Register Now';
                document.querySelector('.auth-card h2').textContent = 'Welcome Back';
                document.querySelector('.auth-card p').textContent = 'Login to access your personalized resources.';
            } else {
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
                toggleRegister.textContent = 'Login to existing account';
                document.querySelector('.auth-card h2').textContent = 'Create Account';
                document.querySelector('.auth-card p').textContent = 'Join StudySync and discover the best academic resources.';
            }
        });
    }

    // File Upload Drag and Drop interactions
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const browseBtn = document.getElementById('browseBtn');
    const fileNameDisplay = document.getElementById('fileNameDisplay');

    if(dropZone && fileInput && browseBtn) {
        browseBtn.addEventListener('click', () => fileInput.click());

        fileInput.addEventListener('change', (e) => {
            if(e.target.files.length > 0) {
                showFileName(e.target.files[0].name);
            }
        });

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
            dropZone.style.border = '2px dashed var(--primary)';
            dropZone.style.background = 'rgba(79, 70, 229, 0.05)';
        });

        dropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            dropZone.style.border = '2px dashed var(--border)';
            dropZone.style.background = '#f8fafc';
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            dropZone.style.border = '2px dashed var(--border)';
            dropZone.style.background = '#f8fafc';
            
            if(e.dataTransfer.files.length > 0) {
                fileInput.files = e.dataTransfer.files;
                showFileName(e.dataTransfer.files[0].name);
            }
        });

        function showFileName(name) {
            if(fileNameDisplay) {
                fileNameDisplay.textContent = `Selected File: ${name}`;
                fileNameDisplay.style.display = 'block';
            }
        }
    }

    // Forms submission dummy handle
    const authForms = document.querySelectorAll('form');
    authForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if(form.id === 'loginForm' || form.id === 'registerForm') {
                e.preventDefault();
                // Demo redirect
                window.location.href = 'dashboard.html';
            } else if (form.id === 'uploadForm') {
                e.preventDefault();
                alert('Resource published successfully!');
                window.location.href = 'search.html';
            }
        });
    });

    // Hero Search Enter Key dummy handle
    const heroSearch = document.getElementById('heroSearch');
    if(heroSearch) {
        heroSearch.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                window.location.href = 'search.html';
            }
        });
    }

});
