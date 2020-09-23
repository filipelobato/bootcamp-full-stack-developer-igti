var BootcampIGTI = BootcampIGTI || {};

BootcampIGTI.DesafioModulo1 = (function() {
    
    function DesafioModulo1() {
        this.inputRed = document.querySelector('#redInput');
        this.inputBlue = document.querySelector('#blueInput');
        this.inputGreen = document.querySelector('#greenInput');

        this.inputRedRange = document.querySelector('#red');
        this.inputBlueRange = document.querySelector('#blue');
        this.inputGreenRange = document.querySelector('#green');

        this.resultado = document.querySelector('#resultado');
    }

    DesafioModulo1.prototype.iniciar = function() {
        let inputsColors = document.querySelectorAll('.color-input');
        inputsColors.forEach(item => item.value = 0);
        
        let inputsRange = document.querySelectorAll('input[type=range]');
        inputsRange.forEach(item => item.addEventListener("change", onChange.bind(this)));
        
    }
    
    const onChange = function() {
        const red = this.inputRedRange.value;
        const blue = this.inputBlueRange.value; 
        const green =  this.inputGreenRange.value;

        this.inputRed.value = red;
        this.inputBlue.value = blue;
        this.inputGreen.value = green;

        updateResultColor(red, blue, green);
    }

    const rgbToString = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

    const updateResultColor = (r = 0, g = 0, b = 0) => {
        const rgbColorString = rgbToString(r, g, b);
        this.resultado.style.backgroundColor = rgbColorString;
    }

    return DesafioModulo1;
}());
    
window.addEventListener("DOMContentLoaded", () => {

    let desafioModulo1 = new BootcampIGTI.DesafioModulo1();
    desafioModulo1.iniciar();
});