import swal from 'sweetalert';
import { renderWords } from './renderWords';
export default function countWords(){
   const text = document.getElementById('textInput').value

   //Verifica se o input tem valor e retorna erro caso não
   if(text === ''){
      swal("Falha ao Contar", "Insira o texto desejado no campo.", "error")
   }

   const arrayOfWords = text.split(/[^\wÀ-ÿ]/g).filter(Boolean)

   const count = {};

  // Contar a ocorrência de cada elemento
  for (let i = 0; i < arrayOfWords.length; i++) {
    const element = arrayOfWords[i];
    count[element] = count[element] ? count[element] + 1 : 1;
  }

  // Criar o array de objetos com as palavras e suas quantidades
  const result = [];
  for (const elemento in count) {
    result.push({ word: elemento, quantity: count[elemento] });
  }

  //ordena o array de acordo com a quantidade de palavras
  result.sort((a,b)=>{
   if(a.quantity > b.quantity){
      return -1
   }else{return true}
  })

  renderWords(result)
}

