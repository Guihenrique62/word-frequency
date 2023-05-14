import checkTextArea from "./modules/checkTextArea";
import countWords from "./modules/countWords";
import generateTextExample from "./modules/generateTextExample";

document.getElementById('textInput').addEventListener('keyup', checkTextArea)
document.querySelector('.loadSampleBtn').addEventListener('click', generateTextExample)
document.querySelector('.countWordsBtn').addEventListener('click', countWords)



//canvas graphic
const canvas = document.querySelector('.graphic')

new Chart(canvas, {
   type: 'doughnut',
   data: {
     labels: ['maça','banana'],
     datasets: [{
       label: 'Count',
       data: [12, 19],
       borderWidth: 1
     }]
   }
 });

