function triggerExplosion() {
    // Show the explosion circles
    const explosion = document.getElementById('explosionContainer');
    explosion.style.display = 'block';

    // Hide the link after clicking
    document.getElementById('birthdayLink').style.display = 'none';

    // After the explosion animation, show the wishes
    setTimeout(() => {
        explosion.style.display = 'none'; // Hide the explosion
        document.getElementById('wishes').style.display = 'block'; // Show the birthday message
    }, 1000); // Matches the explosion animation time
}