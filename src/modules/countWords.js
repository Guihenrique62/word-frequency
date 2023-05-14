import swal from 'sweetalert';
export default function countWords(){
   const text = document.getElementById('textInput').value

   //Verifica se o input tem valor e retorna erro caso não
   if(text === ''){
      swal("Falha ao Contar", "Insira o texto desejado no campo.", "error")
   }

   const arrayOfWords = [text.map]

   console.log(arrayOfWords)
}