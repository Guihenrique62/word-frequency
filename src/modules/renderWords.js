import { chart } from "..";
import createTable from "./createTable"
import removeTable from "./removeTable";

export let mostWords = [];
export const quantityOfMostWords = [];

export async function renderWords(result){
   try {
      if(!result){
      throw new Error('result is not defined')
      }else{
         //remove as tr existentes e cria as atuais
         removeTable()
         result.forEach(element => {
            createTable(element.word,element.quantity)
         });

         //Seleciona as 5 words mais usadas
         for(let i = 0; i < 5;i++){
            mostWords = result.map(()=>{
               
            })
           quantityOfMostWords.push(result[i].quantity)
         }

         function addData(chart, label, data) {
            chart.data.labels.push(label);
            chart.data.datasets.forEach((dataset) => {
                dataset.data.push(data);
            });
            chart.update();
        }

        //addData(chart,mostWords,quantityOfMostWords)
        console.log(mostWords,quantityOfMostWords)
      }
   }catch (err) {
      console.error(err)
   }
   
}