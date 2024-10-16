function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('open');
    }
}


const storedChanges = localStorage.getItem('userDetails');

if (storedChanges) {
    const changes = JSON.parse(storedChanges);

    
    document.getElementById('name-user').textContent = changes.username;
    document.getElementById('footer-user').textContent = changes.username;
    document.getElementById('bio-user').textContent = changes.username;
    document.getElementById('card-email').textContent = `Email: ${changes.email}`
    document.getElementById('bio-text').textContent  = `so ... ${ changes.bio_u}`;
    
}

//here is dark mode change work S

// const themeToggle = document.getElementById('theme-toggle')[0]
// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark')


// });