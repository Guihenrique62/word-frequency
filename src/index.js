import checkTextArea from "./modules/checkTextArea";
import countWords from "./modules/countWords";
import generateTextExample from "./modules/generateTextExample";

document.getElementById('textInput').addEventListener('keyup', checkTextArea)
document.querySelector('.loadSampleBtn').addEventListener('click', generateTextExample)
document.querySelector('.countWordsBtn').addEventListener('click', countWords)



