console.log("game1.js loaded");
// Function to handle the folding of paper

document.addEventListener('DOMContentLoaded', function() 
{
    const foldButton = document.getElementById('foldButton');
    const foldCountDisplay = document.getElementById('foldCount');
    const thicknessDisplay = document.getElementById('thickness');
    const paperImage = document.getElementById('paperImage');

    let foldCount = 0;
    let thickness = 0.0001; // Initial thickness in meters (0.1 mm)
    const imagePaths = [
        "src/assets/paperfolding/paper1.webp",
        "src/img/paper-2.png",
        "src/img/paper-3.png",
        "src/img/paper-4.png",
        "src/img/paper-5.png",
        "src/img/paper-6.png",
        "src/img/paper-7.png",
        "src/img/paper-8.png",
        "src/img/paper-9.png",
        "src/img/paper-10.png"
    ];

    foldButton.addEventListener('click', function() {
        foldCount++;
        thickness *= 2;

        foldCountDisplay.textContent = foldCount;
        thicknessDisplay.textContent = thickness.toFixed(6); // Display thickness with 6 decimal places

        // Update image
        if (foldCount <= imagePaths.length) {
            paperImage.src = imagePaths[foldCount - 1];
        } else {
            paperImage.src = imagePaths[imagePaths.length - 1]; // Keep last image
        }
    });
});