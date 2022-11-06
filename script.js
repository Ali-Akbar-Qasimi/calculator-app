let toggleContainer = document.querySelector('.toggle')
let toggleIndex = 0
let container = document.querySelector('.container')
toggleContainer.addEventListener('click',()=>{
    toggleIndex++
    if(toggleIndex === 3){
        toggleIndex = 0
    }
    container.classList = 'container'
    container.classList.add('theme-'+parseInt(toggleIndex+1))
    toggleContainer.children[0].style.transform = `translateX(${toggleIndex*150}%)`
})


// calculate
let equal = document.querySelector('.equal')
let input = document.querySelector(".input")
let keys = document.querySelectorAll('.key')

keys.forEach(key=>{
    key.addEventListener('click',()=>{
        input.value = input.value.replaceAll('×','*')
        if(key.textContent === '='){
            calculate()
        }else if(key.textContent === 'Reset'){
            reset()
        }else if(key.textContent === 'Del'){
            let splitedInput = input.value.split('')
            splitedInput.pop()
            input.value = splitedInput.join('')
        } else{
            input.value += key.textContent
        }
    })
})

function reset(){
    input.value = ''
}

function calculate(){
    let notLocal = input.value.replaceAll(',','')
    input.value = parseFloat(eval(notLocal)).toLocaleString()
}