export default function checkTextArea(){
   const textArea = document.getElementById('textInput')
   const limit = textArea.getAttribute('maxlength')
   const currentValue = textArea.value.length
   const counter = document.querySelector('.counter')

   counter.textContent = `${currentValue}/${limit}`

}