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
    document.getElementById('bio-user').textContent = changes.username;
    document.getElementById('card-email').textContent = `Email: ${changes.email}`
    document.getElementById('bio-text').textContent  = `so ... ${ changes.bio_u}`;
    
}