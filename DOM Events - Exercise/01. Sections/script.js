function create(words) {
   let divContent = document.getElementById('content')
   words.forEach(element => {
         let div1 = document.createElement('div')
         let para = document.createElement('p')
         para.textContent = element
         para.style.display = 'none'
         div1.appendChild(para)
         divContent.appendChild(div1)
         div1.addEventListener('click', displayPara)
      });

      
      function displayPara(event){
         event.target.children[0].style.display = ''
      }
   
   
}