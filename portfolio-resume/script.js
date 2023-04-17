const logo = document.getElementById('logo')
const imageOne = document.getElementById('image-one')
const imageTwo = document.getElementById('image-two')

logo.addEventListener('click', event => {
    window.open('index.html','self')
})

imageOne.addEventListener('click', event => {
    window.open('https://berlinrivas.github.io/Front-end-Portfolio-Project/','target')
})

imageTwo.addEventListener('click',event => {
    window.open('https://berlinrivas.github.io/project-weather-app/','target')
})

