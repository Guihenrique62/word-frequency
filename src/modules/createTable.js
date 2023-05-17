export default function createTable(word,quantity){

   const tableContainer = document.querySelector('.table-container')
   tableContainer.style.display = 'flex'

   const graphic = document.querySelector('.graphic-container')
   graphic.style.display = 'flex'

   const tr = document.createElement('tr')
   const wordTd = document.createElement('td')
   wordTd.textContent = word
   const quantityTd = document.createElement('td')
   quantityTd.textContent = quantity

   tr.append(wordTd,quantityTd)
   document.querySelector('tbody').append(tr)
}