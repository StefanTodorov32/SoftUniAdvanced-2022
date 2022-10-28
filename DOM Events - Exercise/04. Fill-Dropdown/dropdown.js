function addItem() {
    let textInput = document.getElementById('newItemText')
    let valueInput = document.getElementById('newItemValue')

    let selectMenu = document.getElementById('menu')

    let opt = document.createElement('option')
    opt.textContent = textInput.value
    opt.value = valueInput.value
    selectMenu.appendChild(opt)
    textInput.value = ''
    valueInput.value = ''
    
}