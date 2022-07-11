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
let password1 = document.getElementById('password1')
let password2 = document.getElementById('password2')
const submit = document.querySelector('#submit')
const phone = document.querySelector('#phone')
const address = document.querySelector('#address')
const steps = document.querySelector('.steps')
const stepsTitle = document.querySelector('.steps-title')
const confirmEmail = () => {
    let mail = document.getElementById('email').value
    if (mail.includes('@')
        && mail.includes('mail')
        && mail.length <= 25
        || mail.length >= 14) {

    } else {
        document.querySelector('.error').textContent = 'Incomplete email'
        document.querySelector('#password1').setAttribute('disabled', '')
        document.querySelector('#password2').setAttribute('disabled', '')
        document.querySelector('.next1').setAttribute('disabled', '')
    }
}
const confirmParola1 = () => {
    let password1 = document.querySelector('#password1').value
    if (password1.length < 1 && password1 !== '') {
        document.querySelector('.error').textContent = 'Password too small'
        document.querySelector('#password2').setAttribute('disabled', '')
        document.querySelector('.next1').setAttribute('disabled', '')
    } else if (password1.length >= 9) {
        document.querySelector('.error').textContent = 'Password too large'
        document.querySelector('#password2').setAttribute('disabled', '')
        document.querySelector('.next1').setAttribute('disabled', '')
    }
}
const confirmParola2 = () => {
    let password1 = document.getElementById('password1').value
    let password2 = document.getElementById('password2').value
    let email = document.getElementById('email').value
    if (password1 === '' && password2 === '' && email === '') {
        document.querySelector('.error').textContent = 'Create you account'
        document.querySelector('.next1').setAttribute('disabled', '')
    } else if (password1 === password2 && password2 !== '') {
    } else {
        document.querySelector('.error').textContent = 'Password is not confirmed'
        document.querySelector('.next1').setAttribute('disabled', '')
    }
}
const confirmName = () => {
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    if (firstName === '' || lastName === '') {
        document.querySelector('#phone').setAttribute('disabled', '')
        document.querySelector('.error3').textContent = 'mandatory to complete'
    }
}
const confirmPhone = () => {
    let phone = document.querySelector('#phone').value
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    if (phone.length !== 3 && phone[0] !== 0) {
        document.querySelector('#address').setAttribute('disabled', '')
        document.querySelector('.error3').textContent = 'incorrect number'
        let lastName = document.querySelector('#lastName').value
    }
    if (firstName === '' && lastName === '' && phone === '') {
        document.querySelector('.error3').textContent = ' personal data incomplete'
    }
}
const finishRegistre = () => {
    let phone = document.querySelector('#phone').value
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let address = document.querySelector('#address').value
    if (firstName === '' || lastName === '' || phone === '' || address === '') {
        document.querySelector('#submit').setAttribute('disabled', '')
        document.querySelector('.error3').textContent = 'enter personal data'
    }
}
password1.addEventListener('click', confirmEmail)
password2.addEventListener('click', confirmParola1)
btnNext1.addEventListener('mousedown', confirmParola2)
phone.addEventListener('click', confirmName)
address.addEventListener('click', confirmPhone)
submit.addEventListener("mousedown", finishRegistre)
const moveCard = (card,margin) => {
    slider.style.marginLeft=margin
 let  cards=[card1,card2,card3]
    cards.forEach(((item,index)=>{
        if(item.contains(card)){
            item.style.opacity='100%'
            item.style.transitionDuration = '1s'
        }else{
            item.style.opacity='0'
            item.style.transitionDuration = '0s'
        }
    }))
}
btnNext1.addEventListener('click', () => {
    moveCard(card2,'-300px')
    br2.classList.add('green')
    step2.classList.add('green')
})
btnNext2.addEventListener('click', () => {
    moveCard(card3,'-600px')
    br3.classList.add('green')
    step3.classList.add('green')
})
btnPrev3.addEventListener('click', () => {
    moveCard(card2,'-300px')
    br3.classList.remove('green')
    step3.classList.remove('green')
})
btnPrev2.addEventListener('click', () => {
    moveCard(card1,'0')
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
