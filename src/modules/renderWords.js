import createTable from "./createTable"

export let mostWords = [];
export let quantityOfMostWords = [];

export function renderWords(result){
   try {
      if(!result){
      throw new Error('result is not defined')
      }else{

         result.forEach(element => {
            createTable(element.word,element.quantity)
         });

         for(let i = 0; i < 5;i++){
           mostWords.push(result[i].word)
           quantityOfMostWords.push(result[i].quantity)
         }

      }
   }catch (err) {
      console.error(err)
   }
   
}