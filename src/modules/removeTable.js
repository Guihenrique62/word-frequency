export default function removeTable(){
   const tbody = document.querySelector('tbody')
   const listOfTr = document.querySelectorAll('.tr-body')
   listOfTr.forEach((element)=>{
      tbody.removeChild(element)
   })
}