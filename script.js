const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 36
const pColor = 'white'

const biggerText = () => {
    if(fontSize >= 51) {
        return
    }
    fontSize += 5
    p.style.fontSize = fontSize + 'px';
}

const lowerText = () => {
    if(fontSize <= 21) {
        return
    }
    fontSize -= 5
    p.style.fontSize = fontSize + 'px';
}

const newColor = () => {

    const r = Math.floor(Math.random () * 255)
    const g = Math.floor(Math.random () * 255)
    const b = Math.floor(Math.random () * 255)
    p.style.color = `rgb(${r},${g},${b})`
}

sizeUp.addEventListener('click', biggerText)
sizeDown.addEventListener('click', lowerText)
colorBtn.addEventListener('click', newColor)