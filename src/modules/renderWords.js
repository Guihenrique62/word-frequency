import createTable from "./createTable"
import removeTable from "./removeTable";



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

         const wordsOnly = result.map(item => item.word)
         const mostWords = wordsOnly.slice(0,5)

         const quantityOnly = result.map(item => item.quantity)
         const quantityOfMostWords = quantityOnly.slice(0,5)

         const currentChart = Chart.getChart("graphic");

         // Verifica se o gráfico existe e o destrói
         if (currentChart) {
         currentChart.destroy();
         }
         
         const canvas = document.querySelector('.graphic')

         const chart = new Chart(canvas, {
         type: 'doughnut',
         data: {
            labels: mostWords,
            datasets: [{
               label: 'Quantidade',
               data: quantityOfMostWords,
               borderWidth: 1
            }]
         }
         });
      }
   }catch (err) {
      console.error(err)
   }
   
}
