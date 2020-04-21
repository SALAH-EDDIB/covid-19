const testBtn = document.querySelector('.start-btn')
const questionnaire = document.querySelector('.questionnaire')
const Préambule = document.querySelector('.Préambule')
const stepper = document.querySelectorAll('.stepper h1')
console.log(stepper);



testBtn.addEventListener('click', () => {
    stepper[0].classList.remove('select')
    stepper[1].classList.add('select')
    testBtn.style.display = 'none'
    Préambule.style.display = 'none'
    questionnaire.style.display = 'block'

})