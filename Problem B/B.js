function pickRandomColor() {
    let totalColors = 16777216;
    let randomColor = Math.floor(Math.random() * totalColors);
    let randomHex = randomColor.toString(16);
    let colorDisplay = '#' + randomHex;
    document.body.style.backgroundColor = colorDisplay;
    document.getElementById('tBody').insertAdjacentHTML('beforeend', `<div><input id="styleShow" readonly value="The color on display is" ><input type= "text" id="tColor" value=${colorDisplay}><button id="copyCol">Copy</button></div>`);
    document.getElementById('copyCol').addEventListener('click', () => {
        document.getElementById('tColor').select();
        document.execCommand("copy");
    });
}

document.getElementById("pickButton").addEventListener('click', () => {
    document.getElementById('tBody').innerHTML = '';
    pickRandomColor();
})