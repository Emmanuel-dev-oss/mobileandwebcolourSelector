const colorInputs = document.querySelectorAll('.color-input input[type="color"]');
const colorHexInputs = document.querySelectorAll('.color-input input[type="text"]');
const analyzeButton = document.getElementById('analyze-button');
const colorSwatches = document.querySelectorAll('.color-swatch');
const analysisText = document.getElementById('analysis-text');
const colorPreviews = document.querySelectorAll('.color-preview');
const links = document.querySelectorAll('.link');
const signUpBtn = document.querySelector('.signup-button');
const LogInBtn = document.querySelector('.login-button');
const getStarted = document.querySelector('.get-started');
const hero = document.querySelector('.hero');
const heroText = document.querySelectorAll('.hero-text');
const header = document.querySelector('.header');
const analysisResults = document.querySelectorAll('.example-container');

// Function to update the hex code display
function updateHexCode(event){
    const targetInput = event.target;
    const hexInput = targetInput.nextElementSibling; // Assuming hex input is next sibling
    hexInput.value = targetInput.value;    
}

// Add event listeners for color input changes
colorInputs.forEach(colorInputs => {
    colorInputs.addEventListener('input', updateHexCode);
});

analyzeButton.addEventListener('click', () => {
    // Update color swatches
    for (let i = 0; i < colorInputs.length; i++) {
        colorSwatches[i].style.backgroundColor = colorInputs[i].value;
    }

    // colorPreviews[0].style.backgroundColor = colorInputs[0].value;
    // colorPreviews[1].style.backgroundColor = colorInputs[1].value;
    // colorPreviews[2].style.backgroundColor = colorInputs[2].value;
    // colorPreviews[3].style.backgroundColor = colorInputs[3].value;
    // colorPreviews[4].style.backgroundColor = colorInputs[4].value;

    // Example analysis text
    analysisText.textContent = "Analysis: This color palette suggests a modern and vibrant feel."; 

    // Updating color Preveiw for the links
    links[0].style.backgroundColor = colorInputs[0].value;
    links[1].style.backgroundColor = colorInputs[0].value;
    links[2].style.backgroundColor = colorInputs[0].value;
    links[3].style.backgroundColor = colorInputs[0].value;
    links[4].style.backgroundColor = colorInputs[0].value;

    // Update color preveiw for login&Signup button
    signUpBtn.style.backgroundColor = colorInputs[1].value;
    LogInBtn.style.backgroundColor = colorInputs[2].value;
    // const logTxt = LogInBtn.textContent;
    // logTxt.style.backgroundColor = colorInputs[3].value;

    // Update color preveiw for getStarted button
    getStarted.style.backgroundColor = colorInputs[2].value;

    // Update color preveiw for hero background
    hero.style.backgroundColor = colorInputs[3].value;

    // Update color preveiw for hero-text
    header.style.backgroundColor = colorInputs[4].value;
});


// Function to analyze the colors (placeholder logic)
function analyzeColors() {
    // Get the selected color hex codes
    const colors = Array.from(colorHexInputs).map(hexInput => hexInput.value);

    // Placeholder: Just set random scores and styles for now 
    analysisResults.forEach((result, index) => {
        const preview = result.querySelector('.color-preview');
        const scoreElement = result.querySelector('.score');

        // Set a random color preview for each style
        preview.style.backgroundColor = colors[index % colors.length];

        // Placeholder: Set a random score
        scoreElement.textContent = `Score: ${Math.random().toFixed(5)}`;
    });
}

// Add an event listener to trigger analysis when any color input changes
colorInputs.forEach(colorInput => {
    colorInput.addEventListener('input', analyzeColors);
});
