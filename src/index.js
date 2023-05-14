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