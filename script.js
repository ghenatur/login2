const btnNext1 = document.querySelector('.next1')
const btnNext2 = document.querySelector('.next2')
const btnPrev2 = document.querySelector('.previous2')
const btnPrev3 = document.querySelector('.previous3')
const slider = document.querySelector('.slider')
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const br2 = document.querySelector('.br2')
const br3 = document.querySelector('.br3')
const step2 = document.querySelector('.step2')
const step3 = document.querySelector('.step3')
const password1 = document.querySelector('#password1')
const password2 = document.querySelector('#password2')
const submit = document.querySelector('#submit')
const phone = document.querySelector('#phone')
const steps = document.querySelector('.steps')
const stepsTitle = document.querySelector('.steps-title')
const email = document.querySelector('#email')
const error = document.querySelector('.error')
const error3 = document.querySelector('.error3')
email.addEventListener('input', (ev) => {
    const inputValue = ev.target.value
    console.log(inputValue)
    if (!emailValidation(inputValue)) {
        return error.textContent = 'email dosnt'
    }
    return error.textContent = ''
})
const emailValidation = (mail) => {
    const dot = mail.lastIndexOf('.')
    const aron = mail.indexOf('@')
    return dot - aron > 2 && mail.length - dot > 2 && aron > 2
}
password1.addEventListener('input', (ev) => {
    const inputValue = ev.target.value
    passValidation(inputValue)
})
passValidation = (pass) => {
    if (pass.length < 3) {
        return error.textContent = 'password is to small'
    }
    return error.textContent = ''
}
password2.addEventListener('input', (ev) => {
    const inputValue = ev.target.value
    if (password1.value !== inputValue) {
        return error.textContent = 'passwords doesnt'
    }
    return error.textContent = ''
})
phone.addEventListener('input', (ev) => {
    const inputValue = ev.target.value
    phoneValidation(inputValue)
})
const phoneValidation = (nr) => {
    if (nr[0] !== '0') {
        error3.textContent = 'phone number starts with "0"'
    } else if (nr.length < 9) {
        error3.textContent = 'phone number is small'
    } else {
        error3.textContent = ''
    }
}
const moveCard = (card, margin) => {
    slider.style.marginLeft = margin
    let cards = [card1, card2, card3]
    cards.forEach(((item, index) => {
        if (item.contains(card)) {
            item.style.opacity = '100%'
            item.style.transitionDuration = '1s'
        } else {
            item.style.opacity = '0'
            item.style.transitionDuration = '0s'
        }
    }))
}
btnNext1.addEventListener('click', () => {
    moveCard(card2, '-300px')
    br2.classList.add('green')
    step2.classList.add('green')
})
btnNext2.addEventListener('click', () => {
    moveCard(card3, '-600px')
    br3.classList.add('green')
    step3.classList.add('green')
})
btnPrev3.addEventListener('click', () => {
    moveCard(card2, '-300px')
    br3.classList.remove('green')
    step3.classList.remove('green')
})
btnPrev2.addEventListener('click', () => {
    moveCard(card1, '0')
    br2.classList.remove('green')
    step2.classList.remove('green')
})
submit.addEventListener('click', () => {
    steps.style.opacity = '0'
    stepsTitle.style.opacity = '0'
    card1.style.opacity = '100%'
    card2.style.opacity = '100%'
    steps.style.transitionDuration = '3s'
    stepsTitle.style.transitionDuration = '3s'
    card1.style.transitionDuration = '3s'
    card2.style.transitionDuration = '3s'
    setTimeout(() => {
        slider.style.marginLeft = '900px'
        slider.style.transitionDuration = '2s'
    }, 2000)
})
