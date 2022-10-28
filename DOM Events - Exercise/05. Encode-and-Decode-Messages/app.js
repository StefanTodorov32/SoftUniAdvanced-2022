function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('button')[0]
    let decodeBtn = document.querySelectorAll('button')[1]
    
    let charArray = []
    encodeBtn.addEventListener('click', (e) => {
        charArray = []
        let text = document.querySelector('textarea')
        document.querySelectorAll('textarea')[1].value = ''
        for (let chars of text.value) {
            let textChars = chars.charCodeAt() + 1
            charArray.push(textChars)
        }
        let secondText = document.querySelectorAll('textarea')[1]
        secondText.disabled = false
        for (let char of charArray) {
            secondText.value += String.fromCharCode(char)
        }
        text.value = ''
        secondText.disabled = true
        
    })
    let decodedArray =[]

    decodeBtn.addEventListener('click', (e) => {
        let secondText = document.querySelectorAll('textarea')[1]
        document.querySelectorAll('textarea')[1].value = ''
        for (let chars of charArray) {
            chars -= 1
            decodedArray.push(chars)
            secondText.value += String.fromCharCode(chars)

        }
    })

    
}