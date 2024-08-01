// Select elements
const btn1 = document.querySelector("#myButton1");
const btn2 = document.querySelector("#myButton2");
const output = document.querySelector(".insertData");

// Function to generate a random hex color
const generatedColor = () => {
    const colorData = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += colorData[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Function to set initial gradient colors
const setInitialGradient = () => {
    color1 = generatedColor();
    color2 = generatedColor();
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    btn1.textContent = color1;
    btn1.style.backgroundColor = color1;
    btn2.textContent = color2;
    btn2.style.backgroundColor = color2;
    output.textContent = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
};

// Handle click on Button 1 to generate a new gradient color
const handleBtn1Click = () => {
    color1 = generatedColor();
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    btn1.textContent = color1;
    btn1.style.backgroundColor = color1;
    output.textContent = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
};

// Handle click on Button 2 to generate a new gradient color
const handleBtn2Click = () => {
    color2 = generatedColor();
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    btn2.textContent = color2;
    btn2.style.backgroundColor = color2;
    output.textContent = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
};

// Add event listeners for buttons and output
btn1.addEventListener("click", handleBtn1Click);
btn2.addEventListener("click", handleBtn2Click);
output.addEventListener("click", () => {
    navigator.clipboard.writeText(output.textContent);
    alert("Copied to clipboard 😎");
});

// Set initial gradient when the page loads
window.onload = setInitialGradient;
