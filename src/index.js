import checkTextArea from "./modules/checkTextArea";
import countWords from "./modules/countWords";
import generateTextExample from "./modules/generateTextExample";
import { mostWords, quantityOfMostWords } from "./modules/renderWords";

document.getElementById('textInput').addEventListener('keyup', checkTextArea)
document.querySelector('.loadSampleBtn').addEventListener('click', generateTextExample)
document.querySelector('.countWordsBtn').addEventListener('click', countWords)


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

