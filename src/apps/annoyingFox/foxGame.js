// This script creates a simple animation of a spinning fox that increases its speed with each click.
document.addEventListener('DOMContentLoaded', function() {
    const fox = document.getElementById('fox');
    const spinButton = document.getElementById('spinButton');
    let speed = 1; // Initial rotation speed
    let rotation = 0; // Current rotation angle

    spinButton.addEventListener('click', function() {
        speed++; // Increase speed on each click
    });

    function rotateFox() {
        rotation += speed; // Increment rotation angle based on speed
        fox.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(rotateFox); // Request next animation frame
    }

    rotateFox(); // Start the rotation animation
});